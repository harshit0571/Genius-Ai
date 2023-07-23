"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessagesSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    label: "DashBoard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-voilet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const SideBar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#11827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className="text-2xl font-bold">Genius</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            return (
              <Link
                href={route.href}
                key={route.href}
                className="text-sm  flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;