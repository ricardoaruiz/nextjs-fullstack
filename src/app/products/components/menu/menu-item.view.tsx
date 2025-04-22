"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="self-stretch">
      <Link
        href={href}
        data-active={isActive}
        className="flex items-center h-full data-[active=true]:bg-gray-800 data-[active=true]:text-white hover:bg-gray-700 px-4 py-6 transition-all text-black hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
