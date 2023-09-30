
import Image from "next/image";
import Link from "next/link";
import logo from "../components/Images/Logo.png"
export const Navbar = () => {
	
	return (
	<>
	<div className="navigatioTop">
	تقديم الرؤى لتعزيز الصحة المالية لأعمالك.
	</div>
	<div  className="navSticky" >

		<nav className="container-ecc " >
			<div style={{display:"flex",alignItems:"center"}}>

		
		<Image 
		
width={81}
height={77}
src={logo} alt="المركز الإستشاري المصري"/>

		<div className="compLogo">
			<p className="compName">المركز الإستشاري المصري</p>
			<p className="compDet">للمحاسبة والمراجعة والخدمات الضريبية</p>
			</div>
		</div>

			<div>

			

			<Link href="/contact" style={{marginLeft:"0"}} > 
			تواصل معنا</Link>

			<Link href="/services"> 
			خدماتنا
			</Link>
			<Link href="/about">   من نحن </Link>


			<Link href="/"> 
			الرئيسية
			</Link>
			


			

			</div>

			<div className="socials">
				<p>تواصل معنا من خلال</p>
				<span></span>
				<a href="/">201029339203+</a>

			</div>
		</nav>
			</div>

		</>
	);
};
