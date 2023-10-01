import { title } from "@/components/primitives";
import contactUs from '../../components/Images/contact.png'

import Image from "next/image";

import clock from '../../components/Images/clock.png'
import map from '../../components/Images/map.png'
import egyflag from '../../components/Images/egyflag.svg'

export default function contact() {
	return (
		
		<div>
<div className="topBckg" style={{ backgroundImage: `url(${contactUs.src})`}}>
<div>
<p>من نحن</p>	
<p className="txt2">تقديم الرؤى لتعزيز الصحة المالية لأعمالك.</p>	

</div>
</div>



<div className="contactUs container-ecc " style={{marginTop:"86px"}}>
<div className="container-fluid">


<div className="row gy-5">
<div className="col-7">
<h3>  خدماتنا</h3>
<h1>  تواصل معنا! </h1>
<h2>في المركز الاستشاري المصري، نقدم مجموعة شاملة من الخدمات المالية المصممة لدعم نمو أعمالك.</h2>

<Image 
width={26}
height={26}
src={clock} alt="اوقات العمل"/>

<p className="contact-title">اوقات العمل</p>
<p className="contact-txt">يومياً من<span> الخميس </span> الى  <span>السبت</span> </p>
<p className="contact-txt contact-margin ">من الساعة<span> السادسة مساءاً </span> الى الساعة <span> التاسعة صباحاً </span> </p>


<Image 
width={26}
height={26}
src={map} alt="العنوان"/>

<p className="contact-title">العنوان</p>
<p className="contact-txt2">110 عمارات مدينة الفتح - شارع جمال سليم - حى السفارات - مدينة نصر - القاهرة</p>

</div>
<div className="col-5">
<div className="contact-input ">
	<div>
<label>الاسم </label>
<input/></div>

</div>

<div className="contact-input contact-input-div2">
<label>رقم الهاتف</label>
<div className="input-border">
	
<input/>


	<p>+20
		</p>
		<Image style={{marginRight:"8px"}}  src={egyflag} alt="Egypt flag"/>

</div>
</div>

<div className="contact-input">
<label>البريد الالكتروني</label>
<input/>

</div>

<div className="contact-input">
<label>نص الرسالة</label>
<textarea/>

</div>
<div className="send-btn">
	<button>إرسال</button>
</div>

</div>
</div>
</div>

</div>

</div>		
	);
}
 