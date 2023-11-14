
"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../components/Images/Logo.png"
import { usePathname } from "next/navigation"
import { useState } from "react";
export const Navbar = () => {
	const [toggle,setToggle]=useState(false)
	const pathname = usePathname();
	return (
	<>
	<div className="navigatioTop">
	
	تقديم الرؤى لتعزيز الصحة المالية لأعمالك.
	</div>
	<div  className="navSticky" >

		<nav className="container-ecc " >
		<a  className="logo" href="/">
			<div  style={{display:"flex",alignItems:"center"}}>



		
		<Image 
		
width={81}
height={77}
src={logo} alt="المركز الإستشاري المصري"/>

		<div className="compLogo">
			<p className="compName">المركز الإستشاري المصري</p>
			<p className="compDet">للمحاسبة والمراجعة والخدمات الضريبية</p>
			</div>
		
		</div>	</a>

			<div className="links">

			

			<Link className={pathname == "/contact" ? "active" : ""} href="/contact" style={{marginLeft:"0"}} > 
			تواصل معنا</Link>

			<Link className={pathname == "/services" ? "active" : ""} href="/services"> 
			خدماتنا
			</Link>
			<Link className={pathname == "/about" ? "active" : ""} href="/about">   من نحن </Link>


			<Link className={pathname == "/" ? "active" : ""} href="/"> 
			الرئيسية
			</Link>
			


			

			</div>

			<div className="socials">
				<p>تواصل معنا من خلال</p>
				<span></span>
				<a href="/">201029339203+</a>

			</div>
		</nav>


		<div id="navbarMobile" >
		<a  className="logo" style={{textDecoration:"none"}} href="/">

		<div  style={{display:"flex",alignItems:"center"}}>



		
<Image 
priority
placeholder="blur"
width={81}
height={77}
src={logo} alt="المركز الإستشاري المصري"/>

<div className="compLogo">
	<p className="compName">المركز الإستشاري المصري</p>
	<p className="compDet">للمحاسبة والمراجعة والخدمات الضريبية</p>
	</div>

</div></a>
        <button onClick={()=>setToggle(true)}> 
		
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
<path d="M3 12H15M3 6H21M3 18H21" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>		
		
		</button>
   
	
<div  className={toggle?'sideNav ':'sideNav navClosed'}>

</div>
<button className={toggle?'closeNav ':'closeNav closeNavHidden'} onClick={()=>setToggle(false)} >
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
<path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>

<div className={toggle?'mobileLinks':'mobileLinksClose mobileLinks'}>
<div  style={{display:"flex",alignItems:"center"}}>



		
<Image 

width={81}
height={77}
src={logo} alt="المركز الإستشاري المصري"/>

<div className="compLogo">
	<p className="compName">المركز الإستشاري المصري</p>
	<p className="compDet">للمحاسبة والمراجعة والخدمات الضريبية</p>
	</div>

</div>
{/*
<div id="srchInput" className='navSearch'>
        <FiSearch size={20}  color='#667085'/>

<input  placeholder={t("dashboard.search")}/>

  </div>*/}
        <ul id="navList">
			<li>

		
		<Link  onClick={()=>setToggle(false)} className={pathname == "/contact" ? "active" : ""} href="/contact" style={{marginLeft:"0"}} > 
			تواصل معنا</Link>
			</li>
			<li>
			<Link onClick={()=>setToggle(false)}  className={pathname == "/services" ? "active" : ""} href="/services"> 
			خدماتنا
			</Link></li>
			<li>
			<Link  onClick={()=>setToggle(false)}  className={pathname == "/about" ? "active" : ""} href="/about">   من نحن </Link>

</li>
<li>
			<Link onClick={()=>setToggle(false)}  className={pathname == "/" ? "active" : ""} href="/"> 
			الرئيسية
			</Link>
			</li>
  
</ul>



	<div className="socials">
	
				<p>تواصل معنا من خلال</p>
				<a href="/">201029339203+</a>

			</div></div>
    

</div>
			</div>

		</>
	);
};
