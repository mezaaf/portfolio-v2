"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div className="z-999 fixed w-full h-20 bg-primary-foreground">
        <div className="w-full h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <Image src="/images/logo.png" alt="logo" width={118} height={31} />
          <Menu />
          <Button
            variant="outline"
            size="icon-sm"
            aria-hidden
            className="opacity-0"
          >
            <Sun />
          </Button>
        </div>
      </div>
    );
  }

  const logo = theme === "light" ? "/images/logo.png" : "/images/dark-logo.png";

  return (
    <div className="z-999 fixed w-full h-20 bg-primary-foreground">
      <div className="w-full h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <Image src={logo} alt="logo" width={118} height={31} />
        <Menu />
        <Button variant="outline" size="icon-sm" onClick={handleThemeChange}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </div>
  );
};

export default Nav;

const Menu = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
};
