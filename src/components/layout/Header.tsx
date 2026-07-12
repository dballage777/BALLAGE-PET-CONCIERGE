"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-100 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/75">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary"
      >
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            "children" in link && link.children ? (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-forest-800 transition-colors hover:text-gold-600"
                >
                  {link.label}
                  <svg
                    className="h-4 w-4 text-forest-400 transition-transform group-hover:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Link>
                <ul className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 rounded-2xl border border-forest-100 bg-cream p-2 opacity-0 shadow-soft transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-forest-700 transition-colors hover:bg-forest-50 hover:text-gold-600"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-forest-800 transition-colors hover:text-gold-600"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact#booking"
            className="inline-flex items-center rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-forest-950 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-gold-400"
          >
            Schedule a Meet &amp; Greet
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-forest-800 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-forest-100 bg-cream lg:hidden">
          <ul className="space-y-1 px-6 py-4">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2.5 text-base font-medium text-forest-800"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <ul className="ml-4 space-y-1 border-l border-forest-100 pl-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-forest-700"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-base font-medium text-forest-800"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li className="pt-3">
              <Link
                href="/contact#booking"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gold-500 px-6 py-3 text-center text-sm font-semibold text-forest-950"
              >
                Schedule a Meet &amp; Greet
              </Link>
            </li>
            <li className="pt-1 text-center">
              <a
                href={site.phoneHref}
                className="text-sm font-medium text-forest-600"
              >
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
