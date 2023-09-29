import { title } from "@/components/primitives";
import contactUs from '../../components/Images/contact.png'
export default function contact() {
	return (
		
		<div>
<div className="topBckg" style={{ backgroundImage: `url(${contactUs.src})`}}>
<div>
<p>من نحن</p>	
<p className="txt2">تقديم الرؤى لتعزيز الصحة المالية لأعمالك.</p>	

</div>
</div>

<div className="contactUs container" style={{marginTop:"86px"}}>
<div className="container-fluid">


<div className="row gy-5">
<div className="col-7">
<p  className="title-sm">  خدماتنا</p>
<p className="title-lg" >  تواصل معنا! </p>
<p className="div1Det">في المركز الاستشاري المصري، نقدم مجموعة شاملة من الخدمات المالية المصممة لدعم نمو أعمالك.</p>
<p className="contact-title">اوقات العمل</p>
<p className="contact-txt">يومياً من<span> الخميس </span> الى  <span>السبت</span> </p>
<p className="contact-txt contact-margin ">من الساعة<span> السادسة مساءاً </span> الى الساعة <span> التاسعة صباحاً </span> </p>

<p className="contact-title">العنوان</p>
<p className="contact-txt2">110 عمارات مدينة الفتح - شارع جمال سليم - حى السفارات - مدينة نصر - القاهرة</p>

</div>
<div className="col-5">
<div className="contact-input contact-input-div1">
	<div>
<label>الاسم الاول</label>
<input/></div>
<div >
<label>الاسم الاخير</label>
<input/></div>
</div>

<div className="contact-input contact-input-div2">
<label>رقم الهاتف</label>
<div className="input-border">
	
<input/>

	<p>+20
		</p>
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

</div>		</div>
	);
}
 