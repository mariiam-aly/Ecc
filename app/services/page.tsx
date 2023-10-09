"use client";

import { title } from "@/components/primitives";
import service from '../../components/Images/service.png'
import { useEffect, useState } from "react";
import Image from "next/image";
export default function DocsPage() {
	const [active,setActive]=useState(0)

    useEffect(() => {
		window.scrollTo(0, 0);},[active])
	return (
		<div>
				<div className="topBckg" >
<Image 
src={service}
placeholder="blur"
fill
priority

style={{objectFit:"cover"}}
sizes="100vw"
 alt="خدماتنا"/>
<div className="overlay">
<p>خدماتنا</p>	
<p className="txt2">تقديم الرؤى لتعزيز الصحة المالية لأعمالك.</p>	

</div>

</div>
		
		<div className="container-ecc">
			
			
			<div className="services-body">

	
			<div className="service-categ">
				<div className="sticky-categ">

			
<p className="categ-title">قائمة الخدمات</p>
<div className="categs-container">


<div className="categs">
<p className={active==0?'activeCateg':''} onClick={()=>{setActive(0); }}>نبذة عن المكتب</p>
<p className={active==1?'activeCateg':''} onClick={()=>setActive(1)}>الرؤية والرسالة
</p>

<p className={active==2?'activeCateg':''} onClick={()=>setActive(2)}>خدماتنا</p>

</div>
</div>


<ul  className="nav nav-underline">
  <li className="nav-item">
  <p className={active==0?'activeCateg':''} onClick={()=>setActive(0)}>نبذة عن المكتب</p>
  </li>
  <li className="nav-item">
  <p className={active==1?'activeCateg':''} onClick={()=>setActive(1)}>الرؤية والرسالة
</p>
  </li>
  <li className="nav-item">
  <p className={active==2?'activeCateg':''} onClick={()=>setActive(2)}>خدماتنا</p>
  </li>
  
</ul>

</div>	</div>
{active==0?
			<div className="service-data">
			<p className="service-title">نبذة عن المكتب</p>
			<p className="service-det"> تأسس المركز الإستشاري المصري عام 1998 بالاسكندرية و هو مركز متخصص في المحاسبة القانونية و المراجعة المالية و الإستشارات المالية و الإدارية بخبرة تزيد عن 25 عام فى المجال  كما أنه عضو في العديد من الجمعيات المهنية المحلية والإقليمية. 
			</p>
			</div>:
active==1?

<div className="service-data">
		


<p className="service-subtitle2">الرؤية:</p>

<ul>
	<li>
		
	أن نصبح الخيار الأول لعملائنا في توفير حلول محاسبية و استشارية مبتكرة و فعالة
		 
		 </li>


</ul>


<p className="service-subtitle2">الرسالة:</p>

<ul>
	<li>
		
	أن نسعى لتحقيق رضا عملائنا و تطوير مهارات موظفينا و تعزيز قيمنا المهنية والأخلاقية في كل ما نقوم به.		 
		 </li>


</ul>

	
			</div>:
		
<div className="service-data">
		


		<p className="service-subtitle2">١. دراسات الجدوى</p>
		
		<ul>
			<li>
				
			يمكننا اعداد دراسات جدوى متخصصة لقياس مدى جدوى تطبيق المشروع ونجاحه من خلال توضيح الاستثمارات المطلوبة، والعائد المتوقع والمؤثرات الخارجية على المشروع، مثل قوانين الدولة، والمُنافسة والتطور التقني والفني.				 
				 </li>
		
		
		</ul>
		
		
		<p className="service-subtitle2">٢. خدمات التأسيس</p>
		
		<ul>
			<li>
				
			لتأسيس شركة أو منشأة يمكننا مساعدتك اختيار النوع المناسب لنشاطك وميزانيتك وذلك من خلال فريق متكامل من الخبراء قادرون على توجيهك للاختيار الامثل لك.				 </li>
		
		
		</ul>
		
		<p className="service-subtitle2">٣.  تصميم الأنظمة المالية و الإدارية</p>
		
		<ul>
			<li>
				
			لنجاح أي شركة أو منشأة يجب أن يتوافر لديها نظام مالى و إدارى يتسم بالكفاءة والفاعلية لذا يمكننا أن نساعدك في تصميم الأنظمة المالية والإدارية التى تتناسب مع نشاط شركتك وذلك من خلال خبراء ماليين و اداريين متخصصين.			 </li>
		
		
		</ul>
		
		<p className="service-subtitle2">٤. لمراجعة المالية</p>
		
		<ul>
			<li>
				
			هي عملية فحص وتقييم القوائم المالية للشركة لتحديد ما إذا كانت تعكس بدقة الوضع المالي والأداء والأحداث المالية للشركة.				 </li>
		
		
		</ul>
		
		<p className="service-subtitle2">٥.  التحليل المالى</p>
		
		<ul>
			<li>
				
			يمكننا تقييم البيانات المالية للشركة لتحديد أدائها المالي ومدى قدرتها على الوفاء بالتزاماتها المالية. وذلك من خلال مجموعة من الأساليب والأدوات لمقارنة البيانات المالية للشركة ببعضها البعض، أو ببيانات الشركات الأخرى في نفس القطاع ، و ذلك للمساعدة فى تقييم أداء الشركة و اتخاذ القرارات الاستثمارية و المالية عن طريق مجموعة متميزة من الخبراء المتخصصين فى التحليل المالى.				 </li>
		
		
		</ul>
		
		<p className="service-subtitle2">٦.  إعادة هيكلة المشروعات</p>
		
		<ul>
			<li>
				
			يقدم المركز خدمات إعادة هيكلة المشروعات وذلك بعمل تغييرات جوهرية في هيكل أو وظائف أو عمليات المشروع بهدف تحسين أدائه					 </li>
		
		
		</ul>
		
		<p className="service-subtitle2">٧.  تمويل المشروعات</p>
		
		<ul>
			<li>
				
			يقدم المركز كافة الاستشارات اللازمة و الكفيله بحصولك على التمويل اللازم لبدء مشروعك وذلك من خلال تقديم خدمات استشارية وفنية كفيلة بضمان قبول طلب الحصول على التمويل من الجهات المنوطة بذلك.				 </li>
		
		
		</ul>
		
		<p className="service-subtitle2">٨.  الخدمات الضريبية</p>
		
		<ul>
			<li>
				
			لدينا خبرة أكثر من 25 عام عام فى كافة المعاملات الضريبية بدءاً من فتح الملف الضريبى مرورا بتقديم الإقرارات الضريبية و الفحص الضريبى و كافة الإجراءات اللاحقة لذلك بخبرة فنية كبيرة فى كافة مراحل النزاع الضريبى.				 </li>
		
		
		</ul>
		
		<p className="service-subtitle2">٩. الخدمات القانونية </p>
		
		<ul>
			<li>
				
			يتميز المركز الاستشارى المصرى بوجود فريق قانوني متخصص فى الإجراءات القانونية للشركات و صياغة العقود والقضايا الضريبية 					 </li>
		
		
		</ul>
		
			
					</div>
			
			
			
			
			}

		</div>		</div></div>
	);
}
