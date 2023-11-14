"use client";
import React from "react";
import { title } from "@/components/primitives";
import service from '../../components/Images/service.png'
import {useEffect, useRef, useState, useMemo} from 'react';
import Image from "next/image";
import styles from '../../styles/Services.module.css'
import {useIsVisible} from '../../components/useIsVisible'
import {serviceData} from '../../components/serviceData'
export default function DocsPage() {
	const [active,setActive]=useState(0)

	const refs = useRef(serviceData.map(() => React.createRef()));
const isVisibile=[
	useIsVisible(refs.current[0]),
	useIsVisible(refs.current[1]),
	useIsVisible(refs.current[2]),
	useIsVisible(refs.current[3]),
	useIsVisible(refs.current[4]),
	useIsVisible(refs.current[5]),
	useIsVisible(refs.current[6]),
	useIsVisible(refs.current[7]),
	useIsVisible(refs.current[8]),
	useIsVisible(refs.current[9]),
	useIsVisible(refs.current[10])

]

const handleClick = (index) => {
    refs[index].current?.scrollIntoView({ behavior: 'smooth' });
  };

	return (
		<div>
				<div className="topBckg"  >
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
{serviceData.map((data,index)=>

	<p key={index} className={(isVisibile[index]  && !isVisibile[index-1]  ) ?styles.activeCateg:'' }  onClick={()=>handleClick(index)}> {data.title}


</p>

)}


</div>
</div>


<ul  className={styles.navUnderline}>
{serviceData.map((data,index)=>


<li key={index}>
	 {/* 
<p className={((useIsVisible(refs.current[index])  && !useIsVisible(refs.current[index-1])  ) )?styles.activeCateg:'' }  onClick={()=>handleClick(index)}>  {data.title}</p>
*/}</li>

)}


</ul>

</div>	</div>


<div className={styles.serviceList}>


{

serviceData.map((data, index) => (



<div key={index} className={styles.serviceData}>
<div >

<p ref={refs.current[index]}  className={styles.serviceSubtitle1} > {serviceData[index].title} </p>
{serviceData[index].subTitle.map((data,index)=>
<div key={index} >

<p className={styles.serviceSubtitle2} > {data.title} </p>
<p className={styles.serviceSubtitle3} > {data.text} </p>

<ul>
	{data.points.map((data,index)=>
	<li key={index}>{data}
	</li>
	)}


</ul>	

</div>
	)}

	</div>	


</div>

  ))
	}</div>


		</div>		</div></div>
	);
}

