"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Badge } from "@/components/ui/Badge";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-verdemar shadow-sm"
    >
      <div className="mx-auto flex h-[8.75rem] max-w-7xl items-center justify-between gap-6 px-6 sm:px-10 xl:px-12">
        <a href="#" aria-label="MantroOps home" className="shrink-0">
          <Logo height={128} />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Badge variant="light">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Coming soon
          </Badge>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/15 bg-verdemar md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Badge variant="light">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Coming soon
                </Badge>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
