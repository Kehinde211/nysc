"use client"
import Image from "next/image";
import React from "react";
import QuickDetailsPage from "./components/ComponentOne/page";

export default function Home() {
  const [projectStatus, setProjectStatus] = React.useState<string>("onTrack")

  return (
    <div className="mx-5 flex flex-col items-center justify-center text-[14px] font-sans my-4 scroll-py-48">
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main> */}
      <section className="bg-[#f2fdf6] p-8 rounded-md border border-green-100 w-[80%] mx-10 my-5 shadow-sm">
    <h1 className="text-2xl font-bold text-green-900">Welcome to Clockitt</h1>
    <p className="text-green-800">Your centralized platform for seamless NYSC updates and corpers team collaboration. Stay organized and serve the nation right. Corper wee!!!</p>
    
    <div className="mt-4 p-4 sm:w-[50%] lg:w-[20%] w-[20%] bg-white rounded-md border border-green-200">
      <p className="font-semibold">Current Project Status: 
        <span className="text-green-600 ml-2">{projectStatus}</span>
      </p>
    </div>
</section>

{/* Quick Access and Overview */}
<section>
<h1 className="font-bold text-[16px] mb-6">Quick Access and Overview</h1>
<QuickDetailsPage
pending={5}
urgent={4}
/>
</section>
    </div>
  );
}
