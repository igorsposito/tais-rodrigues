
"use client";

import { useId, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    question: "O que é a advocacia preventiva na área da saúde?",
    answer:
      "É uma atuação jurídica voltada à análise antecipada de situações, documentos e procedimentos que fazem parte da rotina de profissionais e estabelecimentos de saúde. O objetivo é oferecer orientação para decisões mais conscientes e para a organização das relações profissionais e com pacientes.",
  },
  {
    question: "Como funciona a elaboração de protocolos e documentos?",
    answer:
      "O trabalho começa pela compreensão das particularidades da atividade profissional ou da clínica. A partir dessa análise, podem ser elaborados ou revisados instrumentos como contratos, termos de consentimento livre e esclarecido e orientações documentais, conforme as necessidades identificadas.",
  },
  {
    question: "O atendimento também é realizado de forma online?",
    answer:
      "Sim. A Dra. Taís realiza atendimentos online para profissionais e estabelecimentos de saúde em todo o Brasil. O atendimento presencial também pode ser organizado mediante agendamento.",
  },
  {
    question:
      "Qual é a diferença entre a advocacia preventiva e a atuação em um processo?",
    answer:
      "A advocacia preventiva se concentra na orientação e na análise de questões jurídicas antes de um eventual conflito. Já a atuação contenciosa envolve a condução de demandas administrativas ou judiciais existentes. São formas distintas de atuação, e a orientação preventiva não elimina a possibilidade de questionamentos futuros.",
  },
  {
    question: "Preciso ter uma clínica para buscar orientação jurídica?",
    answer:
      "Não. Médicos e outros profissionais da saúde que atuam individualmente também podem buscar orientação sobre contratos, documentos, comunicação com pacientes e outras situações jurídicas relacionadas à atividade profissional.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reducedMotion = useReducedMotion();
  const accordionId = useId();

  const whatsappMessage = encodeURIComponent(
    "Olá, Dra. Taís! Vim pelo site e gostaria de esclarecer uma dúvida sobre orientação jurídica preventiva na área da saúde."
  );

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
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
      id="faq"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#F8F7F4] py-24 text-[#142E23] sm:py-28 lg:py-36"
    >
      {/* Iluminação ambiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[300px] -top-[300px] h-[850px] w-[850px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(197,160,89,0.1), transparent 70%)",
        }}
      />

      {/* Linhas arquitetônicas decorativas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[330px] -left-[240px] hidden h-[650px] w-[650px] rounded-full border border-[#C5A059]/15 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[250px] -left-[160px] hidden h-[490px] w-[490px] rounded-full border border-[#C5A059]/15 lg:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-14 px-6 sm:px-12 lg:grid-cols-12 lg:gap-20 lg:px-16 xl:px-20">

        {/* LADO ESQUERDO — APRESENTAÇÃO */}
        <motion.div
          {...reveal(0.05)}
          className="lg:col-span-5"
        >
          <div className="lg:sticky lg:top-32">
            <h2 className="max-w-[480px] text-[clamp(2.8rem,4.5vw,5.2rem)] font-medium leading-[1.08] tracking-[-0.055em]">
              Algumas dúvidas
              merecem{" "}
              <span className="text-[#9B8050]">
                boas respostas.
              </span>
            </h2>

            <p className="mt-7 max-w-[410px] text-[15px] leading-[1.9] text-[#65736A] sm:text-[16px]">
              Entenda melhor como a orientação jurídica
              preventiva se relaciona com a prática médica
              e com o cotidiano de clínicas e consultórios.
            </p>

            {/* Detalhe tipográfico */}
            <div className="mt-12 hidden items-center gap-5 lg:flex">
              <span
                aria-hidden="true"
                className="h-px w-16 bg-[#C5A059]/65"
              />
              <span className="text-[13px] font-medium text-[#9B8050]">
                Entre a Bula e a Lei
              </span>
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO — ACORDEÃO */}
        <div className="lg:col-span-7">
          <div className="border-t border-[#142E23]/20">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `${accordionId}-panel-${index}`;
              const buttonId = `${accordionId}-button-${index}`;

              return (
                <motion.div
                  key={faq.question}
                  {...reveal(0.08 + index * 0.055)}
                  className="border-b border-[#142E23]/20"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="group flex w-full cursor-pointer items-start justify-between gap-6 py-7 text-left sm:py-8"
                    >
                      <span
                        className={`max-w-[530px] text-[17px] font-medium leading-[1.5] tracking-[-0.025em] transition-colors duration-300 sm:text-[20px] ${
                          isOpen
                            ? "text-[#142E23]"
                            : "text-[#40564A] group-hover:text-[#142E23]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-[#142E23] bg-[#142E23] text-white"
                            : "border-[#142E23]/20 text-[#142E23] group-hover:border-[#142E23]/50"
                        }`}
                      >
                        <Plus
                          size={17}
                          strokeWidth={1.5}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        key="answer"
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
                          duration: reducedMotion ? 0 : 0.4,
                          ease,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[570px] pb-8 pr-12 text-[14px] leading-[1.95] text-[#68766D] sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CONTATO — INTEGRADO AO FAQ */}
          <motion.div
            {...reveal(0.2)}
            className="mt-12 flex flex-col gap-6 border-t border-[#C5A059]/45 pt-9 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-[19px] font-medium tracking-[-0.025em] text-[#142E23]">
                Sua dúvida não está aqui?
              </p>

              <p className="mt-2 max-w-[360px] text-[14px] leading-[1.7] text-[#68766D]">
                Entre em contato para obter informações
                sobre o atendimento jurídico.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-5 self-start rounded-full bg-[#142E23] px-6 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#244737] hover:shadow-[0_12px_30px_rgba(20,46,35,0.12)]"
            >
              Falar com a Dra. Taís

              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
