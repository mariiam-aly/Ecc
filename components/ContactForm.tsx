
"use client";
import Image from "next/image";
import egyflag from '../components/Images/egyflag.svg'
import { useForm, ValidationError } from '@formspree/react';
import { useRef } from "react";
export default function ContactForm() {
	const formRef = useRef<any>(null);

	const [state, handleSubmit] = useForm("xrgwokod");

	/*const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		setDisabled(true)
		event.preventDefault();
		await handleSubmit(event);
		if (state.succeeded) {
		  setSuccess(true);
		  setDisabled(false)
		  if (formRef.current) {
			formRef.current.reset(); 		  }
		  console.log("success")
		}
	  };*/


		if (state.succeeded) {
		  if (formRef.current) {
			formRef.current.reset(); 		  }
		  console.log("success")
		}
	 
	return (

<form ref={formRef} onSubmit={handleSubmit}>
<div className="contact-input ">
	<div >
<label htmlFor="name">الاسم </label>
<input  id="name"
        name="name" required/></div>

</div>

<div className="contact-input contact-input-div2">
<label htmlFor="phone">رقم الهاتف</label>
<div className="input-border">
	
<input   id="phone"
        name="phone" required type="phone" minLength={8} maxLength={8}/>


	<p>+20
		</p>
		<Image style={{marginRight:"8px"}}  src={egyflag} alt="Egypt flag"/>

</div>
</div>

<div className="contact-input">
<label htmlFor="email">البريد الالكتروني</label>
<input  id="email"
type='email'
        name="email" required/>

</div>
<ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

<div className="contact-input">
<label htmlFor="message">نص الرسالة</label>
<textarea   id="message"
        name="message"/>
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

</div>

<div style={state.succeeded?{display:"flex",justifyContent:"space-between",alignItems:"center"}:{}} className="send-btn">
{state.succeeded?
<p className="success">لقد تم ارسال رسالتك بنجاح!</p>:null}

	<button type="submit" disabled={state.submitting}>إرسال</button>
</div>
</form>
	
	);
}
 