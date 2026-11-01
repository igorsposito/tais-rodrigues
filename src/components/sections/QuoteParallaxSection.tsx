"use client";

import Image from "next/image";
import RevealSection from "../animation/RevealSection";

export default function QuoteParallaxSection() {
  return (
    <section className="py-24 bg-brand-cream text-brand-green-dark relative overflow-hidden border-y border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LADO ESQUERDO: Manifesto e Citação */}
          <div className="lg:col-span-7 space-y-6">
            <RevealSection variant="fade-up">
              <span className="text-xs font-sans tracking-[0.25em] text-brand-gold-dark uppercase font-semibold">
                Filosofia Preventiva • Entre a Bula e a Lei
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-green-dark font-light leading-tight mt-3">
                "O Direito Médico não está entre o profissional e o paciente.{" "}
                <span className="highlight-span-dark border-b-2 border-brand-gold/60">
                  Ele está ao lado dos dois.
                </span>"
              </h2>
            </RevealSection>

            <RevealSection variant="fade-up" delay={0.2}>
              <p className="text-brand-green/80 font-sans text-base leading-relaxed font-light max-w-2xl">
                Não se trata de transformar a medicina em uma prática defensiva ou burocrática. Trata-se de construir processos transparentes onde informação, autonomia e responsabilidade caminhem juntas.
              </p>
              
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-brand-gold" />
                <span className="font-serif italic text-sm text-brand-green-dark/80">
                  Dra. Taís Rodrigues
                </span>
              </div>
            </RevealSection>
          </div>

          {/* LADO DIREITO: Retrato Sofisticado em Fundo Bege */}
          <div className="lg:col-span-5">
            <RevealSection variant="slide-right">
              <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 shadow-xl aspect-4/3 sm:aspect-square">
                <Image
                  src="/images/tais-about.jpg"
                  alt="Dra. Taís Rodrigues"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-green-dark/40 via-transparent to-transparent" />
              </div>
            </RevealSection>
          </div>

        </div>
      </div>
    </section>
  );
}