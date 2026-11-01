
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

function SculpturalElement() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[8%] left-0 z-0 hidden h-[350px] w-[350px] -translate-x-[42%] opacity-50 xl:block"
    >
      <motion.div
        className="relative h-full w-full"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -14, 0],
                rotate: [-5, 3, -5],
              }
        }
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute inset-[35px] rounded-full"
          style={{
            transform: "rotateX(68deg) rotateZ(-28deg)",
            border: "2px solid rgba(175,143,87,0.42)",
            boxShadow:
              "0 8px 28px rgba(147,114,49,0.08), inset 0 2px 12px rgba(197,160,89,0.12)",
          }}
        />

        <div
          className="absolute inset-[55px] rounded-full"
          style={{
            transform: "rotateY(65deg) rotateZ(32deg)",
            border: "2px solid rgba(197,160,89,0.45)",
            boxShadow: "0 0 25px rgba(197,160,89,0.08)",
          }}
        />

        <div
          className="absolute inset-[75px] rounded-full"
          style={{
            transform: "rotateX(45deg) rotateY(35deg)",
            border: "1px solid rgba(142,112,64,0.38)",
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 h-[115px] w-[115px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, rgba(255,250,238,0.8), rgba(197,160,89,0.12) 55%, rgba(142,112,64,0.04))",
            boxShadow:
              "inset -10px -12px 24px rgba(142,112,64,0.08), 0 15px 35px rgba(142,112,64,0.07)",
          }}
        />
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${siteConfig.whatsappMessage}`;

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.85,
      delay,
      ease,
    },
  });

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#F8F7F4] text-[#142E23]"
    >
      <div className="relative grid min-h-[900px] w-full grid-cols-1 sm:min-h-[960px] lg:min-h-[100svh] lg:grid-cols-[53%_47%]">

        {/* FOTO MOBILE */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#1A231E] lg:hidden">
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 1.04 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.4,
              ease,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/bghero.jpg"
              alt="Dra. Taís Rodrigues, advogada"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[25%_20%]"
            />
          </motion.div>

          {/* Gradiente concentrado na parte inferior */}
          <div
  className="pointer-events-none absolute inset-0 lg:hidden"
  style={{
    background:
      "linear-gradient(to top, rgba(7,21,15,0.96) 0%, rgba(7,21,15,0.85) 24%, rgba(11,27,20,0.52) 43%, rgba(11,27,20,0.08) 66%, transparent 85%)",
  }}
/>
        </div>

        {/* CONTEÚDO */}
        <div className="relative z-10 flex min-h-[900px] flex-col justify-end overflow-hidden px-6 pb-12 pt-[420px] sm:min-h-[960px] sm:px-12 sm:pt-[460px] lg:min-h-0 lg:justify-center lg:px-16 lg:pb-28 lg:pt-36 xl:px-24">
          <SculpturalElement />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 bottom-0 hidden h-[500px] w-[500px] rounded-full bg-[#D8C6A5]/10 blur-[100px] lg:block"
          />

          <div className="relative z-10 max-w-[620px] lg:translate-x-[45px]">
            <motion.h1
              {...fadeUp(0.2)}
              className="max-w-[600px] text-[clamp(2rem,7.2vw,2.65rem)] font-medium leading-[1.13] tracking-[-0.055em] text-white lg:text-[clamp(2.6rem,4vw,4.7rem)] lg:text-[#142E23]"
            >
              O cuidado com a
              <span className="block">
                medicina começa
              </span>
              <span className="block text-[#D6B67C] lg:text-[#9B8050]">
                pela prevenção.
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="mt-5 max-w-[460px] text-[14px] font-normal leading-[1.75] text-white/85 sm:text-[15px] lg:mt-8 lg:text-[15px] lg:leading-[1.9] lg:text-[#68756D] xl:text-[16px]"
            >
              Advocacia estratégica e preventiva em
              Direito Médico e Bioética, orientada
              pela ética, pelo diálogo e pela
              responsabilidade nas relações de saúde.
            </motion.p>

            <motion.div
              {...fadeUp(0.5)}
              className="mt-7 flex flex-wrap items-center gap-5 lg:mt-10 lg:gap-6"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[50px] items-center justify-center gap-9 rounded-full bg-[#C5A059] px-7 text-[13px] font-medium text-[#142E23] transition-all duration-300 hover:bg-[#D6B67C] lg:min-h-[54px] lg:bg-[#142E23] lg:text-white lg:hover:bg-[#244737]"
              >
                Solicitar atendimento

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#sobre"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-white/90 transition-colors hover:text-[#D6B67C] lg:text-[#425B4D] lg:hover:text-[#9B8050]"
              >
                Conheça minha trajetória

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.7)}
            className="relative z-10 mt-12 flex items-center gap-3 text-white/65 lg:absolute lg:bottom-10 lg:left-16 lg:mt-0 lg:text-[#849087] xl:left-24"
          >
            <ArrowDownRight size={17} strokeWidth={1.3} />

            <span className="text-[11px] tracking-[0.04em]">
              Entre a Bula e a Lei
            </span>
          </motion.div>
        </div>

        {/* FOTO DESKTOP — INALTERADA */}
        <div className="relative hidden min-h-[480px] overflow-hidden bg-[#E9E6DF] sm:min-h-[600px] lg:block lg:min-h-full">
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 1.04 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.4,
              ease,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/bghero.jpg"
              alt="Dra. Taís Rodrigues, advogada"
              fill
              priority
              sizes="47vw"
              className="object-cover object-[center_28%]"
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0B1B14]/35 via-transparent to-transparent" />

          <motion.div
            {...fadeUp(0.8)}
            className="absolute bottom-10 left-8 right-8 flex items-end justify-between border-t border-white/30 pt-5 text-white sm:left-12 sm:right-12"
          >
            <div>
              <p className="text-[15px] font-medium tracking-[-0.02em]">
                Taís Rodrigues
              </p>

              <p className="mt-1 text-[11px] text-white/75">
                Advocacia estratégica e preventiva
              </p>
            </div>

            <span className="text-[11px] text-white/75">
              OAB/MG 242.585
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
