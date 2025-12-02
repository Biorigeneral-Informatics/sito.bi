// src/pages/About.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Target, Users, Zap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import SEO from '../components/SEO';
import PageSection from '../components/PageSection';
import TeamMemberCard from '../components/TeamMemberCard';

const About = () => {
  const teamMembers = [
    {
      name: 'Alessandro',
      role: 'Co-founder & Full Stack Developer',
      description: 'Architetto di soluzioni innovative. Trasforma idee complesse in sistemi scalabili e performanti.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
      email: 'alessandro@biorigeneral.com',
      linkedin: 'https://linkedin.com/in/alessandro',
      github: 'https://github.com/alessandro',
      featured: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Federico',
      role: 'Co-founder & AI Strategist',
      description: 'Visionario della tecnologia. Guida la strategia AI e definisce il futuro di Biorigeneral.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop',
      email: 'federico@biorigeneral.com',
      linkedin: 'https://linkedin.com/in/federico',
      github: 'https://github.com/federico',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Davide Bottino',
      role: 'Marketing & Growth Strategist',
      description: 'Esperto di crescita e posizionamento. Amplifica la voce di Biorigeneral nel mercato.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop',
      email: 'davide@biorigeneral.com',
      linkedin: 'https://linkedin.com/in/davide',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Mimma Centorame',
      role: 'Operations & Administration',
      description: 'Garantisce efficienza operativa. Mantiene i processi fluidi e l\'organizzazione solida.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
      email: 'mimma@biorigeneral.com',
      linkedin: 'https://linkedin.com/in/mimma',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovazione',
      description: 'Spingiamo i confini della tecnologia per creare soluzioni futuristiche',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Eccellenza',
      description: 'Inseguiamo la qualità in ogni aspetto del nostro lavoro',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborazione',
      description: 'Crediamo nella forza del lavoro di squadra e del dialogo aperto',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Impatto',
      description: 'Vogliamo creare valore reale e duraturo per i nostri clienti',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <>
      <SEO
        title="Chi Siamo - Biorigeneral Informatics"
        description="Scopri il team di Biorigeneral Informatics. Conosci Alessandro, Federico, Davide e Mimma che guidano l'innovazione tecnologica."
        keywords="team, chi siamo, biorigeneral, alessandro, federico, founder"
        canonicalUrl="https://www.biorigeneralinformatics.com/about"
      />

      {/* Background gradients */}
      <ScrollGradient
        colorStart="rgba(79, 70, 229, 0.3)"
        colorEnd="rgba(139, 92, 246, 0.3)"
      />
      <ScrollGradient
        colorStart="rgba(45, 212, 191, 0.25)"
        colorEnd="rgba(16, 185, 129, 0.2)"
        reverse={true}
        className="opacity-80"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/10"
            >
              <span className="text-accent text-sm font-medium">
                Conosci il nostro team
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 md:mb-8 leading-tight">
              <span className="block text-primary font-semibold">Chi Siamo</span>
              <motion.span
                className="block font-semibold text-accent mt-2 md:mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{
                    duration: 2.5,
                    delay: 1,
                    ease: 'easeOut',
                  }}
                  className="inline-block overflow-hidden whitespace-nowrap"
                >
                  Il team di Biorigeneral.
                </motion.span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-lg md:text-xl text-secondary mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              Siamo un team giovane, dinamico e appassionato di innovazione. Dalla consulenza strategica allo sviluppo
              software, dalla progettazione di agenti AI alle automazioni avanzate: ogni membro del nostro team porta
              competenze specializzate e dedizione verso l'eccellenza.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 border border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
              >
                Contattaci
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/"
                className="px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
              >
                Torna alla Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - RIMOSSO */}

      {/* Core Values Section - Redesigned */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4 text-green-400">
                Fondamenti
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                <span className="block text-primary">I Nostri Valori</span>
                <span className="block text-accent">Che guidano ogni decisione</span>
              </h2>
            </div>
          </ScrollAnimation>

          {/* Interactive Values Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  {/* Animated background blob */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 blur-3xl rounded-3xl group-hover:opacity-15 transition-opacity duration-500`}
                  />

                  {/* Card content */}
                  <div className="relative glass p-8 md:p-10 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-xl h-full flex flex-col">
                    {/* Icon with animation */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-xl`}
                    >
                      {value.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-secondary text-base leading-relaxed flex-grow mb-6">
                      {value.description}
                    </p>

                    {/* Animated bottom accent */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                      className={`h-1 bg-gradient-to-r ${value.color} rounded-full mt-auto`}
                    />
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 blur-xl rounded-2xl -z-10`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Main */}
      <PageSection
        title="Il Nostro Team"
        subtitle="Guidati dai co-founder"
        description="Alessandro e Federico fondano e guidano Biorigeneral. Insieme ai nostri collaboratori esterni specializzati, creiamo soluzioni software di eccellenza."
        badge="Il Cuore dell'Azienda"
        badgeColor="text-purple-400"
        layout="centered"
      >
        {/* Fondatori - In primo piano */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent flex-grow" />
            <h3 className="text-xl md:text-2xl font-bold text-white mx-6 whitespace-nowrap">
              I <span className="text-accent">Fondatori</span>
            </h3>
            <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent flex-grow" />
          </div>
          
          <p className="text-center text-secondary mb-12 max-w-2xl mx-auto text-lg">
            Alessandro e Federico sono i proprietari e la visione dietro Biorigeneral Informatics. Guidano con passione l'innovazione tecnologica e la crescita dell'azienda.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.slice(0, 2).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative group">
                  {/* Badge - Proprietario */}
                  <div className="absolute top-4 right-4 z-20 bg-accent text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Proprietario
                  </div>
                  <TeamMemberCard {...member} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Collaboratori */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent flex-grow" />
            <h3 className="text-xl md:text-2xl font-bold text-white mx-6 whitespace-nowrap">
              Collaboratori <span className="text-white/60">Specializzati</span>
            </h3>
            <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent flex-grow" />
          </div>

          <p className="text-center text-secondary/80 mb-12 max-w-2xl mx-auto text-base">
            Esperti esterni che portano specializzazione in marketing e operations, supportando la crescita di Biorigeneral.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto opacity-90">
            {teamMembers.slice(2).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              >
                <div className="relative group">
                  {/* Badge - Collaboratore */}
                  <div className="absolute top-4 right-4 z-20 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase border border-white/30">
                    Collaboratore
                  </div>
                  <TeamMemberCard {...member} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <ScrollAnimation>
            <div className="glass p-8 md:p-12 rounded-2xl border border-white/10 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto a collaborare con noi?
              </h3>
              <p className="text-secondary mb-6 text-lg">
                Se condividi la nostra visione e vuoi trasformare il tuo business, siamo qui per aiutarti.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-accent/80 text-black font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Contattaci Ora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default About;
