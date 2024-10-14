"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import config from "@/config/config.json";
import { getActiveLanguages } from "@/lib/languageParser";
import { slugSelector } from "@/lib/utils/slugSelector";
import { INavigationLink } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
// import logo from "../../assets/logo1.jpeg"
// const logo = "data:image/jpeg;base64,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"

const Header = ({
  lang,
  menu,
}: {
  lang: string;
  menu: { main: INavigationLink[] };
}) => {
  const activeLanguages = getActiveLanguages();
  const { main }: { main: INavigationLink[] } = menu;
  const { navigation_button, settings } = config;
  const pathname = usePathname();
  console.log(pathname);
  const {
    logo_text_width,
    logo_text_height,
    logo_text,
  }: {
    logo_text_width: any;
    logo_text_height: any;
    logo_text: string;
  } = config.site;

  // scroll to top on route change
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <header
      className={`header z-30 ${settings.sticky_header && "sticky top-0"}`}
    >
      <nav className="navbar container px-0">
        {/* logo */}
        <div className="order-0 flex justify-center items-center gap-5">
          <Logo path={"logo1.jpeg"}/>
          <h2 className=" text-[#4C4C4C]">{logo_text}</h2>
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          htmlFor="nav-toggle"
          className="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1"
        >
          <svg
            id="show-button"
            className="h-6 fill-current block"
            viewBox="0 0 20 20"
          >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
          <svg
            id="hide-button"
            className="h-6 fill-current hidden"
            viewBox="0 0 20 20"
          >
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <span
                    className={`nav-link inline-flex items-center ${
                      menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children
                        ?.map(({ url }) => `${url}/`)
                        .includes(pathname)
                        ? "active"
                        : ""
                    }`}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
                    {menu.children?.map((child, i) => (
                      <li className="nav-dropdown-item" key={`children-${i}`}>
                        <Link
                          href={slugSelector(lang, child.url)}
                          className={`nav-dropdown-link block ${
                            (pathname === `${child.url}/` ||
                              pathname === child.url) &&
                            "active"
                          }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={slugSelector(lang, menu.url)}
                    className={`nav-link block ${
                      (pathname === `${menu.url}/` || pathname === menu.url) &&
                      "active"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          {navigation_button.enable && (
            <li className="mt-4 inline-block lg:hidden">
              <Link
                className="btn btn-outline-primary btn-sm"
                href={navigation_button.link}
              >
                {navigation_button.label}
              </Link>
            </li>
          )}
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          {/* {settings.search && (
            <button
              className="border-border text-dark hover:text-primary dark:border-darkmode-border mr-5 inline-block border-r pr-5 text-xl dark:text-white dark:hover:text-darkmode-primary"
              aria-label="search"
              data-search-trigger
            >
              <IoSearch />
            </button>
          )} */}
          {/* theme switcher For Dark Mode*/}
          {/* <ThemeSwitcher className="mr-5" /> */}
          <div className="order-0">
          <Logo path={"iitk_logo"}/>
          {/* <h2 className="">{logo_text}</h2> */}
        </div>

          {/* {activeLanguages.length > 1 && (
            <LanguageSwitcher
              lang={lang}
              className="mr-5 pl-2 py-1 dark:bg-darkmode-theme-light rounded"
            />
          )}
          {navigation_button.enable && (
            <Link
              className="btn btn-outline-primary btn-sm hidden lg:inline-block"
              href={navigation_button.link}
            >
              {navigation_button.label}
            </Link>
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
