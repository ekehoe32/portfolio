"use client";
import { usePathname } from "next/navigation";
import * as changeCase from "change-case";
import clsx from "clsx";
import Link from "next/link";

const sections = [
  { name: "Undergradate", href: "/education/undergraduate" },
  { name: "Graduate", href: "/education/graduate" },
  { name: "Postdoc", href: "/education/postdoc" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen p-4">
      <div className="text-sm lg:text-base breadcrumbs max-w-xs pb-6">
        <ul>
          {sections.map((section) => (
            <li key={`math-${changeCase.kebabCase(section.name)}-link`}>
              <Link
                className={clsx({ "text-white": section.href === pathname })}
                href={section.href}
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </main>
  );
}
