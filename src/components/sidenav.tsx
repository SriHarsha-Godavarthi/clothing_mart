'use client';
import Link from "next/link";
import { useState } from "react";
import "@/styles/sidenav.css";
import { useTheme } from "@/contextapi/themeContext";
interface NavItem {
    name: string;
    href: string;
}

export default function SideNav({ navList }: { navList: NavItem[] }): React.JSX.Element {
    const { theme } = useTheme();
  return (
        <nav className="side-nav-container ">{navList.map((navItem) => (
                <Link className="nav-link"key={navItem.name}  prefetch={false} href={navItem.href}>{navItem.name}</Link>
            ))}
        </nav>
  );
}