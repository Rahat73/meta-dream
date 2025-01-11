"use client";

import { Avatar } from "@radix-ui/react-avatar";
import React from "react";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import routes from "@/routes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const currentRouteName = getRouteName(pathname);

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-lg font-semibold">{currentRouteName}</h1>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium">Rahat Ashik</p>
          <p className="text-xs text-gray-500">Admin</p>
        </div>
        <Avatar className="w-7 h-7">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="User Avatar"
            className="rounded-full"
          />
          <AvatarFallback>RO</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;

function getRouteName(pathname: string): string {
  const currentRoute = routes.find((route) => route.href === pathname);
  return currentRoute ? currentRoute.name : "Trading Accounts";
}
