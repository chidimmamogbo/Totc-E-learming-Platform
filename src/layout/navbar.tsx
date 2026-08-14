import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Career', path: '/career' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about-us' },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between sticky top-0 z-50">
      <div className="navbar bg-[#49BBBD] px-4 lg:px-32 md:px-16">
        <div className="navbar-start">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={60} height={20} className="w-auto h-auto" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path}
                  className={
                    router.pathname === link.path ? "font-semibold text-primary" : "font-normal text-white"
                  }>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="navbar-end flex gap-2">
          {/* DESKTOP BUTTONS FIXED: Swapped <a> for <Link> and fixed width utility specs */}
          <div className="hidden md:flex gap-2">
            <Link 
              href="/login" 
              className="btn bg-white text-[#5b5b5b] hover:bg-gray-100 border border-[#49BBBD] rounded-full w-[110px] h-10 shadow-none flex items-center justify-center cursor-pointer"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="btn bg-white/30 text-[#ffffff] hover:bg-white/40 border border-[#49BBBD]/30 rounded-full w-[110px] h-10 shadow-none flex items-center justify-center cursor-pointer"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Dropdown Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <GiHamburgerMenu className="size-5 text-white" />
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#49BBBD] z-1 w-screen max-w-screen shadow fixed right-0 pl-8 pb-8 pt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path}
                    className={
                      router.pathname === link.path ? "font-semibold text-primary" : "font-normal text-white"
                    }>
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* MOBILE MENU BUTTONS FIXED: Adjusted unit specs to ensure identical geometry rendering */}
              <div className="flex gap-2 md:hidden mt-5">
                <Link href="/login" className="btn bg-white text-[#5b5b5b] border border-[#49BBBD] rounded-full w-[110px] h-10 shadow-none flex items-center justify-center">
                  login
                </Link>
                <Link href="/register" className="btn bg-white/30 text-[#ffffff] border border-[#49BBBD]/30 rounded-full w-[110px] h-10 shadow-none flex items-center justify-center">
                  Sign up
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
