'use client';
import { useTheme } from "@/contextapi/themeContext";
import Image from "next/image";
import React from "react";
import "@/styles/header.css";
interface HeaderProps {
    setIsSideNavOpen: (isOpen: boolean) => void;
    isSideNavOpen: boolean;
}
export default function Header({ setIsSideNavOpen, isSideNavOpen }: HeaderProps): React.JSX.Element {
  const [searchTerm, setSearchTerm] = React.useState("");
   const {  theme,toggleTheme } = useTheme();
  
  return (
    <header className="app-header">
        <Image
         src={theme === 'dark' ? '/icons/lightmenu.png' : '/icons/darkmenu.png'}
         alt="Menu Icon"
         width={30}
         loading="eager"
         height={30}
         className="menu-icon"
         onClick={() =>{ 
            console.log("Clicked",isSideNavOpen);
            setIsSideNavOpen(!isSideNavOpen)}}
        />
        <div className="search-theme-container">
         <input type="text" className="search-bar" placeholder="Search..." value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}/>
         <span className="theme-button" onClick={toggleTheme}>{theme==="dark" ? "☀️" : "🌙"}</span>
         <Image
            src={theme === 'dark' ? '/icons/whitenotifications.png' : '/icons/blacknotifications.png'}
            alt="Notifications Icon"
            width={20}
            height={20}
         />
       </div>
    </header>
  );
}