
import Link from "next/link";
import logo from "../components/Images/Logo.png"
import Image from "next/image";

export const Footer = () => {
	
	return (
	<>

		<footer >
			


			<div className="footer-links">

			<Link style={{marginLeft:"0"}} href="/blog"> 
			خدماتنا
			</Link>

			<Link href="/about">   من نحن </Link>
			<Link href="/blog"> 
			المكتب</Link>
			<Link href="/"> 
			الرئيسية
			</Link>
			


			

			</div>
<p className="cr">جميع الحقوق محفوظة لدي المركز المصري الاستشاري ، ٢٠٢٣©</p>
			<div className="socials">
				<p>تابعنا من خلال</p>
				<span></span>
<a href="/">201029339203+</a>

			</div>
		</footer>
	</>
	);
};
