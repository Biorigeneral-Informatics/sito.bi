// src/pages/About.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Target, Users, Zap } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import SEO from '../components/SEO';

const About = () => {
  const teamMembers = [
    {
      name: 'Federico Zizi',
      role: 'Co-founder & CTO',
      description: 'Visione strategica e leadership tecnologica. Federico guida la trasformazione digitale e l\'adozione dell\'IA in Biorigeneral, definendo il roadmap futuro e le strategie di crescita.',
      image: 'https://i.ibb.co/xqRrdJJK/1744716119181.jpg',
      email: 'federico@biorigeneral.com',
      linkedin: 'https://www.linkedin.com/in/federico-zizi-55942230a/',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Alessandro Miri',
      role: 'Co-founder & Full Stack Developer',
      description: 'Eccellenza tecnica e architettura software. Alessandro trasforma le visioni in realtà costruendo sistemi scalabili, performanti e innovativi che risolvono le sfide più complesse dei nostri clienti.',
      image: 'https://i.ibb.co/gMjvPb4Z/ale1-Copia.png',
      email: 'alessandro@biorigeneral.com',
      linkedin: 'https://www.linkedin.com/in/alessandro-miri-18569a35b/',
      featured: true,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Davide Bottino',
      role: 'Marketing & Growth Strategist',
      description: 'Davide è il nostro consulente esterno, nonché esperto di crescita e posizionamento, con oltre 20 anni di esperienza nel B2B e nel marketing digitale.',
      image: 'https://i.ibb.co/Zp7kMhPg/davide.jpg',
      email: 'davide@biorigeneral.com',
      linkedin: 'https://www.linkedin.com/in/davidebottino/',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Mimma Centorame',
      role: 'Operations & Administration',
      description: 'Oltre 30 anni di esperienza nella gestione operativa e amministrativa, egli assicura che le operazioni quotidiane di Biorigeneral siano efficienti.',
      image: 'https://i.ibb.co/wFNRH77y/foto-profilo-quadrato-mimma-1024x1024.jpg',
      email: 'mimma@biorigeneral.com',
      linkedin: null,
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
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
                L'azienda
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 leading-tight">
              <span className="block text-primary font-semibold">Chi Siamo</span>
              <motion.span
                className="block font-semibold text-accent mt-1 md:mt-2"
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
                  L'azienda.
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

      {/* Core Values Section - Minimalist Design coherente al sito */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <div className="inline-block px-3 md:px-4 py-1.5 rounded-full glass border border-accent/30 text-xs md:text-sm font-medium mb-4 text-accent">
                I Fondamenti
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="block text-primary">I Nostri Valori</span>
              </h2>
              <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
                Principi che guidano ogni nostra decisione e relazione con i clienti
              </p>
            </div>
          </ScrollAnimation>

          {/* Values Grid - Minimal Glass Design */}
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative"
                >
                  {/* Glass card - minimalist */}
                  <div className="relative h-full glass p-6 md:p-8 rounded-2xl border border-white/10 group-hover:border-accent/30 transition-all duration-300 backdrop-blur-sm flex flex-col">
                    {/* Icon - small and clean with color */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                      {value.icon}
                    </div>

                    {/* Title with color */}
                    <h3 className={`text-lg md:text-xl font-semibold mb-3 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary text-sm md:text-base leading-relaxed flex-grow">
                      {value.description}
                    </p>

                    {/* Bottom accent line on hover */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 bg-accent mt-6 rounded-full"
                    />
                  </div>

                  {/* Subtle glow on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-accent rounded-2xl blur-xl -z-10"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Main */}
      {/* Team Section - Completely Redesigned */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-24">
              <div className="inline-block px-3 md:px-4 py-1.5 rounded-full glass border border-accent/30 text-xs md:text-sm font-medium mb-4 text-accent">
                Il team di Biorigeneral
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="block text-primary">Il Nostro Team</span>
              </h2>
              <p className="text-secondary max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                Alessandro e Federico guidano Biorigeneral con visione e passione. Attorno a loro, un team di esperti specializzati che portano competenze uniche in ogni ambito: dalla tecnologia al design, dal marketing alle operazioni. Insieme, trasformiamo le idee in realtà.
              </p>
            </div>
          </ScrollAnimation>

          {/* Fondatori - Featured Section */}
          <div className="mb-28">
            
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {teamMembers.slice(0, 2).map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Shine effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-accent rounded-2xl blur-2xl -z-10"
                  />
                  
                  <div className="relative glass p-6 md:p-8 rounded-2xl border border-accent/30 group-hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex flex-col h-full">
                      {/* Image */}
                      <div className="mb-6 relative overflow-hidden rounded-xl h-64 md:h-72">
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`w-full h-full object-cover ${member.name === 'Alessandro Miri' ? 'object-top' : ''} group-hover:scale-105 transition-transform duration-300`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-accent text-sm md:text-base font-semibold mb-4">
                        {member.role}
                      </p>
                      <p className="text-secondary text-sm md:text-base leading-relaxed mb-6 flex-grow">
                        {member.description}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex gap-2 pt-4 border-t border-white/5">
                        {member.email && (
                          <Link
                            to="/contact"
                            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all text-sm"
                            title="Contatti"
                          >
                            ✉
                          </Link>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all text-xs font-bold"
                            title="LinkedIn"
                          >
                            in
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Specializzato - Secondary Section */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Collaboratori <span className="text-white/60">Specializzati</span>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.slice(2).map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.15 }}
                  className="relative group"
                >
                  <div className="relative glass p-6 md:p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex flex-col h-full">
                      {/* Image */}
                      <div className="mb-6 relative overflow-hidden rounded-xl h-56 md:h-64">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-secondary/80 text-xs md:text-sm font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-secondary text-sm leading-relaxed flex-grow">
                        {member.description}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex gap-2 pt-4 border-t border-white/5">
                        {member.email && (
                          <Link
                            to="/contact"
                            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all text-sm"
                            title="Contatti"
                          >
                            ✉
                          </Link>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all text-xs font-bold"
                            title="LinkedIn"
                          >
                            in
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <ScrollAnimation>
            <div className="glass p-10 md:p-16 rounded-2xl border border-accent/30 max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto a trasformare il tuo business?
              </h3>
              <p className="text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Scopri come Biorigeneral può aiutarti a raggiungere i tuoi obiettivi con soluzioni innovative e strategiche.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="glass px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 border border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
                >
                  Contattaci
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/services"
                  className="glass px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-glass-secondary border border-secondary hover:bg-glass-hover hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  Scopri i Servizi
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default About;
