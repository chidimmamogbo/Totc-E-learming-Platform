import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/component/hero";
import SuccessSection from "@/component/successSection";
import FeaturesSection from "@/component/featuresCard";
import WhatIsTotc from "@/component/totcFeatures";
import ClassroomFeatures from "@/component/classroom";
import ClassroomInterfaceFeature from "@/component/classroomfeatures";
import ToolsSection from "@/component/tools";
import QuizShowcase from "@/component/quizshowcase";
import ManagementShowcase from "@/component/management";
import DiscussionShowcase from "@/component/discussions";


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
      className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
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
      </main>
    </div>
  );
}
