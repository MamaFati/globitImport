import Link from "next/link";
import Image from "next/image";
import AppLogo from "@/public/images/35ab6eb9-b8b6-42a9-806c-cdaac68ec55d-removebg-preview (1).png";
import { primaryNavLinks, serviceLinks } from "@/components/layout/navigation";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={AppLogo}
                className=""
                alt="Globit Logo"
                width={80}
                height={5}
              />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Ghana&apos;s premier China to Ghana shipping and sourcing partner.
              Empowering individuals and businesses through reliable logistics
              and expert training.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {primaryNavLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {serviceLinks.map((item) => (
                <li key={item.value}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-1" />
                <span>Atwima Takyiman, Kumasi, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+233-5511-93503</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>info@globitimports.com</span>
              </li>
            </ul>
          </div>

          {/* Trust Tags */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Local Trust</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-800">
                Import business in Kumasi
              </span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-800">
                China to Ghana shipping
              </span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-800">
                Verified Sourcing
              </span>
              <span className="bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-800">
                Kumasi Logistics
              </span>
            </div>
            <div className="mt-8 p-4 bg-blue-600/10 rounded-xl border border-blue-500/20">
              <p className="text-sm text-blue-400 font-bold italic">
                &ldquo;Redefining global shopping from Kumasi since 2022.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Globit Imports. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
