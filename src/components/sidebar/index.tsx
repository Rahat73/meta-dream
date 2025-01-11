"use client";

import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import routes from "@/routes";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-gray-50 w-80 space-y-2  border-r p-4">
      <div className="border-b flex items-center justify-center flex-col py-4 gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Logo</AvatarFallback>
        </Avatar>

        <p className="w-full text-2xl text-center font-semibold no-wrap">
          Meta Dream
        </p>
      </div>

      <div className="flex flex-col space-y-2">
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.href}
            className={
              pathname === route.href
                ? "flex space-x-2 font-semibold text-blue-500 hover:text-blue-500 bg-blue-100  rounded-md p-2"
                : "flex space-x-2 font-semibold hover:bg-blue-100 rounded-md p-2"
            }
          >
            {route.icon}
            <span className="whitespace-nowrap">{route.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
