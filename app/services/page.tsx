"use client";

import { title } from "@/components/primitives";
import service from '../../components/Images/service.png'
import {useEffect, useRef, useState, useMemo} from 'react';
import Image from "next/image";
import styles from '../../styles/Services.module.css'

export default function DocsPage() {
	const [active,setActive]=useState(0)


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
			
			
			<div className={styles.servicesBody}>

	
			<div className={styles.serviceCateg}>
				<div className={styles.stickyCateg}>

			
<p className={styles.categTitle}>قائمة الخدمات</p>
<div className={styles.categsContainer}>


<div className={styles.categs}>
<p className={active==0?styles.activeCateg:''} onClick={()=>setActive(0)}> دراسات الجدوى</p>
<p className={active==1?styles.activeCateg:''} onClick={()=>setActive(1)}> خدمات التأسيس
</p>

<p className={active==2?styles.activeCateg:''} onClick={()=>setActive(2)}>  تصميم الأنظمة المالية و الإدارية</p>
<p className={active==3?styles.activeCateg:''} onClick={()=>setActive(3)}> لمراجعة المالية</p>
<p className={active==4?styles.activeCateg:''} onClick={()=>setActive(4)}>  التحليل المالى</p>
<p className={active==5?styles.activeCateg:''} onClick={()=>setActive(5)}>  إعادة هيكلة المشروعات</p>
<p className={active==6?styles.activeCateg:''} onClick={()=>setActive(6)}>  تمويل المشروعات</p>
<p className={active==7?styles.activeCateg:''} onClick={()=>setActive(7)}>  الخدمات الضريبية</p>
<p className={active==8?styles.activeCateg:''} onClick={()=>setActive(8)}> الخدمات القانونية </p>

</div>
</div>


<ul  className={styles.navUnderline}>
  <li >
  <p className={active==0?styles.activeCateg:''} onClick={()=>setActive(0)}> دراسات الجدوى</p>
  </li>
  <li >
  <p className={active==1?styles.activeCateg:''} onClick={()=>setActive(1)}> خدمات التأسيس
</p>
  </li>
  <li >
  <p className={active==2?styles.activeCateg:''} onClick={()=>setActive(2)}>  تصميم الأنظمة المالية و الإدارية</p>
  </li>
  
  <li >
  <p className={active==3?styles.activeCateg:''} onClick={()=>setActive(3)}> لمراجعة المالية</p>
  </li>
  <li >
  <p className={active==4?styles.activeCateg:''} onClick={()=>setActive(4)}>  التحليل المالى</p>
  </li>
  <li >
  <p className={active==5?styles.activeCateg:''} onClick={()=>setActive(5)}>  إعادة هيكلة المشروعات</p>
  </li>
  <li >
  <p className={active==6?styles.activeCateg:''} onClick={()=>setActive(6)}>  تمويل المشروعات</p>
  </li>
  <li >
  <p className={active==7?styles.activeCateg:''} onClick={()=>setActive(7)}>  الخدمات الضريبية</p>
  </li>
  <li >
  <p className={active==8?styles.activeCateg:''} onClick={()=>setActive(8)}> الخدمات القانونية </p>
  </li>
</ul>

</div>	</div>
{active==0?
			<div className={styles.serviceData}>
				<div >

		<p className={styles.serviceSubtitle2} > دراسات الجدوى</p>
		<ul>
	<li>
	يمكننا اعداد دراسات جدوى متخصصة لقياس مدى جدوى تطبيق المشروع ونجاحه من خلال توضيح الاستثمارات المطلوبة، والعائد المتوقع والمؤثرات الخارجية على المشروع، مثل قوانين الدولة، والمُنافسة والتطور التقني والفني.				 
		 </li>

</ul>		</div>	
</div>:
active==1?
<div className={styles.serviceData}>

<div  >
<p className={styles.serviceSubtitle2} > خدمات التأسيس</p>
		<ul>
	<li>
	لتأسيس شركة أو منشأة يمكننا مساعدتك اختيار النوع المناسب لنشاطك وميزانيتك وذلك من خلال فريق متكامل من الخبراء قادرون على توجيهك للاختيار الامثل لك.
	</li>
</ul>		</div>	
</div>:
active==2?
<div className={styles.serviceData}>
<div  >
<p className={styles.serviceSubtitle2} >تصميم الأنظمة المالية و الإدارية</p>
<ul>
<li>
لنجاح أي شركة أو منشأة يجب أن يتوافر لديها نظام مالى و إدارى يتسم بالكفاءة والفاعلية لذا يمكننا أن نساعدك في تصميم الأنظمة المالية والإدارية التى تتناسب مع نشاط شركتك وذلك من خلال خبراء ماليين و اداريين متخصصين. </li>

</ul>			
	</div></div>:
	active==3?
	<div className={styles.serviceData}>
	<div  >
<p className={styles.serviceSubtitle2} >المراجعة المالية</p>
<ul>
<li>
هي عملية فحص وتقييم القوائم المالية للشركة لتحديد ما إذا كانت تعكس بدقة الوضع المالي والأداء والأحداث المالية للشركة. </li>

</ul>			
	</div>	</div>:
	active==4?
	<div className={styles.serviceData}>
	<div  >
		<p className={styles.serviceSubtitle2}>  التحليل المالى</p>
	<ul>
<li>
يمكننا تقييم البيانات المالية للشركة لتحديد أدائها المالي ومدى قدرتها على الوفاء بالتزاماتها المالية. وذلك من خلال مجموعة من الأساليب والأدوات لمقارنة البيانات المالية للشركة ببعضها البعض، أو ببيانات الشركات الأخرى في نفس القطاع ، و ذلك للمساعدة فى تقييم أداء الشركة و اتخاذ القرارات الاستثمارية و المالية عن طريق مجموعة متميزة من الخبراء المتخصصين فى التحليل المالى.
</li>

</ul>			
		</div></div>:
		active==5?
		<div className={styles.serviceData}>
		<div >
		<p className={styles.serviceSubtitle2}> إعادة هيكلة المشروعات</p>
		<ul>
	<li>
	يقدم المركز خدمات إعادة هيكلة المشروعات وذلك بعمل تغييرات جوهرية في هيكل أو وظائف أو عمليات المشروع بهدف تحسين أدائه
	</li>
	</ul>			
			</div></div>:
			active==6?
			<div className={styles.serviceData}>
			<div >
		<p className={styles.serviceSubtitle2}>   تمويل المشروعات</p>
	<ul>
<li>
يقدم المركز كافة الاستشارات اللازمة و الكفيله بحصولك على التمويل اللازم لبدء مشروعك وذلك من خلال تقديم خدمات استشارية وفنية كفيلة بضمان قبول طلب الحصول على التمويل من الجهات المنوطة بذلك.
</li>
</ul>			
		</div>
</div>:	active==7?
			<div className={styles.serviceData}>
		<div >
		<p className={styles.serviceSubtitle2}>  الخدمات الضريبية</p>
	<ul>
<li>
لدينا خبرة أكثر من 25 عام عام فى كافة المعاملات الضريبية بدءاً من فتح الملف الضريبى مرورا بتقديم الإقرارات الضريبية و الفحص الضريبى و كافة الإجراءات اللاحقة لذلك بخبرة فنية كبيرة فى كافة مراحل النزاع الضريبى.
</li>

</ul>			
		</div></div>:
		
			<div className={styles.serviceData}>

		<div >
		<p className={styles.serviceSubtitle2}>  الخدمات القانونية </p>
		<ul>
	<li>
	يتميز المركز الاستشارى المصرى بوجود فريق قانوني متخصص فى الإجراءات القانونية للشركات و صياغة العقود والقضايا الضريبية 
	</li>	
	
	</ul>			
			</div></div>
}



		

			
			
			
			
			

		</div>		</div></div>
	);
}

