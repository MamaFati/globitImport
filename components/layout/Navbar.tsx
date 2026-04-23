"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServiceChange = (value: string) => {
    const match = serviceLinks.find((item) => item.value === value);
    if (!match) return;
    router.push(match.href);
    closeMenu();
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/50 backdrop-blur-lg shadow-lg"
          : "bg-slate-900/30 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Image
            src={AppLogo}
            alt="Globit Logo"
            width={80}
            height={40}
            priority
            className="h-auto w-auto"
          />
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-slate-700/30 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <IoMdClose size={28} />
          ) : (
            <IoMenuOutline size={28} />
          )}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {primaryNavLinks.slice(0, 2).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-md px-4 py-2 font-medium transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? "bg-blue-500/20 text-blue-500"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Select onValueChange={handleServiceChange}>
              <SelectTrigger showValue={false} className="rounded-md px-4 py-2 text-white hover:bg-white/10">
                <span className="font-medium">Services</span>
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
                className={`rounded-md px-4 py-2 font-medium transition-all duration-200 ${
                  isActiveLink(item.href)
                    ? "bg-blue-500/20 text-blue-500"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="border-t border-slate-700/50 bg-slate-900/80 backdrop-blur-lg md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {primaryNavLinks.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block rounded-md px-4 py-3 font-medium transition-all duration-200 ${
                    isActiveLink(item.href)
                      ? "bg-blue-500/20 text-blue-500"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger showValue={false} className="rounded-md px-4 py-3 text-white hover:bg-white/10">
                  <span className="font-medium">Services</span>
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
                  className={`block rounded-md px-4 py-3 font-medium transition-all duration-200 ${
                    isActiveLink(item.href)
                      ? "bg-blue-500/20 text-blue-500"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
