'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import AppLogo from "@/public/images/logo.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const serviceLinks = [
    { value: "product-sourcing", label: "Product Sourcing", href: "/services/product-sourcing" },
    { value: "seamless-procurement", label: "Seamless Procurement", href: "/services/seamless-procurement" },
    { value: "rmb-exchange", label: "RMB Exchange", href: "/services/rmb-exchange" },
    { value: "global-logistics", label: "Global Logistics & Shipping", href: "/services/global-logistics" },
    { value: "courses", label: "Courses", href: "/services/courses" },
    { value: "globit-shop", label: "Globit Shop", href: "/services/globit-shop" },
  ];

  const handleServiceChange = (value: string) => {
    const match = serviceLinks.find((item) => item.value === value);
    if (!match) return;
    router.push(match.href);
    closeMenu();
  };

  return (
    <nav className="fixed w-full  bg-slate-900/30 text-white z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-2">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <Image src={AppLogo} className="" alt="Globit Logo" width={80} height={5} />
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center  px-3 py-2 text-sm font-medium md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <IoMdClose size={30} className="ml-2" />
          ) : (
            <IoMenuOutline size={30} />
          )}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          <li>
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Select onValueChange={handleServiceChange}>
              <SelectTrigger showValue={false}>
                <span className="">Services</span>
                <SelectValue className="sr-only" placeholder="Services" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {serviceLinks.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-900">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {isOpen ? (
        <div className=" w-1/2 border-gray-200 bg-slate-900/30 text-white md:hidden fixed right-0">
          <ul className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            <li>
              <Link href="/" onClick={closeMenu} className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu} className="hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger showValue={false}>
                  <span className="">Services</span>
                  <SelectValue className="sr-only" placeholder="Services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {serviceLinks.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu} className="hover:text-gray-900">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu} className="hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
