
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

const navigation = [
  { label: "Sobre mim", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Áreas de atuação", href: "#protocolos" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const reduceMotion = useReducedMotion();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${siteConfig.whatsappMessage}`;

  useEffect(() => {
    let previousY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsScrolled(currentY > 30);

      if (menuOpen) {
        setIsVisible(true);
        previousY = currentY;
        return;
      }

      if (currentY < 80) {
        setIsVisible(true);
      } else if (Math.abs(currentY - previousY) > 5) {
        setIsVisible(currentY < previousY);
      }

      previousY = currentY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = () => {
    setIsVisible(true);
    setMenuOpen(false);
  };

  const handleHomeClick = () => {
    setIsVisible(true);
    setMenuOpen(false);

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? "instant" : "smooth",
      });
    }
  };

  return (
    <>
      {/* HEADER FLUTUANTE */}
      <motion.header
        initial={false}
        animate={{
          y: isVisible ? 0 : "-140%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.45,
          ease,
        }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-5"
      >
        <div
          className={`
            relative isolate mx-auto flex h-[76px] w-full max-w-[1500px]
            items-center justify-between overflow-hidden
            rounded-[20px] border px-6
            transition-[background-color,border-color,box-shadow] duration-500
            sm:px-8 lg:px-12
            ${
              isScrolled
                ? "border-white/65 bg-[#F8F7F4]/55 shadow-[0_16px_48px_rgba(10,31,22,0.13),0_2px_8px_rgba(10,31,22,0.04)]"
                : "border-white/55 bg-[#F8F7F4]/38 shadow-[0_10px_35px_rgba(10,31,22,0.07)]"
            }
          `}
          style={{
            backdropFilter: "blur(30px) saturate(165%)",
            WebkitBackdropFilter: "blur(30px) saturate(165%)",
          }}
        >
          {/* REFLEXO SUPERIOR DO VIDRO */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
          />

          {/* CAMADA DE REFLEXO */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.07) 36%, transparent 65%)",
            }}
          />

          {/* BRILHO AMBIENTE */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 -top-20 h-40 w-72 rotate-[-15deg] rounded-full bg-white/20 blur-[45px]"
          />

          {/* IDENTIDADE */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="group relative z-10 flex flex-col justify-center"
          >
            <span className="text-[19px] font-semibold leading-none tracking-[-0.045em] text-[#142E23] transition-colors duration-300 group-hover:text-[#9B8050] sm:text-[21px]">
              Taís Rodrigues
            </span>

            <span className="mt-1.5 text-[10px] font-medium tracking-[0.13em] text-[#9B8050]">
              Advocacia Estratégica
            </span>
          </Link>

          {/* NAVEGAÇÃO DESKTOP */}
          <nav
            aria-label="Navegação principal"
            className="relative z-10 hidden items-center gap-9 lg:flex xl:gap-11"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavigation}
                className="group relative py-2 text-[12px] font-bold tracking-[0.015em] text-[#314A3D] transition-colors duration-300 hover:text-[#142E23]"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#A98A55] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* AÇÕES */}
          <div className="relative z-10 flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden min-h-[43px] items-center gap-4 rounded-full bg-[#142E23] px-5 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#C5A059] hover:text-[#142E23] hover:shadow-[0_8px_24px_rgba(197,160,89,0.25)] md:inline-flex"
            >
              Fale comigo

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <button
              type="button"
              onClick={() => {
                setMenuOpen((previous) => !previous);
                setIsVisible(true);
              }}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#142E23]/10 bg-white/10 text-[#142E23] transition-colors hover:bg-white/30 lg:hidden"
            >
              {menuOpen ? (
                <X size={22} strokeWidth={1.6} />
              ) : (
                <Menu size={22} strokeWidth={1.6} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease,
            }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[#F8F7F4]/90 px-8 pb-10 pt-36 backdrop-blur-[32px] lg:hidden"
          >
            <nav
              aria-label="Navegação mobile"
              className="flex flex-col gap-3"
            >
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: -15 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: reduceMotion ? 0 : index * 0.07,
                  }}
                  className="border-b border-[#142E23]/10 py-5 text-[27px] font-medium tracking-[-0.04em] text-[#142E23] transition-colors hover:text-[#9B8050]"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavigation}
              className="mt-12 flex min-h-[56px] items-center justify-between rounded-full bg-[#142E23] px-7 text-sm font-medium text-white"
            >
              Solicitar atendimento
              <ArrowUpRight size={18} />
            </a>

            <div className="mt-12 text-[12px] text-[#68756D]">
              Dra. Taís Rodrigues — {siteConfig.oab}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
