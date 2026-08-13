import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { registerSchema, RegisterInput } from '@/utils/authSchema'; // Ensure this matches your path inside src/utils/

const Register = (): React.JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Local state to hold field-specific error messages matching RegisterInput keys
  const [errors, setErrors] = useState<{ [key in keyof RegisterInput]?: string }>({});

  const handleRegisterSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors on every submission

    // Execute Zod safe parsing check
    const validationResult = registerSchema.safeParse({ email, username, password });

    if (!validationResult.success) {
      const fieldErrors: { [key in keyof RegisterInput]?: string } = {};
      
      // Fixed: Iterating correctly through Zod's official .issues array
      validationResult.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof RegisterInput;
        if (fieldName) {
          fieldErrors[fieldName] = issue.message;
        }
      });

      setErrors(fieldErrors); // Mount errors onto state to display them in the UI
      return; // Stop form submission
    }

    // Success State - Proceed with safe API database registration call
    console.log("Registration Validation Successful!", validationResult.data);
  };

  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center p-4 sm:p-8 md:p-12 py-20 lg:py-28">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: VISUAL BRAND ACCENT CONTAINER */}
        {/* ========================================================================= */}
        <div className="relative w-full aspect-[4/5] lg:h-[680px] xl:h-[740px] rounded-[30px] overflow-hidden shadow-sm">
          <Image
            src="/images/register.png"
            alt="Young children raising hands happily sitting in a warm classroom setting"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          <div className="absolute bottom-12 left-10 right-10 z-20 text-white flex flex-col gap-2">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-wide">
              Lorem Ipsum is simply
            </h1>
            <p className="text-sm sm:text-base font-light opacity-90 tracking-wide">
              Lorem Ipsum is simply
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: REPLICA REGISTRATION FORM INTERFACE */}
        {/* ========================================================================= */}
        <div className="flex flex-col w-full max-w-md mx-auto lg:mx-0">
          <p className="text-[#2F327D] font-normal text-sm sm:text-base text-center mb-5 tracking-wide">
            Welcome to lorem..!
          </p>

          {/* Toggle Tab Bar */}
          <div className="w-full bg-[#49BBBD]/30 rounded-full p-1.5 flex items-center mb-10 shadow-inner">
            <Link href="/login" className="w-1/2 text-white font-medium text-sm sm:text-base text-center py-2.5 rounded-full hover:text-[#2F327D] transition-colors">
              Login
            </Link>
            <Link href="/register" className="w-1/2 bg-[#49BBBD] text-white font-medium text-sm sm:text-base text-center py-2.5 rounded-full transition-all shadow-md">
              Register
            </Link>
          </div>

          <p className="text-[#696F8C] text-xs sm:text-sm font-light leading-relaxed mb-8 text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-6 w-full">
            
            {/* Field 1: Email Address Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#2F327D] font-semibold text-xs sm:text-sm tracking-wide">
                Email Address
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email Address"
                className={`w-full border rounded-full px-6 py-3.5 text-sm bg-transparent text-[#2F327D] outline-none transition-all ${
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#49BBBD]/60 focus:border-[#49BBBD]'
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-xs pl-4 font-medium">{errors.email}</span>
              )}
            </div>

            {/* Field 2: User Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-[#2F327D] font-semibold text-xs sm:text-sm tracking-wide">
                User name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your User name"
                className={`w-full border rounded-full px-6 py-3.5 text-sm bg-transparent text-[#2F327D] outline-none transition-all ${
                  errors.username ? 'border-red-500 focus:border-red-500' : 'border-[#49BBBD]/60 focus:border-[#49BBBD]'
                }`}
              />
              {errors.username && (
                <span className="text-red-500 text-xs pl-4 font-medium">{errors.username}</span>
              )}
            </div>

            {/* Field 3: Password Input with Eye Visibility Toggler */}
            <div className="flex flex-col gap-2">
              <label className="text-[#2F327D] font-semibold text-xs sm:text-sm tracking-wide">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  className={`w-full border rounded-full pl-6 pr-12 py-3.5 text-sm bg-transparent text-[#2F327D] outline-none transition-all ${
                    errors.password ? 'border-red-500 focus:border-red-500' : 'border-[#49BBBD]/60 focus:border-[#49BBBD]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#696F8C] hover:text-[#2F327D] focus:outline-none p-1 transition-colors"
                >
                  {showPassword ? (
                    <svg className="size-4 sm:size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="size-4 sm:size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.025 10.025 0 014.132-5.411m0 0L21 21M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3-7c3.12 0 5.862 1.83 7.197 4.5" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-xs pl-4 font-medium">{errors.password}</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end mt-6">
              <button
                type="submit"
                className="w-full sm:w-[160px] bg-[#49BBBD] hover:bg-[#3ca1a3] text-white font-medium text-sm sm:text-base py-3 rounded-full shadow-md transition-all active:scale-98"
              >
                Register
              </button>
            </div>

          </form>
        </div>

      </div>
    </main>
  );
};

export default Register;
