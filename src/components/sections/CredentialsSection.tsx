
"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

const credentials = [
  {
    number: "01",
    title: "Formação em Direito",
    description:
      "Graduada em Direito pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas).",
  },
  {
    number: "02",
    title: "Direito Médico e Bioética",
    description:
      "Pós-graduanda em Direito Médico e Bioética pela Fundação Milton Campos.",
  },
  {
    number: "03",
    title: "Advocacia preventiva",
    description:
      "Atuação voltada à orientação jurídica preventiva, à ética nas relações de saúde e à análise de documentos e procedimentos.",
  },
  {
    number: "04",
    title: "Registro profissional",
    description:
      "Inscrita na Ordem dos Advogados do Brasil — OAB/MG 242.585.",
  },
];

function DecorativeSculpture() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-[210px] -left-[220px] hidden h-[650px] w-[650px] opacity-35 xl:block"
    >
      <motion.div
        className="relative h-full w-full"
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: [0, 8, 0],
                y: [0, -15, 0],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute inset-[12%] rounded-full"
          style={{
            border: "1px solid rgba(155,128,80,0.35)",
            transform: "rotateX(70deg) rotateZ(-25deg)",
          }}
        />

        <div
          className="absolute inset-[20%] rounded-full"
          style={{
            border: "1px solid rgba(197,160,89,0.4)",
            transform: "rotateY(68deg) rotateZ(35deg)",
          }}
        />

        <div
          className="absolute inset-[27%] rounded-full"
          style={{
            border: "1px solid rgba(155,128,80,0.25)",
            transform: "rotateX(48deg) rotateY(35deg)",
          }}
        />

        <div
          className="absolute inset-[30%] rounded-full blur-[75px]"
          style={{
            background:
              "radial-gradient(circle, rgba(197,160,89,0.16), transparent 70%)",
          }}
        />
      </motion.div>
    </div>
  );
}

export default function CredentialsSection() {
  const reducedMotion = useReducedMotion();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${siteConfig.whatsappMessage}`;

  const reveal = (delay = 0) => ({
    initial: reducedMotion
      ? false
      : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reducedMotion ? 0 : 0.8,
      delay,
      ease,
    },
  });

  return (
    <section
      id="formacao"
      className="relative isolate overflow-hidden bg-[#F8F7F4] py-24 text-[#142E23] sm:py-28 lg:py-36"
    >
      {/* Iluminação ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[250px] -top-[250px] h-[800px] w-[800px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(197,160,89,0.1), transparent 70%)",
        }}
      />

      <DecorativeSculpture />

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-16 px-6 sm:px-12 lg:grid-cols-12 lg:gap-20 lg:px-16 xl:gap-24 xl:px-20">

        {/* LADO ESQUERDO — CONTEÚDO */}
        <div className="lg:col-span-7">

          <motion.h2
            {...reveal(0.05)}
            className="max-w-[680px] text-[clamp(2.5rem,3.8vw,4.4rem)] font-medium leading-[1.12] tracking-[-0.055em]"
          >
            Conhecimento que
            <span className="block">
              fundamenta cada
            </span>
            <span className="block text-[#9B8050]">
              orientação.
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.12)}
            className="mt-7 max-w-[550px] text-[15px] leading-[1.9] text-[#68756D] sm:text-[16px]"
          >
            Uma trajetória acadêmica construída com
            dedicação ao Direito e aprofundamento
            nas questões jurídicas que envolvem
            a prática médica e as relações de saúde.
          </motion.p>

          {/* Credenciais editoriais */}
          <div className="mt-12 max-w-[650px] border-t border-[#142E23]/15">
            {credentials.map((item, index) => (
              <motion.div
                key={item.number}
                {...reveal(0.12 + index * 0.08)}
                className="group grid grid-cols-[35px_1fr] gap-5 border-b border-[#142E23]/15 py-6 sm:grid-cols-[45px_1fr] sm:gap-7"
              >
                <span className="pt-1 text-[12px] font-medium text-[#A58C63]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-[17px] font-medium tracking-[-0.025em] text-[#142E23] transition-colors duration-300 group-hover:text-[#9B8050] sm:text-[19px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[510px] text-[14px] leading-[1.8] text-[#68756D] sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contato */}
          <motion.div
            {...reveal(0.4)}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[54px] items-center justify-center gap-7 rounded-full bg-[#142E23] px-7 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#244737] hover:shadow-[0_12px_30px_rgba(20,46,35,0.12)]"
            >
              Falar com a advogada

              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <span className="text-[12px] text-[#68756D]">
              {siteConfig.address}
            </span>
          </motion.div>
        </div>

        {/* LADO DIREITO — FOTOGRAFIA */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, x: 35 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reducedMotion ? 0 : 1,
            ease,
          }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto max-w-[530px]">

            {/* Moldura deslocada */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-5 bottom-5 left-5 rounded-[12px] border border-[#C5A059]/35 sm:-right-7 sm:-top-7 sm:bottom-7 sm:left-7"
            />

            {/* Fotografia original */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#E9E6DF] shadow-[0_30px_80px_rgba(20,46,35,0.12)]">
              <Image
                src="/images/bgcredentials.jpg"
                alt="Dra. Taís Rodrigues — Formação e credenciais"
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>

            {/* Informação discreta */}
            <div className="mt-7 flex items-center justify-between gap-4">
              <span className="text-[13px] font-medium text-[#142E23]">
                Taís Rodrigues
              </span>

              <span className="text-[12px] text-[#68756D]">
                {siteConfig.oab}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
