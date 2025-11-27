// src/pages/Portfolio.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      images: [
        'https://images.unsplash.com/photo-1615232723945-ce0e188a2d60?w=400',
        'https://images.unsplash.com/photo-1578642181183-c6c71f0d6197?w=400',
        'https://images.unsplash.com/photo-1611987620811-f6ef09e95e9f?w=400',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1611738407552-46550d63f3d6?w=400',
        'https://images.unsplash.com/photo-1611739663281-cd8f5a30fe74?w=400',
        'https://images.unsplash.com/photo-1593642632505-06c6d665c513?w=400',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1597444302219-add64541d25e?w=400',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
        'https://images.unsplash.com/photo-1611692035589-3d6e59c5259e?w=400',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
        'https://images.unsplash.com/photo-1516321318423-f06e85e504b3?w=400',
        'https://images.unsplash.com/photo-1455849318169-8214ec3bfe5e?w=400',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
        'https://images.unsplash.com/photo-1563013544-824ae1c83920?w=400',
      ],
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
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
        'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=400',
        'https://images.unsplash.com/photo-1590080876000-cd6ba6a24745?w=400',
      ],
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

            {/* Skills Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 rounded-2xl border border-white/20 overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 md:p-8 bg-gradient-to-r from-[#3ECF8E]/20 via-transparent to-transparent border-b border-white/10">
                  <div className="col-span-1">
                    <h3 className="text-sm font-bold text-[#3ECF8E] uppercase tracking-wider">Categoria</h3>
                  </div>
                  <div className="col-span-1 hidden md:block">
                    <h3 className="text-sm font-bold text-[#3ECF8E] uppercase tracking-wider">Descrizione</h3>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-sm font-bold text-[#3ECF8E] uppercase tracking-wider">Livello</h3>
                  </div>
                  <div className="col-span-1">
                    <h3 className="text-sm font-bold text-[#3ECF8E] uppercase tracking-wider">Tecnologie</h3>
                  </div>
                </div>

                {/* Table Rows */}
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 md:p-8 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors duration-300 group"
                  >
                    {/* Categoria */}
                    <div className="col-span-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#3ECF8E]/20 flex items-center justify-center text-[#3ECF8E] group-hover:bg-[#3ECF8E]/30 transition-all duration-300">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-white text-sm md:text-base">{skill.category}</span>
                      </div>
                    </div>

                    {/* Descrizione (nascosto su mobile) */}
                    <div className="col-span-1 hidden md:block">
                      <span className="text-gray-400 text-sm line-clamp-2">{skill.description}</span>
                    </div>

                    {/* Livello */}
                    <div className="col-span-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#3ECF8E]/20 border border-[#3ECF8E]/30 text-[#3ECF8E] text-xs font-semibold">
                        {skill.level}
                      </span>
                    </div>

                    {/* Tecnologie */}
                    <div className="col-span-1">
                      <div className="flex flex-wrap gap-1.5">
                        {skill.items.slice(0, 3).map((item, itemIndex) => (
                          <span 
                            key={itemIndex}
                            className="px-2 py-1 text-xs rounded bg-white/10 text-gray-300 border border-white/20 group-hover:border-[#3ECF8E]/30 group-hover:bg-[#3ECF8E]/10 transition-all duration-300 whitespace-nowrap"
                          >
                            {item}
                          </span>
                        ))}
                        {skill.items.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 font-semibold">
                            +{skill.items.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <div className="max-w-6xl mx-auto space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 rounded-2xl border border-white/20 hover:border-[#3ECF8E]/50 transition-all duration-500 overflow-hidden">
                    
                    {/* Main Cover Image */}
                    <div className="relative h-80 overflow-hidden cursor-pointer" onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(project.image);
                    }}>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium text-center">Clicca per ingrandire</p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-10">
                      
                      {/* Header with Badge */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-grow">
                          {project.featured && (
                            <div className="inline-block mb-3">
                              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold uppercase tracking-wide">
                                ✨ In Evidenza
                              </span>
                            </div>
                          )}
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-[#3ECF8E] transition-colors duration-300">
                            {project.title}
                          </h3>
                        </div>
                        <span className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap flex-shrink-0 ${
                          project.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {project.status === 'completed' ? '✓ Completato' : '⚙️ In Progresso'}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Expandable Long Description */}
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10"
                        >
                          <p className="text-gray-300 leading-relaxed">
                            {project.longDescription}
                          </p>
                        </motion.div>
                      )}

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 text-xs rounded-lg bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 group-hover:bg-[#3ECF8E]/30 transition-all duration-300 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Gallery Thumbnails */}
                      {project.images && project.images.length > 0 && (
                        <div className="pt-6 border-t border-white/10">
                          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Galleria del progetto</p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {project.images.map((image, imgIndex) => (
                              <motion.button
                                key={imgIndex}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedImage(image)}
                                className="relative h-24 rounded-lg overflow-hidden border border-white/20 hover:border-[#3ECF8E]/50 transition-all duration-300 group/img"
                              >
                                <img 
                                  src={image}
                                  alt={`${project.title} - ${imgIndex + 1}`}
                                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                  <div className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Expand/Collapse Toggle */}
                      <div className="mt-6 pt-6 border-t border-white/10 text-center">
                        <button
                          onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                          className="text-sm text-gray-400 hover:text-[#3ECF8E] transition-colors duration-300 font-medium"
                        >
                          {expandedProject === project.id ? '▲ Riduci dettagli' : '▼ Mostra dettagli completi'}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-screen flex items-center justify-center"
            >
              <img 
                src={selectedImage}
                alt="Immagine in evidenza"
                className="max-w-full max-h-screen object-contain rounded-xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-all duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}

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
