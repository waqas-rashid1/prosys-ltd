"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 1200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 hidden sm:block"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-white text-dark-primary hover:bg-accent hover:text-white px-5 py-3 rounded-none font-semibold text-xs uppercase tracking-widest shadow-xl shadow-black/20 transition-all duration-300"
          >
            Book a Call
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
