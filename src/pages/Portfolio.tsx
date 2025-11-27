// src/pages/Portfolio.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Code2 } from 'lucide-react';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('services') || {
  title: 'Portfolio - Biorigeneral Informatics',
  description: 'Scopri i nostri progetti e le competenze che guida il nostro successo',
  keywords: 'portfolio, progetti, web development, AI, chatbot',
  canonicalUrl: 'https://sito.bi/portfolio'
};

interface Skill {
  category: string;
  description: string;
  level: string;
  items: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  skills: string[];
  link?: string;
  github?: string;
  status: 'completed' | 'in-progress';
  featured?: boolean;
}

const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Skills data - Focus dell'azienda
  const skillsData: Skill[] = [
    {
      category: 'Frontend Development',
      description: 'Interfacce web moderne e responsive',
      level: 'Avanzato',
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js']
    },
    {
      category: 'AI & Machine Learning',
      description: 'Soluzioni intelligenti e automazioni',
      level: 'Specializzato',
      items: ['AI Agents', 'Chatbot', 'LLM Integration', 'RAG', 'OpenAI', 'Gemini']
    },
    {
      category: 'Backend & Database',
      description: 'Architetture scalabili e sicure',
      level: 'Avanzato',
      items: ['Node.js', 'PostgreSQL', 'Supabase', 'Firebase', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Workflow Automation',
      description: 'Automazione di processi aziendali',
      level: 'Specializzato',
      items: ['N8n', 'Make.com', 'Zapier', 'Custom Workflows', 'Integration', 'API Development']
    },
    {
      category: 'Mobile Development',
      description: 'App native e cross-platform',
      level: 'Professionista',
      items: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
    },
    {
      category: 'DevOps & Cloud',
      description: 'Hosting, deployment e infrastrutture',
      level: 'Avanzato',
      items: ['Vercel', 'AWS', 'Docker', 'CI/CD', 'Git', 'Linux']
    },
  ];

  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'SegretarioAI Telegram',
      description: 'Assistente virtuale intelligente su Telegram con workflow N8n avanzati',
      longDescription: 'Il primo assistente virtuale italiano che rivoluziona la gestione delle comunicazioni aziendali. Integrato con workflow N8n avanzati, automatizza conversazioni complesse e gestisce appuntamenti intelligenti. Disponibile 24/7, riduce l\'80% del carico di lavoro manuale.',
      image: 'https://i.imgur.com/BJRduao.jpeg',
      skills: ['AI Agents', 'N8n', 'Telegram API', 'GPT-4', 'Python'],
      status: 'in-progress',
      featured: true,
      link: 'https://sito.bi/services'
    },
    {
      id: 2,
      title: 'DM ChatBot Instagram',
      description: 'Assistente AI che trasforma i DM Instagram in canale di vendita automatizzato',
      longDescription: 'Soluzione completa per automatizzare le risposte sui DM Instagram. Integra RAG, memoria conversazionale e integrazioni con CRM. Completamente personalizzabile per rispecchiare il brand.',
      image: 'https://images.unsplash.com/photo-1611738407552-46550d63f3d6?w=800',
      skills: ['Meta API', 'N8n', 'RAG', 'Supabase', 'OpenAI', 'React'],
      status: 'completed',
      featured: true
    },
    {
      id: 3,
      title: 'DM ChatBot WhatsApp',
      description: 'Gestione autonoma dei contatti WhatsApp con AI',
      longDescription: 'Sistema intelligente per gestire conversazioni e ordinazioni tramite WhatsApp. Architettura centralizzata con isolamento dati tramite RLS PostgreSQL. GDPR compliant con backup automatici.',
      image: 'https://images.unsplash.com/photo-1597444302219-add64541d25e?w=800',
      skills: ['Meta Cloud API', 'WhatsApp Business', 'N8n', 'PostgreSQL', 'AI Integration'],
      status: 'completed',
      featured: true
    },
    {
      id: 4,
      title: 'WordPress AutoBlog AI',
      description: 'Generatore AI di articoli WordPress pronti per la pubblicazione',
      longDescription: 'Sistema automatico che genera contenuti SEO-optimized per WordPress. Genera 3+ articoli per volta con immagini generate da DALL-E 3. Interfaccia dedicata per la gestione completa.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      skills: ['GPT-4', 'DALL-E 3', 'WordPress API', 'Node.js', 'React', 'Python'],
      status: 'in-progress',
      featured: false
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      description: 'Piattaforma di e-commerce moderna con analytics avanzati',
      longDescription: 'Sviluppo completo di una piattaforma e-commerce scalabile con integrazione pagamenti, gestione inventory e dashboard analytics in tempo reale. Supporto multi-valuta e multi-lingua.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      skills: ['React', 'Node.js', 'Stripe', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
      status: 'completed',
      featured: false
    },
    {
      id: 6,
      title: 'SaaS Analytics Dashboard',
      description: 'Dashboard analytics per monitoraggio dati in tempo reale',
      longDescription: 'Applicazione SaaS con dashboard completo per visualizzazione e analisi dati. Real-time updates, export CSV, team collaboration features e custom report builder.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      skills: ['React', 'TypeScript', 'Recharts', 'Supabase', 'WebSockets', 'PostgreSQL'],
      status: 'completed',
      featured: false
    },
  ];

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
      />
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-50"></div>
      </div>

      <div className="min-h-screen pt-28 pb-16 relative">
        
        {/* ===== HERO SECTION ===== */}
        <section className="pt-20 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block px-3 md:px-4 py-1 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
                <span className="text-violet-500">
                  Portfolio & Expertise
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight font-semibold">
                <span className="block text-white">I nostri progetti e la</span>
                <span className="block text-[#3ECF8E]">nostra visione dell'innovazione.</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Scopri come trasformiamo le idee in soluzioni concrete. Dalla consulenza iniziale all'implementazione finale, 
                il nostro team di esperti lavora per offrire risultati che superano le aspettative.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <a 
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3ECF8E] to-[#3ECF8E]/80 hover:from-[#3ECF8E]/90 hover:to-[#3ECF8E]/70 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  Esplora i Progetti
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== SKILLS TABLE SECTION ===== */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                <span className="block text-white">Le nostre</span>
                <span className="block text-[#3ECF8E]">aree di specializzazione.</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Abbiamo sviluppato competenze profonde in diverse aree tecnologiche per offrire soluzioni complete e innovative.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 p-8 rounded-2xl border border-white/20 hover:border-[#3ECF8E]/50 transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#3ECF8E]/20 flex items-center justify-center mb-4 text-[#3ECF8E] group-hover:bg-[#3ECF8E]/30 transition-all duration-300 group-hover:scale-110">
                      <Code2 className="w-6 h-6" />
                    </div>

                    {/* Header */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                      {skill.category}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {skill.description}
                    </p>

                    {/* Level Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-[#3ECF8E]/20 border border-[#3ECF8E]/30 text-[#3ECF8E] text-xs font-semibold mb-4">
                      {skill.level}
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className="px-3 py-1 text-xs rounded-lg bg-white/10 text-gray-300 border border-white/20 group-hover:border-[#3ECF8E]/30 group-hover:bg-[#3ECF8E]/10 transition-all duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROJECTS SECTION ===== */}
        <section id="projects" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                <span className="block text-white">Progetti</span>
                <span className="block text-[#3ECF8E]">che hanno fatto la differenza.</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ecco una selezione dei nostri progetti più significativi che dimostrano le nostre capacità e il nostro impegno verso l'eccellenza.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 rounded-2xl border border-white/20 hover:border-[#3ECF8E]/50 transition-all duration-500 overflow-hidden">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      
                      {/* Image Section */}
                      <div className="lg:col-span-1 h-64 lg:h-full min-h-64 overflow-hidden relative">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col">
                        
                        {/* Header */}
                        <div className="mb-6">
                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="inline-block mb-3">
                              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold uppercase tracking-wide">
                                ✨ Progetto In Evidenza
                              </span>
                            </div>
                          )}

                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-[#3ECF8E] transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-lg mb-2">
                            {project.description}
                          </p>
                        </div>

                        {/* Status Badge */}
                        <div className="mb-6">
                          <span className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${
                            project.status === 'completed' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}>
                            {project.status === 'completed' ? '✓ Completato' : '⚙️ In Progresso'}
                          </span>
                        </div>

                        {/* Expanded Content */}
                        {expandedProject === project.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 pb-6 border-b border-white/10"
                          >
                            <p className="text-gray-300 leading-relaxed mb-4">
                              {project.longDescription}
                            </p>
                          </motion.div>
                        )}

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                          {project.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-3 py-1 text-xs rounded-lg bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 group-hover:bg-[#3ECF8E]/30 transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 hover:bg-[#3ECF8E]/30 transition-all duration-300 font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Visita Progetto
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </a>
                          )}
                          <div className="flex-grow"></div>
                          <span className="text-sm text-gray-400 flex items-center">
                            {expandedProject === project.id ? '△ Riduci dettagli' : '▽ Vedi dettagli'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
                <span className="block text-white">Pronto per il prossimo</span>
                <span className="block text-[#3ECF8E]">progetto straordinario?</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Se vuoi trasformare la tua visione in realtà con le nostre competenze, contattaci oggi e discutiamo come possiamo aiutarti.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3ECF8E] to-[#3ECF8E]/80 hover:from-[#3ECF8E]/90 hover:to-[#3ECF8E]/70 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  Inizia una Conversazione
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <a 
                  href="/services" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Scopri i Nostri Servizi
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
