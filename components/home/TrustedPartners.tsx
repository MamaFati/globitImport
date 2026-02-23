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
         link: "https://www.tiktok.com/@souvenirsantique?_d=secCgYIASAHKAESPgo8U8gIPu3jri8KGV%2FHspF4JBnbzW%2BoqrDmI2uI0Rzhbkfmr00PqBrgSK1AxERijSE5NqafsCBIForx5LM6GgA%3D&_r=1&_svg=1&lang=en&sec_uid=MS4wLjABAAAAF-H9qFG7P5tYt-t0NNekNx_zXFAHMKjC4sQbBflw8dYNg1FpAFtxuKmkwY2vnPP7&share_app_id=1340&share_author_id=7478300275443598344&share_link_id=80df1711-6258-4c41-a71d-d4d3db54a4f7&share_region=GH&share_scene=1&sharer_language=en&source=h5_m&timestamp=1771777160&ugbiz_name=Account&utm_campaign=client_share&utm_source=copy",
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
         link: "https://www.tiktok.com/@vcca_fashionschool?_d=secCgYIASAHKAESPgo8EPzD7xczn7merAw10E4dSZWwZUD%2FPq1dyUzYXt%2BnGL7oVRvTczlT%2BRZkVg3gyNs4%2BLI4%2F3cBCBzWGhVaGgA%3D&_r=1&_svg=1&lang=en&sec_uid=MS4wLjABAAAAW85SUwx1-0gfWKDUNERA0WTDvdkA3-45r5_Dt0ygFlhn49GGyL5Lu7EeOuYZ2w0u&share_app_id=1340&share_author_id=6983999723620385797&share_link_id=2778edc8-5694-49f1-a936-9f27c17646fe&share_region=GH&share_scene=1&sharer_language=en&source=h5_m&timestamp=1771777107&ugbiz_name=Account&utm_campaign=client_share&utm_source=copy",
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