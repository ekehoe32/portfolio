"use client";
import CubeScene from "@/app/ui/cube-scene";
import Link from "next/link";
import * as changeCase from "change-case";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import clsx from "clsx";

type NavbarProps = {
  children: React.ReactNode;
};

const links = [
  { name: "Home", href: "/" },
  { name: "Math", href: "/math/early" },
  { name: "Data Science", href: "/data-science" },
  { name: "Software Development", href: "/software-dev" },
  { name: "Music", href: "/music" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ children }: NavbarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function toggleSidebar() {
    const params = new URLSearchParams(searchParams);

    if (params.get("sidebar")) {
      params.delete("sidebar");
    } else {
      params.set("sidebar", "open");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="drawer">
      <input
        id="navbar-drawer"
        type="checkbox"
        className="drawer-toggle"
        onChange={toggleSidebar}
        checked={searchParams.get("sidebar") ? true : false}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="navbar-drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <CubeScene />
            </label>
          </div>

          <Link className="flex-1 px-2 mx-2 gap-2" href="/">
            <p className=" text-xl">KehoeTech</p>
            <Image
              className="w-6"
              src="/kehoe.png"
              width={100}
              height={100}
              alt="kehoe logo"
            />
          </Link>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {links.map((link) => (
                <li key={`link-${changeCase.kebabCase(link.name)}`}>
                  <Link
                    className={clsx({
                      "text-white": pathname === link.href,
                    })}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="navbar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {links.map((link) => (
            <li key={`link-${changeCase.kebabCase(link.name)}`}>
              <Link
                className={clsx({
                  "text-white": pathname === link.href,
                })}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
