"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import AppLogo from "@/public/images/35ab6eb9-b8b6-42a9-806c-cdaac68ec55d-removebg-preview (1).png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { primaryNavLinks, serviceLinks } from "@/components/layout/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

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
          <Image
            src={AppLogo}
            className=""
            alt="Globit Logo"
            width={80}
            height={5}
          />
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
          {primaryNavLinks.slice(0, 2).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-gray-900">
                {item.label}
              </Link>
            </li>
          ))}
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
          {primaryNavLinks.slice(2).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-gray-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen ? (
        <div className=" w-1/2 border-gray-200 bg-slate-900/30 text-white md:hidden fixed right-0">
          <ul className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            {primaryNavLinks.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger showValue={false} className="bg-slate-900/50!">
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
            {primaryNavLinks.slice(2).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
