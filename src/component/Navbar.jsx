"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./Resizable-Navbar";
import { useState, useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import logo from "../assets/icon/logo.webp";
export default function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const [isTransitioning, setIsTransitioning] = useState(false);

   const [darkMode, setDarkMode] = useState(false);

  // Update class ke <html> saat darkMode berubah
  useEffect(() => {
    const html = document.documentElement;
      // Set flag transisi
    setIsTransitioning(true);
    

    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  
    // Reset flag transisi setelah animasi selesai
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // 300ms sesuai dengan durasi CSS transition

    return () => clearTimeout(timer);
  }, [darkMode]);
  
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navbar-smooth relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
          <NavbarButton className={"p-3"} onClick={() => setDarkMode(!darkMode)} variant="gradient">
              {darkMode ? <BiMoon /> : <BiSun />} 
            </NavbarButton>

            <NavbarButton variant="gradient">Login</NavbarButton>
            
            </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav >
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex flex-row gap-2">
                <NavbarButton className={"p-3 rounded-full lg:rounded-0"} onClick={() => setDarkMode(!darkMode)} variant="gradient">
              {darkMode ? <BiMoon /> : <BiSun />} 
            </NavbarButton>
               <MobileNavToggle
              
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            </div>
            
         
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white font-clash hover:text-gray-600 dark:black"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* <DummyContent /> */}
    </div>
  );
}

function DummyContent() {
  const boxes = [
    { id: 1, title: "The", width: "md:col-span-1" },
    { id: 2, title: "First", width: "md:col-span-2" },
    { id: 3, title: "Rule", width: "md:col-span-1" },
    { id: 4, title: "Of", width: "md:col-span-3" },
    { id: 5, title: "F", width: "md:col-span-1" },
    { id: 6, title: "Club", width: "md:col-span-2" },
    { id: 7, title: "Is", width: "md:col-span-2" },
    { id: 8, title: "You", width: "md:col-span-1" },
    { id: 9, title: "Do NOT TALK about", width: "md:col-span-2" },
    { id: 10, title: "F Club", width: "md:col-span-1" },
  ];

  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="mb-4 text-center text-3xl font-bold">
        Check the navbar at the top of the container
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">
        For demo purpose we have kept the position as{" "}
        <span className="font-medium">Sticky</span>. Keep in mind that this
        component is <span className="font-medium">fixed</span> and will not
        move when scrolling.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`${box.width} h-60 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
