import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/component/landing/hero";
import SuccessSection from "@/component/landing/successSection";
import FeaturesSection from "@/component/landing/featuresCard";
import WhatIsTotc from "@/component/landing/totcFeatures";
import ClassroomFeatures from "@/component/landing/classroom";
import ClassroomInterfaceFeature from "@/component/landing/classroomfeatures";
import ToolsSection from "@/component/landing/tools";
import QuizShowcase from "@/component/landing/quizshowcase";
import ManagementShowcase from "@/component/landing/management";
import DiscussionShowcase from "@/component/landing/discussions";
import Courses from "@/component/landing/courses";
import Testimonials from "@/component/landing/testimonial";
import LandingBlog from "@/component/landing/landingBlog";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen items-center justify-center bg-zinc-50 font-sans`}
    >
      <main className="flex min-h-screen w-full flex-col items-center">
        <Hero />
        <SuccessSection />
        <FeaturesSection />
        <WhatIsTotc />
        <ClassroomFeatures />
        <ClassroomInterfaceFeature />
        <ToolsSection />
        <QuizShowcase />
        <ManagementShowcase />
        <DiscussionShowcase />
        <Courses />
        <Testimonials />
        <LandingBlog />
      </main>
    </div>
  );
}
