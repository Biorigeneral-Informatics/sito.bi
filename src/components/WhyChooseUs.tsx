import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Code, Rocket, Handshake } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

interface Reason {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const WhyChooseUs: React.FC = () => {
  const reasons: Reason[] = useMemo(() => [
    {
      id: 1,
      icon: <Users size={32} />,
      title: 'Team Giovane e Dinamico',
      description: 'Un team animato dalla voglia di innovare e creare valore reale per i nostri clienti',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: <Zap size={32} />,
      title: 'Expertise in n8n',
      description: 'Competenza specializzata nella costruzione di agenti AI e workflow automatizzati ad alta efficienza',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      icon: <Code size={32} />,
      title: 'Software Engineering Moderno',
      description: 'Approccio AI-driven con codice snello, best practices aggiornate e standard enterprise',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      icon: <Rocket size={32} />,
      title: 'Modello Agile & Innovativo',
      description: 'Business model fondato su prototipazione rapida e uso strategico dell\'AI per accelerare i tempi',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      icon: <Handshake size={32} />,
      title: 'Consulenza Integrata',
      description: 'Integrazione diretta della nostra expertise nella tua azienda con supporto continuativo',
      color: 'from-indigo-500 to-purple-500',
    },
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
              <span className="text-green-500">La Nostra Visione</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
              <span className="block text-primary">Perché scegliere noi</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Siamo un team di sviluppatori moderni, appassionati di innovazione e dediti a creare soluzioni software di eccellenza. La nostra missione è trasformare le tue idee in prodotti digitali concreti, mantenendo sempre il focus su qualità, performance e scalabilità.
                Dalla consulenza strategica allo sviluppo custom, dai chatbot intelligenti alle integrazioni complesse: puntiamo a diventare il tuo partner tecnologico di fiducia, capace di evolvere insieme alle tue esigenze.
            </p>
          </div>
        </ScrollAnimation>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          {/* Vertical line - Su mobile a sinistra, su desktop centrata */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-cyan-500/50 rounded-full" />

          {/* Timeline Container */}
          <div className="space-y-8 md:space-y-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-6 md:gap-8 items-stretch ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center md:justify-center`}
              >
                {/* Mobile layout: linea a sinistra con circle e card a destra */}
                <div className="flex gap-6 flex-1 md:hidden">
                  {/* Circle per mobile */}
                  <div className="flex-shrink-0 relative z-10 flex items-start justify-center pt-1">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-xl`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  {/* Content Card per mobile */}
                  <div className="flex-1">
                    <div className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          {reason.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {reason.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-white text-base leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop layout: alternato con circle al centro */}
                <div className="hidden md:flex gap-6 md:gap-8 items-center w-full justify-center">
                  {/* Conditional rendering per alternare posizione */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Card a sinistra per elementi pari */}
                      <div className="flex-1 w-1/2">
                        <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg`}
                            >
                              {reason.icon}
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-white">
                                {reason.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-white text-base md:text-lg leading-relaxed">
                            {reason.description}
                          </p>
                        </div>
                      </div>

                      {/* Center circle */}
                      <div className="flex-shrink-0 relative z-10 flex items-center justify-center">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-xl transition-transform hover:scale-110 duration-300`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>

                      {/* Empty space a destra */}
                      <div className="flex-1 w-1/2" />
                    </>
                  ) : (
                    <>
                      {/* Empty space a sinistra */}
                      <div className="flex-1 w-1/2" />

                      {/* Center circle */}
                      <div className="flex-shrink-0 relative z-10 flex items-center justify-center">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-xl transition-transform hover:scale-110 duration-300`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>

                      {/* Card a destra per elementi dispari */}
                      <div className="flex-1 w-1/2">
                        <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg`}
                            >
                              {reason.icon}
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-white">
                                {reason.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-white text-base md:text-lg leading-relaxed">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <ScrollAnimation animation="slideUp" delay={0.5}>
          <div className="mt-20 md:mt-28 text-center">
            <div className="inline-block glass p-8 md:p-12 rounded-2xl border border-white/10 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto a trasformare la tua visione?
              </h3>
              <p className="text-white mb-6 text-lg">
                Contattaci oggi stesso e scopri come possiamo portare la tua azienda al prossimo livello.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Contattaci Ora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WhyChooseUs;
