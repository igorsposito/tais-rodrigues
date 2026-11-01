
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Áreas de atuação", href: "#protocolos" },
  { label: "Perguntas frequentes", href: "#faq" },
];

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.5"
        cy="6.5"
        r="0.8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Footer() {
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      delay,
      ease,
    },
  });

  return (
    <footer
      id="contato"
      className="relative isolate overflow-hidden border-t border-[#C5A059]/15 bg-[#142E23] text-[#F8F7F4]"
    >
      {/* Iluminação ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[250px] -top-[350px] h-[800px] w-[800px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(197,160,89,0.08), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16 xl:px-20">
        {/* INFORMAÇÕES INSTITUCIONAIS */}
        <div className="grid gap-10 border-b border-white/15 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:py-16">

          {/* Identidade */}
          <motion.div
            {...reveal(0.05)}
            className="sm:col-span-2 lg:col-span-5"
          >
            <a
              href="#inicio"
              aria-label="Voltar ao início"
              className="inline-flex flex-col"
            >
              <span className="text-[29px] font-medium tracking-[-0.055em] text-white">
                Taís Rodrigues
                <span className="text-[#C5A059]">.</span>
              </span>

              <span className="mt-1 text-[13px] text-[#C5A059]">
                Entre a Bula e a Lei
              </span>
            </a>

            <p className="mt-5 max-w-[380px] text-[13px] leading-[1.9] text-[#ACBDB0]">
              Advocacia preventiva voltada à orientação
              jurídica de profissionais da saúde,
              clínicas e consultórios.
            </p>

            <p className="mt-4 text-[12px] text-[#D3DCD4]">
              {siteConfig.oab}
            </p>
          </motion.div>

          {/* Navegação */}
          <motion.div
            {...reveal(0.1)}
            className="hidden lg:col-span-3 lg:block"
            >
            <h3 className="text-[14px] font-medium text-white">
              Navegação
            </h3>

            <nav aria-label="Navegação do rodapé">
              <ul className="mt-5 space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[13px] text-[#ACBDB0] transition-colors duration-300 hover:text-[#E4C99A]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Atendimento */}
          <motion.div
            {...reveal(0.15)}
            className="lg:col-span-4"
          >
            <h3 className="text-[14px] font-medium text-white">
              Atendimento
            </h3>

            <p className="mt-5 max-w-[300px] text-[13px] leading-[1.9] text-[#ACBDB0]">
              Online em todo o Brasil e presencial
              mediante agendamento.
            </p>

            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Entre a Bula e a Lei"
              className="group mt-6 inline-flex items-center gap-3 text-[13px] text-[#E4C99A] transition-colors duration-300 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/35 transition-colors duration-300 group-hover:border-[#C5A059]">
                <InstagramIcon />
              </span>

              @entreabulaealei

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="text-[11px] text-[#91A497]">
              © {new Date().getFullYear()} Taís Rodrigues.
              Todos os direitos reservados.
            </p>

            <p className="text-[11px] leading-relaxed text-[#718A7A]">
              Conteúdo informativo. Cada situação exige análise individual.
            </p>
          </div>

          {/* Assinatura Ágave Lab */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#91A497]">
              Desenvolvido por
            </span>

            <a
              href="https://www.agavelab.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ágave Lab — Software Studio"
              className="inline-flex items-center transition-opacity duration-300 hover:opacity-75"
            >
              <Image
                src="/images/agave-logo.png"
                alt="Ágave Lab"
                width={110}
                height={30}
                className="h-7 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
