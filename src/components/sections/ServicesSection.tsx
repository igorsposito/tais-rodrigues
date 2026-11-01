
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    number: "01",
    title: "Protocolos jurídicos",
    heading: "Protocolos e documentos para a prática médica",
    description:
      "Elaboração e organização de instrumentos jurídicos voltados à rotina de clínicas e consultórios, considerando as particularidades de cada atividade profissional.",
    details: [
      "Termos de consentimento informado",
      "Instrumentos contratuais para clínicas e consultórios",
      "Orientações sobre documentação e registros",
    ],
    message:
      "Olá, Dra. Taís! Vim pelo site e gostaria de informações sobre protocolos e documentos jurídicos para a prática médica.",
  },
  {
    number: "02",
    title: "Análise contratual",
    heading: "Contratos pensados para as relações na saúde",
    description:
      "Elaboração e revisão de contratos relacionados à atuação de profissionais e estabelecimentos de saúde, com atenção às obrigações e particularidades de cada relação.",
    details: [
      "Contratos de prestação de serviços",
      "Revisão de cláusulas e obrigações",
      "Instrumentos para relações profissionais e comerciais",
    ],
    message:
      "Olá, Dra. Taís! Vim pelo site e gostaria de informações sobre elaboração e revisão contratual.",
  },
  {
    number: "03",
    title: "Advocacia preventiva",
    heading: "Orientação jurídica para o cotidiano profissional",
    description:
      "Orientação sobre situações jurídicas presentes na rotina da assistência à saúde, com atenção à documentação, à comunicação e à organização de procedimentos.",
    details: [
      "Análise de situações da rotina profissional",
      "Orientações sobre comunicação e documentação",
      "Avaliação preventiva de procedimentos internos",
    ],
    message:
      "Olá, Dra. Taís! Vim pelo site e gostaria de informações sobre advocacia preventiva na área da saúde.",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  const activeService = services[activeIndex];

  const whatsappUrl = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(activeService.message)}`;

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reducedMotion ? 0 : 0.85,
      delay,
      ease,
    },
  });

  return (
    <section
      id="protocolos"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#142E23] py-20 text-[#F8F7F4] sm:py-24 lg:py-28"
    >
      {/* Iluminação de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[300px] top-[10%] h-[800px] w-[800px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(197,160,89,0.11), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[300px] bottom-[-350px] h-[800px] w-[800px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,143,111,0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

          {/* COLUNA ESQUERDA — FOTOGRAFIA GRANDE */}
          <motion.div
            {...reveal(0.05)}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative">
              {/* Moldura deslocada */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -left-4 right-4 top-4 rounded-[12px] border border-[#C5A059]/35 sm:-bottom-6 sm:-left-6 sm:right-6 sm:top-6"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#26382F] shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
                <Image
                  src="/images/bgprotocolos.jpg"
                  alt="Dra. Taís Rodrigues em retrato profissional"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover object-center"
                />

                {/* Degradê discreto, sem alterar a foto original */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#142E23]/50 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[17px] font-medium tracking-[-0.02em] text-white">
                      Taís Rodrigues
                    </p>
                    <p className="mt-1 text-[12px] text-white/75">
                      Advocacia preventiva em saúde
                    </p>
                  </div>

                  <span className="text-[11px] text-white/80">
                    {siteConfig.oab}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUNA DIREITA — TÍTULO E SERVIÇOS */}
          <div>
            <motion.div {...reveal(0.08)}>
              <h2 className="max-w-[720px] text-[clamp(2.5rem,4vw,4.6rem)] font-medium leading-[1.1] tracking-[-0.055em]">
                O cuidado jurídico
                também faz parte da{" "}
                <span className="text-[#C5A059]">
                  prática médica.
                </span>
              </h2>

              <p className="mt-6 max-w-[570px] text-[15px] leading-[1.85] text-[#BDCBC0] sm:text-[16px]">
                Orientação jurídica voltada às
                particularidades da atuação de
                profissionais da saúde, clínicas
                e consultórios.
              </p>
            </motion.div>

            {/* Lista interativa */}
            <motion.div
              {...reveal(0.16)}
              className="mt-10 border-t border-white/20"
            >
              {services.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={service.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className="group relative flex w-full cursor-pointer items-center gap-5 border-b border-white/20 py-5 text-left sm:gap-7 sm:py-6"
                  >
                    <span
                      className={`shrink-0 text-[12px] font-medium ${
                        isActive
                          ? "text-[#C5A059]"
                          : "text-[#83998B]"
                      }`}
                    >
                      {service.number}
                    </span>

                    <span
                      className={`flex-1 text-[18px] font-medium tracking-[-0.025em] transition-colors duration-300 sm:text-[20px] ${
                        isActive
                          ? "text-white"
                          : "text-[#A4B7A9] group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-[#C5A059]"
                          : "rotate-45 text-[#83998B] group-hover:rotate-0"
                      }`}
                    />

                    {isActive && (
                      <motion.span
                        layoutId="service-underline"
                        className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#C5A059]/75"
                        transition={{
                          duration: reducedMotion ? 0 : 0.35,
                          ease,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>

            {/* Conteúdo dinâmico integrado */}
            <motion.div
              {...reveal(0.22)}
              className="mt-8 overflow-hidden rounded-[12px] border border-[#C5A059]/20 bg-white/[0.045] p-6 backdrop-blur-md sm:p-8"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeService.number}
                  initial={
                    reducedMotion
                      ? false
                      : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    reducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -10 }
                  }
                  transition={{
                    duration: reducedMotion ? 0 : 0.28,
                    ease,
                  }}
                >
                  <h3 className="max-w-[550px] text-[22px] font-medium leading-[1.25] tracking-[-0.035em] text-white sm:text-[25px]">
                    {activeService.heading}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.85] text-[#C8D4CB]">
                    {activeService.description}
                  </p>

                  <div className="mt-6 grid gap-3 border-t border-white/15 pt-5 sm:grid-cols-2">
                    {activeService.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#C5A059]"
                        />

                        <p className="text-[13px] leading-[1.65] text-[#D3DCD4]">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-3 border-b border-[#C5A059]/60 pb-2 text-[13px] font-medium text-[#E4C99A] transition-colors duration-300 hover:text-white"
                  >
                    Solicitar informações

                    <ArrowRight
                      size={17}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
