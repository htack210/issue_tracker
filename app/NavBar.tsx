import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const links = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Issues",
    href: "/issues",
  },
];

const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b border-t mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-sky-600 hover:bg-sky-600 hover:text-sky-100 rounded-xl px-4 transition-colors font-semibold"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
