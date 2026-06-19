"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

const ease = [0.22, 1, 0.36, 1] as const;
const MOBILE_QUERY = "(max-width: 767px)";
const SHOW_MS = 3000;
const EXIT_MS = 650;

export function MobileSplash() {
  const [active, setActive] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia(MOBILE_QUERY).matches;
    if (!isMobile) return;

    setActive(true);
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => setExiting(true), SHOW_MS);
    const cleanupTimer = window.setTimeout(() => {
      setActive(false);
      document.body.style.overflow = "";
    }, SHOW_MS + EXIT_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(cleanupTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="mobile-splash"
          role="status"
          aria-label="Loading MantroOps"
          aria-live="polite"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_MS / 1000, ease }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white md:hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
            className="flex flex-col items-center"
          >
            <Logo height={208} variant="light" />
            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.45, ease, delay: 0.35 }}
              className="mt-8 block h-0.5 w-20 origin-center rounded-full bg-papaya/80"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
