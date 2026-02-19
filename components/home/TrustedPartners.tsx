import Image from "next/image";
import IoTlogo from '@/public/images/IoTlogo.png'
import sosLogo from '@/public/images/sosoink.png'
import stemLogo from '@/public/images/stemAidBlack.jpeg'
import verityLogo from '@/public/images/verityFashion.png'
import { link } from "fs";
import Link from "next/link";
const TrustedPartners = () => {
     const partners = [
       {
         name: "IoT",
         logo: IoTlogo,
         color: "text-blue-800",
         link: "https://www.linkedin.com/company/iotnetworkhub/?originalSubdomain=gh",
       },
       {
         name: "SOSOINK",
         logo: sosLogo,
         color: "text-pink-600",
         link: "https://www.stemaide.com/",
       },
       {
         name: "STEM AID",
         logo: stemLogo,
         color: "text-emerald-700",
         link: "https://www.stemaide.com/",
       },
       {
         name: "VERITY FASHION",
         logo: verityLogo,
         color: "text-blue-600",
         link: "https://www.facebook.com/veritycocaofficial/",
       },
     ];
    return (  
      <section className="py-24 bg-slate-50 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 animate-reveal">Our Trusted & <span className="text-secondary">Partners</span></h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-reveal">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all group">
                <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                  <Image src={partner.logo} alt={partner.name} className={`text-2xl font-black tracking-tighter transition-all group-hover:scale-105 ${partner.color}`} />
                </Link>
                
              </div>
            ))}
          </div>
        </div>
      </section> 
      );
}
 
export default TrustedPartners;