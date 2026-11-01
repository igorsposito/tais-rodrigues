
"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const whatsappMessage = encodeURIComponent(
  "Olá, Dra. Taís! Vim pelo site e gostaria de conversar sobre uma orientação jurídica para minha prática profissional."
);

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar com a Dra. Taís pelo WhatsApp"
          title="Conversar pelo WhatsApp"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20, scale: 0.9 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 12, scale: 0.95 }
          }
          transition={{
            duration: reduceMotion ? 0 : 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            reduceMotion ? undefined : { y: -3 }
          }
          whileTap={
            reduceMotion ? undefined : { scale: 0.96 }
          }
          className="
            group fixed bottom-6 right-5 z-[45]
            flex h-[58px] w-[58px] items-center justify-center
            rounded-full border border-white/20
            bg-[#142E23]/90 text-[#F8F7F4]
            shadow-[0_12px_35px_rgba(10,31,22,0.24)]
            backdrop-blur-[20px]
            transition-colors duration-300
            hover:border-[#C5A059]/50
            hover:bg-[#C5A059]
            hover:text-[#142E23]
            sm:bottom-8 sm:right-8
          "
          style={{
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Reflexo do vidro */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-[1px]
              rounded-full
              bg-gradient-to-br
              from-white/20 via-white/5 to-transparent
            "
          />

          {/* Ícone WhatsApp */}
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
            className="relative h-[27px] w-[27px]"
          >
            <path d="M16.004 2.67C8.64 2.67 2.67 8.64 2.67 16c0 2.36.62 4.67 1.79 6.7L2.67 29.33l6.79-1.78a13.26 13.26 0 0 0 6.54 1.67h.01c7.36 0 13.32-5.97 13.32-13.33 0-3.56-1.38-6.91-3.9-9.43a13.24 13.24 0 0 0-9.43-3.79Zm0 24.3a11 11 0 0 1-5.61-1.54l-.4-.24-4.03 1.06 1.08-3.93-.26-.41A11.07 11.07 0 0 1 4.99 16c0-6.08 4.94-11.03 11.02-11.03 2.95 0 5.72 1.15 7.8 3.23A10.95 10.95 0 0 1 27.04 16c0 6.08-4.95 10.97-11.04 10.97Zm6.05-8.26c-.33-.16-1.95-.96-2.25-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.16-1.4-.52-2.66-1.65-.98-.87-1.65-1.95-1.84-2.28-.19-.33-.02-.51.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.02-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.16.22 2.32 3.55 5.62 4.98.78.34 1.39.54 1.87.69.79.25 1.51.21 2.08.13.64-.1 1.95-.8 2.22-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z" />
          </svg>

          {/* Indicador de ação no hover */}
          <span
            aria-hidden="true"
            className="
              absolute -right-1 -top-1
              flex h-[20px] w-[20px] items-center justify-center
              rounded-full border border-[#F8F7F4]
              bg-[#C5A059] text-[#142E23]
              shadow-sm
              transition-transform duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          >
            <ArrowUpRight size={12} strokeWidth={2} />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
