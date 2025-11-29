'use client';
import SideNav from "@/components/sidenav";
import Headers from "@/components/header";
import Products from "@/components/products";
import { useState } from "react";
export default function Home(): React.JSX.Element {
  // const {theme,toggleTheme} = useTheme();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  return (
      <main className="app_container">
        <Headers setIsSideNavOpen={setIsSideNavOpen} isSideNavOpen={isSideNavOpen} />
        {isSideNavOpen?<SideNav 
        navList={[{name: "Dashboard", href: "/"}, {name: "Products", href: "/products"}, {name: "Orders", href: "/orders"}]} 
        />:null}
        <Products/>
      </main>
  );
}
