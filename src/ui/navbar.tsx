import Button from "@/components/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900">
      <div className="hidden md:block">
        <section className="max-w-screen-lg mx-auto px-12 py-5 flex justify-between">
          <div>
            <Link href="/" className="hover:text-secondary font-bold">
              Indera Aji Waskitho
            </Link>
          </div>
          <ul className="flex gap-8 items-center text-sm">
            <li className="hover:text-secondary">
              <Link href="/#services-section">Services</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/#expertise-section">Expertise</Link>
            </li>
            <li className="hover:text-secondary">
              <Link href="/#projects-section">Experiences</Link>
            </li>
            <li className="text-secondary hover:text-white font-extrabold">
              <Link href="/#contact-section">Hire</Link>
            </li>
          </ul>
        </section>
      </div>

      <div>
        <section className="md:hidden mx-auto px-12 py-4 flex justify-between">
          <div
            className="flex gap-4 flex-row flex-nowrap items-center justify-between flex-grow basis-0 "
          >
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="group flex items-center justify-center w-6 h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
              type="button"
              aria-label="Open menu"
              aria-pressed="false"
              data-open={menuOpen}
            >
              <span className="sr-only">
                {`${menuOpen ? "close" : "open"} navigation menu`}
              </span>
              <span className="w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity before:content-[''] before:block before:h-px before:w-6 before:bg-current before:transition-transform before:duration-150 before:-translate-y-1 before:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45 after:content-[''] after:block after:h-px after:w-6 after:bg-current after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0 group-data-[open=true]:after:translate-y-0 group-data-[open=true]:after:-rotate-45"></span>
            </button>

            <div>
              <Link href="/" className="hover:text-secondary font-bold">
                Indera Aji Waskitho
              </Link>
            </div>

            <div></div>
          </div>
          {menuOpen && (
            <ul className="px-12 py-5 z-50 top-12 fixed flex max-w-full inset-x-0 bottom-0 w-screen flex-col gap-4 overflow-y-auto backdrop-blur-xl backdrop-saturate-150 bg-slate-900">
              <li className="hover:text-secondary">
                <Link
                  href="/#services-section"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li className="hover:text-secondary">
                <Link
                  href="/#expertise-section"
                  onClick={() => setMenuOpen(false)}
                >
                  Expertise
                </Link>
              </li>
              <li className="hover:text-secondary">
                <Link
                  href="/#projects-section"
                  onClick={() => setMenuOpen(false)}
                >
                  Experiences
                </Link>
              </li>
              <li className="text-secondary hover:text-white font-extrabold">
                <Link
                  href="/#contact-section"
                  onClick={() => setMenuOpen(false)}
                >
                  Hire
                </Link>
              </li>
            </ul>
          )}
        </section>
      </div>
    </nav>
  );
}
