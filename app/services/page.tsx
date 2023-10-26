"use client";

import { title } from "@/components/primitives";
import service from '../../components/Images/service.png'
import {useEffect, useRef, useState, useMemo} from 'react';
import Image from "next/image";
export default function DocsPage() {
	const [active,setActive]=useState(0)



	const divRefs = Array.from({ length: 10 }).map(() => useRef<HTMLDivElement>(null));
	const [distancesFromTop, setDistancesFromTop] = useState<number[]>([]);
  
	useEffect(() => {
	  const handleScroll = () => {
		const newDistances = divRefs.map((ref) => {
		  if (ref.current) {
			const { top } = ref.current.getBoundingClientRect();
			return top + window.pageYOffset;
		  }
		  return 0;
		});
		setDistancesFromTop(newDistances);
	
	  };
  
	  window.addEventListener('scroll', handleScroll);
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);

	
	const listenScrollEvent = () => {
	console.log(window.scrollY )
	let num1:number= 416.1875
	let num2:number= 666.1875
	let num3: number= window.scrollY
if( window.scrollY ==7){


}
	  
	  }
	  useEffect(() => {
	   
		window.addEventListener('scroll', listenScrollEvent);
	   
			return () =>
		   window.removeEventListener('scroll', listenScrollEvent);
	   }, []);  


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
		
		<div className="container-ecc service-container">
			
			
			<div className="services-body">

	
			<div className="service-categ">
				<div className="sticky-categ">

			
<p className="categ-title">قائمة الخدمات</p>
<div className="categs-container">


<div className="categs">
<p className={active==0?'activeCateg':''} onClick={()=>setActive(0)}> دراسات الجدوى</p>
<p className={active==1?'activeCateg':''} onClick={()=>setActive(1)}> خدمات التأسيس
</p>

<p className={active==2?'activeCateg':''} onClick={()=>setActive(2)}>  تصميم الأنظمة المالية و الإدارية</p>
<p className={active==3?'activeCateg':''} onClick={()=>setActive(3)}> لمراجعة المالية</p>
<p className={active==4?'activeCateg':''} onClick={()=>setActive(4)}>  التحليل المالى</p>
<p className={active==5?'activeCateg':''} onClick={()=>setActive(5)}>  إعادة هيكلة المشروعات</p>
<p className={active==6?'activeCateg':''} onClick={()=>setActive(6)}>  تمويل المشروعات</p>
<p className={active==7?'activeCateg':''} onClick={()=>setActive(7)}>  الخدمات الضريبية</p>
<p className={active==8?'activeCateg':''} onClick={()=>setActive(8)}> الخدمات القانونية </p>

</div>
</div>


<ul  className="nav nav-underline">
  <li className="nav-item">
  <p className={active==0?'activeCateg':''} onClick={()=>setActive(0)}> دراسات الجدوى</p>
  </li>
  <li className="nav-item">
  <p className={active==1?'activeCateg':''} onClick={()=>setActive(1)}> خدمات التأسيس
</p>
  </li>
  <li className="nav-item">
  <p className={active==2?'activeCateg':''} onClick={()=>setActive(2)}>  تصميم الأنظمة المالية و الإدارية</p>
  </li>
  
  <li className="nav-item">
  <p className={active==3?'activeCateg':''} onClick={()=>setActive(3)}> لمراجعة المالية</p>
  </li>
  <li className="nav-item">
  <p className={active==4?'activeCateg':''} onClick={()=>setActive(4)}>  التحليل المالى</p>
  </li>
  <li className="nav-item">
  <p className={active==5?'activeCateg':''} onClick={()=>setActive(5)}>  إعادة هيكلة المشروعات</p>
  </li>
  <li className="nav-item">
  <p className={active==6?'activeCateg':''} onClick={()=>setActive(6)}>  تمويل المشروعات</p>
  </li>
  <li className="nav-item">
  <p className={active==7?'activeCateg':''} onClick={()=>setActive(7)}>  الخدمات الضريبية</p>
  </li>
  <li className="nav-item">
  <p className={active==8?'activeCateg':''} onClick={()=>setActive(8)}> الخدمات القانونية </p>
  </li>
</ul>

</div>	</div>

			<div className="service-data">
				<div ref={divRefs[0]} >

		<p className="service-subtitle2" > دراسات الجدوى</p>
		<ul>
	<li>
	يمكننا اعداد دراسات جدوى متخصصة لقياس مدى جدوى تطبيق المشروع ونجاحه من خلال توضيح الاستثمارات المطلوبة، والعائد المتوقع والمؤثرات الخارجية على المشروع، مثل قوانين الدولة، والمُنافسة والتطور التقني والفني.				 
		 </li>

</ul>		</div>	

<div ref={divRefs[1]} >
	<p className="service-subtitle2"  > دراسات الجدوى</p>
		<ul>
	<li>
	يمكننا اعداد دراسات جدوى متخصصة لقياس مدى جدوى تطبيق المشروع ونجاحه من خلال توضيح الاستثمارات المطلوبة، والعائد المتوقع والمؤثرات الخارجية على المشروع، مثل قوانين الدولة، والمُنافسة والتطور التقني والفني.				 
		 </li>

</ul>		</div>	


<div ref={divRefs[2]} >
<p className="service-subtitle2" > خدمات التأسيس</p>
<ul>
<li>
لتأسيس شركة أو منشأة يمكننا مساعدتك اختيار النوع المناسب لنشاطك وميزانيتك وذلك من خلال فريق متكامل من الخبراء قادرون على توجيهك للاختيار الامثل لك.			
 </li>

</ul>			
	</div>	
	<div ref={divRefs[3]} >
<p className="service-subtitle2" > خدمات التأسيس</p>
<ul>
<li>
لتأسيس شركة أو منشأة يمكننا مساعدتك اختيار النوع المناسب لنشاطك وميزانيتك وذلك من خلال فريق متكامل من الخبراء قادرون على توجيهك للاختيار الامثل لك.			
 </li>

</ul>			
	</div>	
	<div ref={divRefs[4]} >
		<p className="service-subtitle2">  تصميم الأنظمة المالية و الإدارية</p>
	<ul>
<li>
لنجاح أي شركة أو منشأة يجب أن يتوافر لديها نظام مالى و إدارى يتسم بالكفاءة والفاعلية لذا يمكننا أن نساعدك في تصميم الأنظمة المالية والإدارية التى تتناسب مع نشاط شركتك وذلك من خلال خبراء ماليين و اداريين متخصصين.			 </li>


</ul>			
		</div>
		<div ref={divRefs[4]} >
		<p className="service-subtitle2"> لمراجعة المالية</p>
		<ul>
	<li>
	هي عملية فحص وتقييم القوائم المالية للشركة لتحديد ما إذا كانت تعكس بدقة الوضع المالي والأداء والأحداث المالية للشركة.				 </li>

	
	</ul>			
			</div>
			<div >
		<p className="service-subtitle2">  التحليل المالى</p>
	<ul>
<li>
يمكننا تقييم البيانات المالية للشركة لتحديد أدائها المالي ومدى قدرتها على الوفاء بالتزاماتها المالية. وذلك من خلال مجموعة من الأساليب والأدوات لمقارنة البيانات المالية للشركة ببعضها البعض، أو ببيانات الشركات الأخرى في نفس القطاع ، و ذلك للمساعدة فى تقييم أداء الشركة و اتخاذ القرارات الاستثمارية و المالية عن طريق مجموعة متميزة من الخبراء المتخصصين فى التحليل المالى.				 </li>


</ul>			
		</div>

		<div >
		<p className="service-subtitle2">  إعادة هيكلة المشروعات</p>
	<ul>
<li>
يقدم المركز خدمات إعادة هيكلة المشروعات وذلك بعمل تغييرات جوهرية في هيكل أو وظائف أو عمليات المشروع بهدف تحسين أدائه					 </li>


</ul>			
		</div>

		<div >
		<p className="service-subtitle2">  تمويل المشروعات</p>
		<ul>
	<li>
	يقدم المركز كافة الاستشارات اللازمة و الكفيله بحصولك على التمويل اللازم لبدء مشروعك وذلك من خلال تقديم خدمات استشارية وفنية كفيلة بضمان قبول طلب الحصول على التمويل من الجهات المنوطة بذلك.				 </li>
	
	
	</ul>			
			</div>
			<div >
		<p className="service-subtitle2">  الخدمات الضريبية</p>
			<ul>
		<li>
		لدينا خبرة أكثر من 25 عام عام فى كافة المعاملات الضريبية بدءاً من فتح الملف الضريبى مرورا بتقديم الإقرارات الضريبية و الفحص الضريبى و كافة الإجراءات اللاحقة لذلك بخبرة فنية كبيرة فى كافة مراحل النزاع الضريبى.				 </li>
		
		
		</ul>			
				</div>

				<div >
<p className="service-subtitle2"> الخدمات القانونية </p>
		
		<ul>
			<li>
				
			يتميز المركز الاستشارى المصرى بوجود فريق قانوني متخصص فى الإجراءات القانونية للشركات و صياغة العقود والقضايا الضريبية 					 </li>
		
		
		
		</ul>
		
		

			
					</div>

			</div>

		

			
			
			
			
			

		</div>		</div></div>
	);
}

