"use client";

import { title } from "@/components/primitives";
import service from '../../components/Images/service.png'
import { useState } from "react";
export default function DocsPage() {
	const [active,setActive]=useState(0)
	return (
		<div>
				<div className="topBckg" style={{ backgroundImage: `url(${service.src})`}}>
<div>
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
<p className={active==0?'activeCateg':''} onClick={()=>setActive(0)}>دراسات الجدوي</p>
<p className={active==1?'activeCateg':''} onClick={()=>setActive(1)}>دراسات الجدوي</p>

<p className={active==2?'activeCateg':''} onClick={()=>setActive(2)}>دراسات الجدوي</p>

<p className={active==3?'activeCateg':''} onClick={()=>setActive(3)}>دراسات الجدوي</p>
</div>
</div>


<ul  className="nav nav-underline">
  <li className="nav-item">
  <p className={active==0?'activeCateg':''} onClick={()=>setActive(0)}>دراسات الجدوي</p>
  </li>
  <li className="nav-item">
  <p className={active==1?'activeCateg':''} onClick={()=>setActive(1)}>دراسات الجدوي</p>
  </li>
  <li className="nav-item">
  <p className={active==2?'activeCateg':''} onClick={()=>setActive(2)}>دراسات الجدوي</p>
  </li>
  <li className="nav-item">
  <p className={active==3?'activeCateg':''} onClick={()=>setActive(3)}>دراسات الجدوي</p>
  </li>
</ul>

</div>	</div>
{active==0?
			<div className="service-data">
			<p className="service-title">دراسات الجدوي</p>
			<p className="service-det"> دراسات الجدوى الاقتصادية للمشروعات من العوامل الهامة والمؤثرة جدا عند اختيارك لمشروع استثمارى جديد حيث ان الهدف الاساسى من دراسة الجدوى هو دراسة امكانية قيام المشروع وتحقيق اقصى عائد ممكن من الموارد المتاحة وتحقيق ارباح او عائد يفوق التكلفة المستثمرة فيه والوصول الى قرار نهائى بقبول الفكرة او رفضها .
			</p>
			<p className="service-subtitle">دراسات الجدوى الاقتصادية للمشروعات:</p>

			<p className="service-subtitle2">١.  الدارسة السوقية :</p>

<ul>
	<li> مدى أهمية المشروع للسوق .</li>
	<li>تحديد الفئات المستهدفة .</li>

	<li>تحديد المنافسين .</li>

	<li>قياس مدى استيعاب السوق للمنتج .</li>

</ul>


<p className="service-subtitle2">٢.  الدارسة الفنية :</p>

<ul>
	<li> مدى أهمية المشروع للسوق .</li>
	<li>تحديد الفئات المستهدفة .</li>

	<li>تحديد المنافسين .</li>

	<li>قياس مدى استيعاب السوق للمنتج .</li>

</ul>

	
			</div>:


<div className="service-data">
			<p className="service-title">دراسات الجدوي</p>
			<p className="service-det"> دراسات الجدوى الاقتصادية للمشروعات من العوامل الهامة والمؤثرة جدا عند اختيارك لمشروع استثمارى جديد حيث ان الهدف الاساسى من دراسة الجدوى هو دراسة امكانية قيام المشروع وتحقيق اقصى عائد ممكن من الموارد المتاحة وتحقيق ارباح او عائد يفوق التكلفة المستثمرة فيه والوصول الى قرار نهائى بقبول الفكرة او رفضها .
			</p>
			<p className="service-subtitle">دراسات الجدوى الاقتصادية للمشروعات:</p>



<p className="service-subtitle2">٢.  الدارسة الفنية :</p>

<ul>
	<li> مدى أهمية المشروع للسوق .</li>
	<li>تحديد الفئات المستهدفة .</li>

	<li>تحديد المنافسين .</li>

	<li>قياس مدى استيعاب السوق للمنتج .</li>

</ul>

	
			</div>
			
			
			
			
			}

		</div>		</div></div>
	);
}
