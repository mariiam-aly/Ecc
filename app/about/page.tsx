import { title } from "@/components/primitives";
import office from '../../components/Images/office.png'
import c4 from '../../components/Images/dar.png'
import c2 from '../../components/Images/sun.png'
import c3 from '../../components/Images/sila.png'
import c1 from '../../components/Images/seapro.jpg'
import Image from "next/image";
import target from '../../components/Images/target.png'
import increase from '../../components/Images/increase.png'
import message from '../../components/Images/message.png'

export default function AboutPage() {
	return (
		<div>
			<div className="topBckg" >

			<Image 
src={office}
placeholder="blur"
fill
style={{objectFit:"cover"}}
sizes="100vw"
priority
 alt="من نحن"/>

<div className="overlay">
<p>من نحن</p>	
<p className="txt2">تقديم الرؤى لتعزيز الصحة المالية لأعمالك.</p>	

</div>
</div>
	
		<div className="about container-ecc ">
		
		<div className="about-header">

	
		<h3>  المركز الإستشاري المصري</h3>
<h2 >  من نحن</h2>
<h5>تأسست المركز الاستشاري المصري في ١٩٩٨, وقد اكتسب سمعة ممتازة في تقديم خدمات الاستشارات المالية ذات الجودة العالية. هدفنا هو تقديم حلول مبتكرة وشخصية لتحديات عملائنا المالية. يتألف فريقنا من محترفين متفانين لديهم خبرة واسعة وقادرون على تقديم حلول شاملة. نحن متخصصون في الخدمات مثل التدقيق المالي، الخدمات المحاسبية، تأسيس الشركات، الدراسات الجدوى، تمويل المشروعات، والاستشارات الضريبية. نحن ندرك أن كل عمل تجاري فريد من نوعه، ولذلك نقدم خدماتنا وفقًا لاحتياجات كل عميل، مع تقديم استراتيجيات عملية تؤدي إلى نتائج ملموسة. في المركز الاستشاري المصري، نعتبر عملائنا شركاء لنا، حيث نعمل معاً نحو هدف مشترك - نجاحك. كشركائك، نعد بتوجيهك من خلال التعقيدات المالية، وتوفير الوضوح ومساعدتك في اتخاذ القرارات المستنيرة. نتطلع إلى أن نكون شريكك الموثوق في تحقيق أهدافك المالية.</h5>

</div>
<div className="clients">


<h3>  المركز الإستشاري المصري</h3>
<h2>   عملائنا</h2>
<h5>تأسست المركز الاستشاري المصري في ١٩٩٨, وقد اكتسب سمعة ممتازة في تقديم خدمات الاستشارات المالية ذات الجودة العالية. هدفنا هو تقديم حلول مبتكرة وشخصية لتحديات عملائنا المالية.</h5>


<div className="first-company">


<div className=" companyImages-container">
<div className="row companyImages">
<div className="col-3">
<Image src={c1}
width={145}
height={54}
placeholder="blur"

alt="Seapro"/>

</div>
<div className="col-3">
<Image src={c2}
placeholder="blur"

width={221}
height={67}
alt="Special universal network of oncology"/>

</div>
<div className="col-3">
<Image
placeholder="blur"

width={166}
height={92}
src={c3} alt="Sila"/>

</div>
<div className="col-3">
<Image
placeholder="blur"

width={134}
height={144}
src={c4} alt="Dar Al Ashaa"/>
</div>
</div>
</div>
</div>
<div>			<a href="/services">
				<button className="servicesBtn">خدماتنا</button></a>
				<a href="/contact">

				<button className="contact"> 
تواصل معنا
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5202 0.944585C4.1399 0.712001 3.69785 0.578417 3.24122 0.558085C2.78459 0.537753 2.3305 0.631436 1.92741 0.829138C1.52431 1.02684 1.18732 1.32115 0.952401 1.68066C0.71748 2.04017 0.593437 2.45139 0.593506 2.87046V12.1295C0.593437 12.5486 0.71748 12.9598 0.952401 13.3193C1.18732 13.6788 1.52431 13.9731 1.92741 14.1708C2.3305 14.3685 2.78459 14.4622 3.24122 14.4419C3.69785 14.4215 4.1399 14.288 4.5202 14.0554L12.0958 9.42586C12.4417 9.21447 12.7252 8.92808 12.9213 8.59212C13.1175 8.25616 13.2201 7.88102 13.2201 7.49998C13.2201 7.11894 13.1175 6.74379 12.9213 6.40783C12.7252 6.07187 12.4417 5.78549 12.0958 5.5741L4.5202 0.944585Z" fill="#3F47CC"/>
</svg>
</button></a>
			</div>
</div>

<div className="goals">


<h3>  المركز الإستشاري المصري</h3>
<h2 >   الأهداف ، الرؤية والرسالة</h2>
<h5>تأسست المركز الاستشاري المصري في ١٩٩٨, وقد اكتسب سمعة ممتازة في تقديم خدمات الاستشارات المالية ذات الجودة العالية. هدفنا هو تقديم حلول مبتكرة</h5>

<div className="container-fluid">
<div className="row gy-4">
<div className="col-md-4 col-sm-6">
	<div className="goal">
	<div className="goalBoarder">
<div>
<Image
placeholder="blur"

src={target} alt="target"/>

<h4 className="goal-title">الأهداف</h4></div>
<p className="goal-det">نسعى لأن نكون من افضل المكاتب فى تقديم الخدمات المالية والادارية لعملائنا على مستوى مصر و المنافسة القوية على مستوى الوطن العربى</p>
</div>
	</div>
</div>
<div className="col-md-4 col-sm-6">
<div className="goal">
	<div className="goalBoarder">


	<div>
<Image
placeholder="blur"

src={increase} alt="target"/>
<h4 className="goal-title">الرؤية</h4></div>
<p className="goal-det">نسعى لأن نكون من افضل المكاتب فى تقديم الخدمات المالية والادارية لعملائنا على مستوى مصر و المنافسة القوية على مستوى الوطن العربى</p>
</div>
	</div>
</div>
<div className="col-md-4 col-sm-6">
<div className="goal">
<div className="goalBoarder">

<div>
<Image
placeholder="blur"

src={message} alt="target"/>
<h4 className="goal-title">الرسالة</h4></div>
<p className="goal-det">نسعى لأن نكون من افضل المكاتب فى تقديم الخدمات المالية والادارية لعملائنا على مستوى مصر و المنافسة القوية على مستوى الوطن العربى</p>
</div>
	</div>
</div></div></div>

</div>


		</div></div>
	);
}
 