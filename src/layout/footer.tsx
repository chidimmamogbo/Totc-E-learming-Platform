import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = (): React.JSX.Element => {
  // Uses React.SyntheticEvent to avoid deprecation warnings and handle the submit context cleanly
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
  };

  return (
    <footer className="bg-[#252641] text-white py-14 px-4 sm:px-12 md:px-24 w-full flex flex-col items-center">
      {/* Top Section: Logo and Title Column */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 flex-wrap text-center sm:text-left">
        <div className="relative w-[114px] h-[40px] shrink-0">
          <Image
            src="/images/logo.png"
            alt="TOTC Logo"
            fill
            priority
            sizes="114px"
            className="object-contain"
          />
        </div>
        
        {/* Vertical Divider Line - Hidden on small mobile to avoid layout breaking */}
        <div className="hidden sm:block w-[1px] h-10 bg-[#62637A]" />

        <div className="flex flex-col sm:text-left">
          <p className="font-semibold text-base sm:text-lg tracking-wide text-white leading-tight">Virtual Class</p>
          <p className="font-semibold text-base sm:text-lg tracking-wide text-white leading-tight">for Zoom</p>
        </div>
      </div>

      {/* Middle Section: Newsletter Subscription Form */}
      <div className="w-full max-w-xl text-center mb-14 px-2">
        <h3 className="text-[#B2B3CF] text-base sm:text-[20px] font-medium mb-5 tracking-wide">
          Subscribe to get our Newsletter
        </h3>
        
        {/* Optimized form structure with fluid mobile dimensions */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full sm:max-w-90 bg-transparent text-white border border-[#62637A] rounded-full px-5 py-3 text-sm outline-none placeholder-[#62637A] focus:border-[#49BBBD] transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#49BBBD] hover:bg-[#3ca1a3] text-white font-semibold text-sm sm:text-base rounded-full px-8 py-3 shadow-[0_4px_20px_rgba(73,187,189,0.3)] transition-all active:scale-98 shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Section: Footer Navigation Links */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 text-[#B2B3CF] text-xs sm:text-base mb-6 flex-wrap font-light">
        <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
        <span className="text-[#62637A] text-xs sm:text-sm">|</span>
        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <span className="text-[#62637A] text-xs sm:text-sm">|</span>
        <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
      </div>

      {/* Copyright Disclaimer */}
      <p className="text-[#B2B3CF] text-[10px] sm:text-sm font-light tracking-wide text-center">
        © 2021 Class Technologies Inc.
      </p>
    </footer>
  );
};

export default Footer;
