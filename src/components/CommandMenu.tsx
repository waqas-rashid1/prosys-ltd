"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ArrowRight, Home, Briefcase, Users, FileText, Mail,
  Building2, Phone, Book, Cpu, BrainCircuit, Cloud, Megaphone, LayoutGrid,
  Telescope, Bot, ShieldCheck, Library, Blocks, Gauge,
} from "lucide-react";
import { servicesData } from "@/lib/services-data";

type Item = {
  label: string;
  href: string;
  group: string;
  icon: React.ElementType;
  description?: string;
};

const staticItems: Item[] = [
  { label: "Home", href: "/", group: "Navigate", icon: Home },
  { label: "All Services", href: "/services", group: "Navigate", icon: LayoutGrid },
  { label: "Our Work", href: "/work", group: "Navigate", icon: Briefcase },
  { label: "About PROSYS", href: "/about", group: "Navigate", icon: Building2 },
  { label: "Industries", href: "/industries", group: "Navigate", icon: Building2 },
  { label: "Careers", href: "/careers", group: "Navigate", icon: Users },
  { label: "Insights & Blog", href: "/blog", group: "Navigate", icon: Book },
  { label: "Contact", href: "/contact", group: "Actions", icon: Mail, description: "Start a conversation" },
  { label: "Book an AI Readiness Call", href: "/contact?intent=book-call", group: "Actions", icon: Phone, description: "30-min working session with the engagement lead" },
  { label: "Request a Proposal", href: "/contact?intent=proposal", group: "Actions", icon: FileText, description: "Get a scoped project estimate" },
];

function iconForService(iconName: string): React.ElementType {
  const map: Record<string, React.ElementType> = {
    Code2: Cpu,
    Cpu,
    BrainCircuit,
    Cloud,
    Megaphone,
    Telescope,
    Bot,
    ShieldCheck,
    Library,
    Blocks,
    Gauge,
  };
  return map[iconName] || Cpu;
}

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const items = useMemo<Item[]>(() => {
    const serviceItems: Item[] = servicesData.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
      group: "Services",
      icon: iconForService(s.icon),
      description: s.tagline,
    }));
    return [...staticItems, ...serviceItems];
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) ||
        i.description?.toLowerCase().includes(q) ||
        i.group.toLowerCase().includes(q)
    );
  }, [items, query]);

  const grouped = useMemo(() => {
    const groups: Record<string, Item[]> = {};
    for (const item of filtered) {
      if (!groups[item.group]) groups[item.group] = [];
      groups[item.group].push(item);
    }
    return groups;
  }, [filtered]);

  // Flatten for keyboard nav
  const flat = useMemo(() => Object.values(grouped).flat(), [grouped]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    const openHandler = () => setOpen(true);
    window.addEventListener("keydown", handler);
    window.addEventListener("prosys:open-cmdk", openHandler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("prosys:open-cmdk", openHandler);
    };
  }, [open]);

  // Reset internal state when the menu closes. Synchronizing local state to
  // an external trigger (the open prop pattern) is the documented exception
  // to the set-state-in-effect rule.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else if (wasOpen.current) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      setActiveIndex(0);
    }
    wasOpen.current = open;
  }, [open]);

  // Reset the highlighted item when the search query changes.
  const lastQuery = useRef(query);
  useEffect(() => {
    if (lastQuery.current === query) return;
    lastQuery.current = query;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flat.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = flat[activeIndex];
        if (item) {
          router.push(item.href);
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, flat, activeIndex, router]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-dark-primary border border-card-dark-border rounded-md shadow-2xl overflow-hidden"
          >
            {/* Search header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-card-dark-border">
              <Search size={18} className="text-text-light-muted flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, pages, or actions…"
                className="flex-1 bg-transparent outline-none text-white placeholder:text-text-light-muted/70 text-sm"
                aria-label="Command menu search"
              />
              <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-[10px] text-text-light-muted border border-card-dark-border rounded font-mono">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[55vh] overflow-y-auto py-2">
              {flat.length === 0 ? (
                <div className="px-5 py-12 text-center text-sm text-text-light-muted">
                  No results for &ldquo;{query}&rdquo;
                </div>
              ) : (
                Object.entries(grouped).map(([group, groupItems]) => (
                  <div key={group} className="py-2">
                    <p className="px-5 py-1 text-[10px] font-semibold text-accent-light uppercase tracking-widest">
                      {group}
                    </p>
                    {groupItems.map((item) => {
                      const Icon = item.icon;
                      const flatIdx = flat.indexOf(item);
                      const active = flatIdx === activeIndex;
                      return (
                        <button
                          key={item.href + item.label}
                          onClick={() => {
                            router.push(item.href);
                            setOpen(false);
                          }}
                          onMouseEnter={() => setActiveIndex(flatIdx)}
                          className={`w-full flex items-center gap-3 px-5 py-2.5 text-left transition-colors cursor-pointer ${ active ? "bg-accent/10 text-white" : "text-text-light hover:bg-white/5" }`}
                        >
                          <Icon
                            size={16}
                            className={active ? "text-accent-light" : "text-text-light-muted"}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{item.label}</div>
                            {item.description && (
                              <div className="text-[11px] text-text-light-muted truncate">
                                {item.description}
                              </div>
                            )}
                          </div>
                          <ArrowRight
                            size={12}
                            className={`transition-opacity ${active ? "opacity-100 text-accent-light" : "opacity-0"}`}
                          />
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer hints */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-card-dark-border text-[10px] text-text-light-muted">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 border border-card-dark-border rounded font-mono">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 border border-card-dark-border rounded font-mono">↵</kbd>
                  Open
                </span>
              </div>
              <span>PROSYS Quick Nav</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
