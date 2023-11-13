"use client";

import { title } from "@/components/primitives";
import service from '../../components/Images/service.png'
import {useEffect, useRef, useState, useMemo} from 'react';
import Image from "next/image";
import styles from '../../styles/Services.module.css'
import {useIsVisible} from '../../components/useIsVisible'
import {serviceData} from '../../components/serviceData'
export default function DocsPage() {
	const [active,setActive]=useState(0)
	const refs = Array.from({ length: 11 }, () => useRef(null));


const isVisible=[
	useIsVisible(refs[0] ),
	useIsVisible(refs[1] ),
	useIsVisible(refs[2] ),
	useIsVisible(refs[3] ),
	useIsVisible(refs[4] ),
	useIsVisible(refs[5] ),
	useIsVisible(refs[6] ),
	useIsVisible(refs[7] ),
	useIsVisible(refs[8] ),
	useIsVisible(refs[9] ),
	useIsVisible(refs[10] )
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
	<p key={index} className={(isVisible[index] && !isVisible[index-1]  ) ?styles.activeCateg:''} onClick={()=>handleClick(index)}> {data.title}
</p>

)}


</div>
</div>


<ul  className={styles.navUnderline}>
{serviceData.map((data,index)=>


<li key={index}>
<p className={(isVisible[index] && !isVisible[index-1]  ) ?styles.activeCateg:''}  onClick={()=>handleClick(index)}>  {data.title}</p>
</li>

)}


</ul>

</div>	</div>


<div className={styles.serviceList}>


{

 refs.map((ref, index) => (



<div key={index} className={styles.serviceData}>
<div >
	 {/* <p>{isVisible.current[index] ? "Visible" : "Not visible"}</p>*/}


<p ref={ref}  className={styles.serviceSubtitle1} > {serviceData[index].title} </p>
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

