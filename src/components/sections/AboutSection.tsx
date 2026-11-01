
"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function AmbientSculpture() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-[170px] top-[12%] hidden h-[540px] w-[540px] opacity-[0.42] xl:block 2xl:-right-[110px]"
    >
      <motion.div
        className="relative h-full w-full"
        animate={
          reducedMotion
            ? undefined
            : {
                rotate: [0, 12, 0],
                y: [0, -22, 0],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Halo luminoso */}
        <div
          className="absolute inset-[15%] rounded-full blur-[65px]"
          style={{
            background:
              "radial-gradient(circle, rgba(197,160,89,0.14), transparent 70%)",
          }}
        />

        {/* Anéis tridimensionais */}
        <div
          className="absolute inset-[12%] rounded-full"
          style={{
            border: "1px solid rgba(223,192,123,0.42)",
            transform: "rotateX(68deg) rotateZ(-35deg)",
            boxShadow:
              "0 0 35px rgba(197,160,89,0.06), inset 0 0 30px rgba(197,160,89,0.04)",
          }}
        />

        <div
          className="absolute inset-[18%] rounded-full"
          style={{
            border: "1.5px solid rgba(223,192,123,0.35)",
            transform: "rotateY(68deg) rotateZ(25deg)",
          }}
        />

        <div
          className="absolute inset-[24%] rounded-full"
          style={{
            border: "1px solid rgba(223,192,123,0.25)",
            transform: "rotateX(45deg) rotateY(40deg)",
          }}
        />

        {/* Núcleo translúcido */}
        <div
          className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, rgba(255,239,196,0.19), rgba(197,160,89,0.045) 55%, transparent 80%)",
            boxShadow:
              "inset -15px -18px 35px rgba(197,160,89,0.035), 0 0 60px rgba(197,160,89,0.05)",
          }}
        />
      </motion.div>
    </div>
  );
}

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ["0%", "0%"] : ["-3%", "3%"]
  );

  const reveal = (delay = 0) => ({
    initial: reducedMotion
      ? false
      : { opacity: 0, y: 28 },
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
      ref={sectionRef}
      id="sobre"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#142E23] py-24 text-[#F8F7F4] sm:py-28 lg:py-36"
    >
      {/* Iluminação ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[280px] top-[10%] h-[800px] w-[800px] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(96,124,96,0.16), transparent 70%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[250px] bottom-[-300px] h-[850px] w-[850px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(197,160,89,0.075), transparent 70%)",
        }}
      />

      {/* Textura sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 0.5px, transparent 0.5px)",
          backgroundSize: "7px 7px",
        }}
      />

      <AmbientSculpture />

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-16 px-6 sm:px-12 lg:grid-cols-12 lg:gap-16 lg:px-16 xl:gap-24 xl:px-20">

        {/* LADO ESQUERDO — FOTO */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, x: -35 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reducedMotion ? 0 : 1,
            ease,
          }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto max-w-[540px]">

            {/* Moldura arquitetônica */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 right-5 top-5 rounded-[14px] border border-[#C5A059]/40 sm:-bottom-7 sm:-left-7 sm:right-7 sm:top-7"
            />

            {/* Luz atrás da fotografia */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 rounded-full bg-[#C5A059]/10 blur-[85px]"
            />

            {/* Fotografia original */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#26382F] shadow-[0_35px_90px_rgba(0,0,0,0.24)]">
              <motion.div
                style={{ y: imageY }}
                className="absolute -inset-y-[4%] inset-x-0"
              >
                <Image
                  src="/images/bgabout.jpg"
                  alt="Dra. Taís Rodrigues em retrato profissional"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </div>

            {/* Identificação abaixo da foto */}
            <div className="relative mt-8 flex items-center justify-between gap-4">
              <span className="text-[13px] font-medium text-[#EAE8DF]">
                Taís Rodrigues
              </span>

              <span className="text-[12px] text-[#B6BEB4]">
                OAB/MG 242.585
              </span>
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO — CONTEÚDO */}
        <div className="relative lg:col-span-7">

          <motion.h2
            {...reveal(0.05)}
            className="max-w-[720px] text-[clamp(2.4rem,3.6vw,4.2rem)] font-medium leading-[1.13] tracking-[-0.05em]"
          >
            Muito prazer,
            <br />
            eu sou{" "}
            <span className="text-[#C5A059]">
              Taís Rodrigues.
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.12)}
            className="mt-7 max-w-[570px] text-[16px] leading-[1.85] text-[#D0D9D1]"
          >
            Acredito que uma advocacia responsável começa
            pela escuta, pelo conhecimento e pelo cuidado
            com as pessoas.
          </motion.p>

          <motion.div
            {...reveal(0.18)}
            className="mt-8 max-w-[590px] space-y-5 text-[15px] leading-[1.9] text-[#BFCBC2] sm:text-[16px]"
          >
            <p>
              Antes de falar sobre minha atuação, gosto de
              começar pelo que orienta minha vida:{" "}
              <strong className="font-medium text-[#F8F7F4]">
                Deus, família e trabalho.
              </strong>{" "}
              Exatamente nessa ordem.
            </p>

            <p>
              Sou graduada em Direito pela PUC Minas e
              carrego com orgulho a responsabilidade de
              ser a primeira advogada da minha família.
              Foi no Direito Médico que encontrei uma
              forma de unir minha profissão aos valores
              em que acredito.
            </p>

            <p>
              Atualmente, sou pós-graduanda em Direito
              Médico e Bioética pela Fundação Milton
              Campos, com atuação voltada à orientação
              jurídica preventiva de médicos e
              profissionais da saúde.
            </p>
          </motion.div>

          {/* História expansível */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                id={detailsId}
                key="history"
                initial={
                  reducedMotion
                    ? false
                    : { height: 0, opacity: 0 }
                }
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  ease,
                }}
                className="overflow-hidden"
              >
                <div className="max-w-[590px] space-y-5 pt-6 text-[15px] leading-[1.9] text-[#BFCBC2] sm:text-[16px]">
                  <p>
                    Meu papel não é ensinar medicina a quem
                    dedicou anos da própria vida a estudá-la.
                    É ajudar profissionais a reconhecer
                    vulnerabilidades jurídicas que nem sempre
                    são percebidas na rotina de atendimento.
                  </p>

                  <p>
                    Um prontuário, um termo de consentimento
                    ou um registro clínico podem precisar
                    ser compreendidos muito tempo depois
                    do atendimento, inclusive por pessoas
                    que não possuem formação médica.
                  </p>

                  <p>
                    Por isso, acredito em uma advocacia
                    preventiva que não se baseia no medo
                    ou na burocracia, mas na construção
                    de processos claros, informação
                    acessível e relações transparentes.
                  </p>

                  <p className="font-medium text-[#E8D0A2]">
                    O Direito Médico não está entre o
                    profissional e o paciente: ele está
                    ao lado dos dois.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expandir */}
          <motion.div {...reveal(0.22)} className="mt-9">
            <button
              type="button"
              onClick={() => setIsExpanded((value) => !value)}
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              className="group inline-flex cursor-pointer items-center gap-3 text-[13px] font-medium text-[#E0C18B] transition-colors duration-300 hover:text-[#F4DEB7]"
            >
              {isExpanded
                ? "Recolher minha história"
                : "Conheça minha trajetória completa"}

              <ChevronDown
                size={17}
                strokeWidth={1.6}
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </motion.div>

          {/* Formação acadêmica */}
          <motion.div
            {...reveal(0.25)}
            className="mt-12 grid max-w-[590px] gap-7 border-t border-white/15 pt-8 sm:grid-cols-2"
          >
            <div>
              <p className="text-[14px] font-medium text-[#F8F7F4]">
                PUC Minas
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#AEBDB2]">
                Graduação em Direito
              </p>
            </div>

            <div>
              <p className="text-[14px] font-medium text-[#F8F7F4]">
                Fundação Milton Campos
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#AEBDB2]">
                Pós-graduanda em Direito Médico
                e Bioética
              </p>
            </div>
          </motion.div>

          {/* Citação editorial */}
          <motion.div
            {...reveal(0.3)}
            className="relative mt-14 max-w-[590px] overflow-hidden rounded-[4px] border-l-2 border-[#C5A059]/65 bg-white/[0.035] px-7 py-7 sm:px-9"
          >
            <p className="text-[19px] font-medium leading-[1.6] tracking-[-0.025em] text-[#E8D0A2] sm:text-[21px]">
              “O Direito Médico não está entre o
              profissional e o paciente. Ele está
              ao lado dos dois.”
            </p>

            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="text-[12px] text-[#AEBDB2]">
                Taís Rodrigues
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
                className="text-[#C5A059]/60"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
