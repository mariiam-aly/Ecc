
import Link from "next/link";
import logo from "../components/Images/Logo.png"
import Image from "next/image";

export const Footer = () => {
	
	return (
	<>

		<footer >
			<div className="footer-container">

	
<div className="footer-img">
	<Image width={142} height={136} src={logo} alt=" المركز المصري الاستشاري "/>
</div>

			<div className="footer-links">
			<Link href="/"> 
			الرئيسية
			</Link>

			<Link style={{marginLeft:"0"}} href="/services"> 
			خدماتنا
			</Link>

			<Link href="/about">   من نحن </Link>
			<Link href="/contact"> 
			تواصل معنا</Link>

			


			

			</div>
<p className="cr">جميع الحقوق محفوظة لدي المركز المصري الاستشاري ، ٢٠٢٣©</p>
			<div className="socials">
			<p>تواصل معنا من خلال</p>
				<span></span>
<a href="/">201029339203+</a>

			</div>		</div>
		</footer>
	</>
	);
};
