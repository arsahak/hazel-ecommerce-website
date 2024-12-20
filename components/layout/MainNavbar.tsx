"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

import React, { useMemo, useState } from "react";

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const menuItems = useMemo(
    () => [
      { title: "HOME", slug: "/" },
      { title: "ABOUT", slug: "/about" },
      { title: "GALLERY", slug: "/gallery" },
      { title: "CONTACT US", slug: "/contact" },
    ],
    []
  );

  // const handleScroll = useCallback(
  //   debounce(() => {
  //     setNavbarColor(window.scrollY >= 100);
  //   }, 100),
  //   []
  // );

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  // className={`pb-0 pt-2 md:pb-3 md:pt-4 fixed top-0 transition-colors duration-300 ${navbarColor ? "!bg-white shadow-small duration-1000" : "bg-transparent"}`}

  return (
    <section className={`relative z-50 `}>
      <div
        className={`w-full py-0 xl:py-2 fixed top-0 transition-colors duration-300 ${
          navbarColor
            ? "!bg-white shadow-small duration-1000"
            : "bg-transparent"
        }`}
      >
        <div className=" hidden lg:block">
          <div className="flex items-center container  justify-between">
            <div className="w-full flex items-center gap-x-10 2xl:gap-x-20">
              <Link href={"/"}>
                <Image
                  src={
                    navbarColor
                      ? "/assets/site-logo/hazel-logo-black.png "
                      : "/assets/site-logo/hazel-logo-white.png"
                  }
                  alt="Hazel Logo"
                  width={500}
                  height={500}
                  className="cursor-pointer w-[180px] xl:w-[150px]  h-auto mt-2 mb-2"
                />
              </Link>
            </div>

            <div className="w-full">
              <div
                className={`flex items-center justify-end gap-x-10  xl:gap-x-12 ${
                  navbarColor
                    ? "text-black border-black "
                    : "text-white border-white "
                }`}
              >
                <div>
                  <FiSearch className="size-6 hover:text-black" />
                </div>
                <div>
                  <TfiWorld className="size-5 hover:text-black" />
                </div>
                <div className="">
                  <Link
                    href={`/`}
                    className={`cursor-pointer uppercase text-lg lg:text-[17px] font-semibold transition-all duration-300 h-7 border-b-1  font-aviano-regular pb-1`}
                  >
                    Boutiques
                  </Link>
                </div>
                <div className="">
                  <Link
                    href={`/`}
                    className={`cursor-pointer uppercase text-lg lg:text-[17px] font-semibold transition-all duration-300 h-7  border-1 p-2  font-aviano-regular`}
                  >
                    Contact us
                  </Link>
                </div>

                <div>
                  <IoReorderThreeOutline className="size-8 hover:text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden ">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={` bg-white  py-4`}
          >
            <NavbarContent>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden text-black"
              />
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src={"/assets/site-logo/hazel-logo-black.png"}
                    alt="EssenceVFX"
                    width={500}
                    height={500}
                    className="cursor-pointer w-[140px]  h-auto mt-2 mb-2"
                  />
                </Link>
              </NavbarBrand>
            </NavbarContent>

            <NavbarMenu className="overflow-hidden  mt-6">
              {menuItems.map((el, index) => (
                <NavbarMenuItem key={el.slug} className="flex flex-row mt-2">
                  <Link
                    className={`w-full  text-black text-center !text-xl font-medium py-1 ${
                      pathname === el.slug ? "!text-primary" : ""
                    } ${index === 0 ? "mt-6" : ""}`}
                    href={el.slug}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {el.title}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainNavbar);
