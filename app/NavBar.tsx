"use client";
import React from "react";
import {
  House,
  CheckSquare,
  Megaphone,
  MessageSquareQuote,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type path = string;

const NavBar = () => {
  const pathname = usePathname();

  const getLinkClasses = (path: path) => {
    const isActive = pathname === path;
    return `flex items-center gap-2 transition-colors ${
      isActive ? "text-green-500" : "text-black hover:text-red-500"
    }`;
  };

  return (
    <div className="flex flex-row text-[12px] justify-between gap-5 items-center px-2 mb-3 py-2 shadow-sm">
      <div>
        <Image src="/nysc.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex flex-row gap-7 p-4 mx-7">
        {/* Home */}
        <li>
          <Link href="/" className={getLinkClasses("/")}>
            <House size={20} />
            <span>Home</span>
          </Link>
        </li>

        {/* Tasks */}
        <li>
          <Link href="/tasks" className={getLinkClasses("/tasks")}>
            <CheckSquare size={20} />
            <span>Tasks</span>
          </Link>
        </li>

        {/* Announcements */}
        <li>
          <Link
            href="/announcements"
            className={getLinkClasses("/announcements")}
          >
            <Megaphone size={20} />
            <span>Announcements</span>
          </Link>
        </li>

        {/* PPA reviews */}
        <li>
          <Link href="/ppareviews" className={getLinkClasses("/ppareviews")}>
            <MessageSquareQuote size={20} />
            <span>PPA Reviews</span>
          </Link>
        </li>

        {/* ChatBox */}
        <li>
          <Link href="/chats" className={getLinkClasses("/chats")}>
            <MessageCircle size={20} />
            <span>Chats</span>
          </Link>
        </li>
      </ul></div>
      

      <div></div>
    </div>
  );
};

export default NavBar;