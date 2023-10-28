import ContactForm from '@/components/ContactForm'
import background from '../components/Images/background.png'
import c4 from '../components/Images/dar.png'
import c2 from '../components/Images/sun.png'
import c3 from '../components/Images/sila.png'
import c1 from '../components/Images/seapro.jpg'
import Image from "next/image";
import service1 from '../components/Images/service1.png'
import service2 from '../components/Images/service2.png'
import service3 from '../components/Images/service3.png'
import service4 from '../components/Images/service4.png'
import service5 from '../components/Images/service5.png'
import service6 from '../components/Images/service6.png'

import menu from '../components/Images/menu.svg'
import load from '../components/Images/load.svg'
import clock from '../components/Images/clock.png'
import map from '../components/Images/map.png'
import egyflag from '../components/Images/egyflag.svg'
import triangle from '../components/Images/triangle.png'
import fluency from '../components/Images/fluency.png'
import feedback from '../components/Images/feedback.svg'
import styles from '../styles/Home.module.css'
import Swiper from '../components/Swiper'
export default function Home() {
	return (
		
		<div >
			<div className="container-fluid">

<div className="row">

<div className="col-md-8">
<div className={`${styles.alignVertical} ${styles.div1Padding} container-ecc`}>




			<h3>المركز الإستشاري المصري</h3>
			<div>
			<h1 className={styles.headerMobile}><span>المر</span>كز الإستشاري المصري  </h1>	

		
			<h1 className={styles.headerWeb}><span>ال</span>مركز الإستشاري المصري  </h1>	</div>
			<h5>في المركز الاستشاري المصري، نقدم مجموعة شاملة من الخدمات المالية المصممة لدعم نمو أعمالك. بفريقنا الخبير بجانبك، ستتمكن من فهم القضايا المحاسبية والضريبية المعقدة، وستتمكن من اتخاذ قرارات مستنيرة لقيادة أعمالك إلى الأمام. نحن نؤمن بتقديم التميز في كل جانب من جوانب خدماتنا، وتقديم الرؤى لتعزيز الصحة المالية لأعمالك.</h5>
			
			<div>
				<a href="/services">
				<button className="servicesBtn">خدماتنا</button>

				</a>
				<a href="/contact">

				<button className="contact"> 
تواصل معنا
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5202 0.944585C4.1399 0.712001 3.69785 0.578417 3.24122 0.558085C2.78459 0.537753 2.3305 0.631436 1.92741 0.829138C1.52431 1.02684 1.18732 1.32115 0.952401 1.68066C0.71748 2.04017 0.593437 2.45139 0.593506 2.87046V12.1295C0.593437 12.5486 0.71748 12.9598 0.952401 13.3193C1.18732 13.6788 1.52431 13.9731 1.92741 14.1708C2.3305 14.3685 2.78459 14.4622 3.24122 14.4419C3.69785 14.4215 4.1399 14.288 4.5202 14.0554L12.0958 9.42586C12.4417 9.21447 12.7252 8.92808 12.9213 8.59212C13.1175 8.25616 13.2201 7.88102 13.2201 7.49998C13.2201 7.11894 13.1175 6.74379 12.9213 6.40783C12.7252 6.07187 12.4417 5.78549 12.0958 5.5741L4.5202 0.944585Z" fill="#3F47CC"/>
</svg>
</button></a>

		


</div></div></div>
<div className={`${styles.firstDivImg} col-md-4 col-sm-6 `}>

	<div className='triangle-container'>

	<Image
	
	priority
placeholder="blur"

fill
className={styles.background}
style={{objectFit:"cover"}}

	src={triangle} alt="triangle"/>

	
		</div>
	<Image
	
	priority
placeholder="blur"

	src={fluency} alt="fluency"/>
</div>

<div className="container-ecc ">


<div className=" companyImages-container">
<div className="row companyImages">
<div className="col-3">
<Image src={c1}
width={145}
placeholder="blur"

height={54}
alt="Seapro"/>

</div>
<div className="col-3">
<Image src={c2}
width={221}
placeholder="blur"

height={67}
alt="Special universal network of oncology"/>

</div>
<div className="col-3">
<Image
width={166}
placeholder="blur"

height={92}
src={c3} alt="Sila"/>

</div>
<div className="col-3">
<Image
width={134}
placeholder="blur"

height={144}
src={c4} alt="Dar Al Ashaa"/>
</div>
</div>
</div>
</div>
</div>	</div>


<div className={styles.services} >

<Image 
src={background}
placeholder="blur"
fill


style={{objectFit:"cover",zIndex:"-1"}}
sizes="100vw"
 alt="خدماتنا"/>

<div className="container-ecc service-container">

<h3>  خدماتنا</h3>
<h2 >المركز الإستشاري المصري</h2>
<h5>في المركز الاستشاري المصري، نقدم مجموعة شاملة من الخدمات المالية المصممة لدعم نمو أعمالك. بفريقنا الخبير بجانبك</h5>
<div className="container-fluid">


<div className="row gy-5">

	
<div className={`col-md-4 col-sm-6  ${styles.serviceDiv}`}>
<a href="/services">

<div>
	<Image
	width={24}
	height={24}
	src={service1} alt="المراجعة المالية"/>
</div>

<p className={styles.serviceComp}> خدماتنا</p>
<h4 className={styles.serviceName}>المراجعة المالية</h4>
<p className={styles.serviceDet}>يقوم فريقنا الخبير بإجراء مراجعات مالية شاملة لضمان شفافية أعمالك المالية والامتثال للقوانين واللوائح.</p>
<button>
	اعرف المزيد

	<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
<path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1 6.75h23V5.25h2V6.75Z" fill="#474747"/>
</svg>

</button></a>	</div>
<div className={`col-md-4 col-sm-6  ${styles.serviceDiv}`}>
	<a href="/services">

	<div>
	<Image
	width={24}
	height={24}
	src={service3} alt="الخدمات المحاسبية"/>
</div>

<p className={styles.serviceComp}> خدماتنا</p>
<h4 className={styles.serviceName}>الخدمات المحاسبية</h4>
<p className={styles.serviceDet}>نقدم مجموعة شاملة من الخدمات المحاسبية، من المحاسبة إلى التقارير المالية، مما يساعد الأعمال على البقاء منظمة ومطلعة ماليا.</p>
<button>
	اعرف المزيد

	<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
<path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1 6.75h23V5.25h2V6.75Z" fill="#474747"/>
</svg>

</button>	</a></div>
<div className={`col-md-4 col-sm-6  ${styles.serviceDiv}`}>
	<a href="/services">

	<div>
	<Image
	width={24}
	height={24}

	src={service5} alt="تأسيس الشركات"/>
</div>
<p className={styles.serviceComp}> خدماتنا</p>
<h4 className={styles.serviceName}>تأسيس الشركات</h4>
<p className={styles.serviceDet}>يساعد متخصصونا في تأسيس الشركات، التنقل خلال التعقيدات القانونية والبيروقراطية لبدء عملك التجاري.</p>
<button>
	اعرف المزيد

	<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
<path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1 6.75h23V5.25h2V6.75Z" fill="#474747"/>
</svg>

</button>	</a></div>

	

<div className={`col-md-4 col-sm-6  ${styles.serviceDiv}`}>
	<a href="/services">

	<div>
	<Image
	width={24}
	height={24}

	src={service2} alt="دراسات الجدوى"/>
</div>
<p className={styles.serviceComp}> خدماتنا</p>
<h4 className={styles.serviceName}>دراسات الجدوى</h4>
<p className={styles.serviceDet}>نجري دراسات الجدوى المفصلة التي تقيم قابلية مشروعك، مع الأخذ في الاعتبار الجوانب الاقتصادية والتقنية المحتملة.</p>
<button>
	اعرف المزيد

	<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
<path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1 6.75h23V5.25h2V6.75Z" fill="#474747"/>
</svg>

</button></a>	</div>

<div className={`col-md-4 col-sm-6  ${styles.serviceDiv}`}>
	<a href="/services">

	<div>
	<Image
	width={24}
	height={24}
	src={service4} alt="تمويل المشروعات"/>
</div>

<p className={styles.serviceComp}> خدماتنا</p>
<h4 className={styles.serviceName}>تمويل المشروعات</h4>
<p className={styles.serviceDet}>يقدم فريقنا الخبرة في تمويل المشروعات، حيث يحدد مصادر التمويل المناسبة ويساعدك في تأمين التمويل الذي تحتاجه.</p>
<button>
	اعرف المزيد

	<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
<path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1 6.75h23V5.25h2V6.75Z" fill="#474747"/>
</svg>

</button></a>
	</div>

	<div className={`col-md-4 col-sm-6  ${styles.serviceDiv}`}>
	<a href="/services">

	<div>
	<Image 
	width={24}
	height={24}
	src={service6} alt="الضرائب "/>
</div>
<p className={styles.serviceComp}> خدماتنا</p>
<h4 className={styles.serviceName}> الضرائب</h4>
<p className={styles.serviceDet}>نقدم خدمات ضريبية خبيرة، من التخطيط والامتثال إلى حل النزاعات، مما يضمن تلبية الالتزامات مع تحسين وضعك الضريبي.</p>
<button>
	اعرف المزيد

	<svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
<path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1 6.75h23V5.25h2V6.75Z" fill="#474747"/>
</svg>

</button></a>	</div>
</div></div>
</div>			</div>
<div className={`${styles.history} container-ecc service-container`}>
<h3>  المركز الإستشاري المصري</h3>
<h2 >  من نحن</h2>
<h5>تأسست المركز الاستشاري المصري في ١٩٩٨, وقد اكتسب سمعة ممتازة في تقديم خدمات الاستشارات المالية ذات الجودة العالية. هدفنا هو تقديم حلول مبتكرة وشخصية لتحديات عملائنا المالية. يتألف فريقنا من محترفين متفانين لديهم خبرة واسعة وقادرون على تقديم حلول شاملة. نحن متخصصون في الخدمات مثل التدقيق المالي، الخدمات المحاسبية، تأسيس الشركات، الدراسات الجدوى، تمويل المشروعات، والاستشارات الضريبية. نحن ندرك أن كل عمل تجاري فريد من نوعه، ولذلك نقدم خدماتنا وفقًا لاحتياجات كل عميل، مع تقديم استراتيجيات عملية تؤدي إلى نتائج ملموسة. في المركز الاستشاري المصري، نعتبر عملائنا شركاء لنا، حيث نعمل معاً نحو هدف مشترك - نجاحك. كشركائك، نعد بتوجيهك من خلال التعقيدات المالية، وتوفير الوضوح ومساعدتك في اتخاذ القرارات المستنيرة. نتطلع إلى أن نكون شريكك الموثوق في تحقيق أهدافك المالية.</h5>

<div className={styles.historyFlex}>


<div className={styles.timeline}>
<span id={styles.firstLine}></span>
<p>أغسطس ١٩٩٧</p>
<span></span>
<p>أغسطس ١٩٩٧</p>
<span></span>
<p>أغسطس ١٩٩٧</p>
<span></span>
<p>أغسطس ١٩٩٧</p>

</div>
<div className={`container-fluid ${styles.historyDetails}`}>


<div className={`row gy-5 ${styles.historyDetail}`}>
<div className="col-md-3 ">
<h4 className={styles.historyTitle}>تأسيس الشركة</h4>
<p className={styles.historyDet}>نجري دراسات الجدوى المفصلة التي تقيم قابلية مشروعك، مع الأخذ في الاعتبار الجوانب الاقتصادية والتقنية المحتملة.</p>
</div>
<div className="col-md-3  ">
<h4 className={styles.historyTitle}>تأسيس الشركة</h4>
<p className={styles.historyDet}>نجري دراسات الجدوى المفصلة التي تقيم قابلية مشروعك، مع الأخذ في الاعتبار الجوانب الاقتصادية والتقنية المحتملة.</p>
</div>
<div className="col-md-3  ">
<h4 className={styles.historyTitle}>تأسيس الشركة</h4>
<p className={styles.historyDet}>نجري دراسات الجدوى المفصلة التي تقيم قابلية مشروعك، مع الأخذ في الاعتبار الجوانب الاقتصادية والتقنية المحتملة.</p>
</div>
<div className="col-md-3  ">
<h4 className={styles.historyTitle}>تأسيس الشركة</h4>
<p className={styles.historyDet}>نجري دراسات الجدوى المفصلة التي تقيم قابلية مشروعك، مع الأخذ في الاعتبار الجوانب الاقتصادية والتقنية المحتملة.</p>
</div>
</div>
</div>

</div>

<div className={styles.clientReview}>
<div className={styles.reviewTitle}>
	<Image src={feedback}
	width={33}
	height= {25}
	alt="feedback"/>
	<p>
أراء عملائنا</p>
</div>

<Swiper/>
</div>

<div style={{marginTop:"60px"}} className="contactUs">
<div className="container-fluid">


<div className="row gy-5">
<div className="col-lg-7 col-md-6">
<h3>  خدماتنا</h3>
<h2 >  تواصل معنا! </h2>
<h5>في المركز الاستشاري المصري، نقدم مجموعة شاملة من الخدمات المالية المصممة لدعم نمو أعمالك.</h5>

<Image 
width={26}
height={26}
src={clock} alt="اوقات العمل"/>

<h4 className="contact-title">اوقات العمل</h4>
<p className="contact-txt">يومياً من<span> الخميس </span> الى  <span>السبت</span> </p>
<p className="contact-txt contact-margin ">من الساعة<span> السادسة مساءاً </span> الى الساعة <span> التاسعة صباحاً </span> </p>


<Image 
width={26}
height={26}
src={map} alt="العنوان"/>

<h4 className="contact-title">العنوان</h4>
<p className="contact-txt2">110 عمارات مدينة الفتح - شارع جمال سليم - حى السفارات - مدينة نصر - القاهرة</p>

</div>
<div className="col-lg-5 col-md-6">
<ContactForm/>
</div>
</div>
</div>

</div>

</div>
			</div>
	);
}
