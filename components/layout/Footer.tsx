import Link from "next/link";
import Image from "next/image";
import AppLogo from "@/public/images/35ab6eb9-b8b6-42a9-806c-cdaac68ec55d-removebg-preview (1).png";
import { primaryNavLinks } from "@/components/layout/navigation";
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
    <footer className="bg-slate-900 text-slate-400 pt-8 pb-8 sm:pt-12 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-12">
          <div>
            {/* <Link href="/" className="flex items-center gap-2">
              <Image
                src={AppLogo}
                alt="Globit Logo"
                width={84}
                height={5}
              />
            </Link> */}
            <p className="mt-4 text-sm leading-6 text-slate-400 sm:hidden">
              China to Ghana shipping and sourcing support for businesses that
              want a cleaner import process.
            </p>
            <p className="mt-4 hidden max-w-sm text-sm leading-7 text-slate-400 sm:block sm:text-base">
              Ghana&apos;s premier China to Ghana shipping and sourcing partner.
              Empowering individuals and businesses through reliable logistics
              and expert training.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="rounded-full bg-slate-800/80 p-2.5 text-slate-300 transition-all hover:bg-blue-600 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="rounded-full bg-slate-800/80 p-2.5 text-slate-300 transition-all hover:bg-blue-600 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="rounded-full bg-slate-800/80 p-2.5 text-slate-300 transition-all hover:bg-blue-600 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:mt-5 sm:block sm:space-y-3 sm:text-base">
              {primaryNavLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-9 items-center hover:text-blue-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex min-h-9 items-center hover:text-blue-500 transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm sm:mt-5 sm:space-y-3 sm:text-base">
              <li>
                <a
                  href="https://maps.google.com/?q=Atwima+Takyiman,+Kumasi,+Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-10 items-start gap-3 rounded-xl py-1 transition-colors hover:text-white"
                >
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                  <span>Atwima Takyiman, Kumasi, Ghana</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+233551193503"
                  className="flex min-h-10 items-center gap-3 rounded-xl py-1 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 shrink-0 text-blue-500" />
                  <span>+233-5511-93503</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@globitimports.com"
                  className="flex min-h-10 items-center gap-3 rounded-xl py-1 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5 shrink-0 text-blue-500" />
                  <span>info@globitimports.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <h4 className="text-lg font-bold text-white">Local Trust</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-lg border border-slate-800 bg-slate-800/70 px-3 py-2 text-xs font-medium">
                Import business in Kumasi
              </span>
              <span className="rounded-lg border border-slate-800 bg-slate-800/70 px-3 py-2 text-xs font-medium">
                China to Ghana shipping
              </span>
              <span className="rounded-lg border border-slate-800 bg-slate-800/70 px-3 py-2 text-xs font-medium">
                Verified Sourcing
              </span>
              <span className="rounded-lg border border-slate-800 bg-slate-800/70 px-3 py-2 text-xs font-medium">
                Kumasi Logistics
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4 text-center text-sm sm:mt-10 sm:gap-3 sm:pt-6 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Globit Imports. All rights
            reserved.
          </p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6 md:items-center">
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
