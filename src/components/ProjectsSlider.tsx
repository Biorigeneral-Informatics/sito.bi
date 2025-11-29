// src/components/ProjectsSlider.tsx
import { useState, useEffect, useRef, useMemo, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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

// Projects data - Moved outside component to prevent recreation
const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Biorigeneral Informatics - AI Agency',
    description: 'Agenzia orientata allo sviluppo di asset digitali intelligenti basati sull\'uso produttivo dell\'intelligenza artificiale.',
    longDescription: 'Co-fondatore di un\'agenzia specializzata in sviluppo software e automazioni intelligenti. Focalizzata su progettazione di agenti AI, automazioni avanzate con n8n, consulenza per integrazione AI in aziende B2B, prototipazione rapida, ottimizzazione di flussi di lavoro e soluzioni per il settore Health Care.',
    image: 'https://i.ibb.co/jkhP2G9f/about-us-coworking1.jpg',
    images: [
      'https://i.ibb.co/nMmVPRQR/bi2.png',
      'https://i.ibb.co/nMZJP2GC/bi3.png',
      'https://i.ibb.co/2YLGbfv1/bi4.png',
    ],
    skills: ['AI Agents', 'n8n', 'Software Development', 'Business Consulting', 'Healthcare Tech'],
    status: 'completed',
    featured: true,
  },
  {
    id: 2,
    title: 'YouTube Content Creator',
    description: 'Gestione e sviluppo di un canale YouTube con migliaia di iscritti, creando contenuti divulgativi, tecnici e creativi.',
    longDescription: 'Sviluppo di strategie di content marketing, gestione dell\'engagement, analisi delle performance e ottimizzazione dei contenuti, costruzione di community e personal branding digitale. Curata personalmente scripting, registrazione, editing e strategie di crescita organica.',
    image: 'https://i.ibb.co/TqPQ7Zh0/yt1.png',
    images: [
      'https://i.ibb.co/3YvPhCr1/yt2.png',
      'https://i.ibb.co/2YkKd4BS/yt3.png',
      'https://i.ibb.co/bR71wCt7/yt4.png',
    ],
    skills: ['Content Marketing', 'YouTube', 'Community Building', 'Personal Branding', 'Video Editing'],
    status: 'completed',
    featured: true,
  },
  {
    id: 3,
    title: 'Bioclinic - Consulente Digitale e Full Stack Developer',
    description: 'Supporto completo alla digitalizzazione della struttura sanitaria Bioclinic, evoluzione tecnologica dell\'azienda.',
    longDescription: 'Progettazione, sviluppo e manutenzione del gestionale interno per il personale sanitario, supporto al reparto IT, gestione e aggiornamento del sito web istituzionale, introduzione di strumenti digitali per l\'operatività. Approccio metodico con elevata affidabilità nel settore healthcare regolamentato.',
    image: 'https://i.ibb.co/3mdyYgPK/bioclinic1.png',
    images: [
      'https://i.ibb.co/Kc84Z3VH/bioclinic2.png',
      'https://i.ibb.co/qMtgLDKG/bioclinic4.png',
      'https://i.ibb.co/wrhqbcFB/bioclinic5.png',
    ],
    skills: ['Full Stack Development', 'Healthcare Systems', 'Web Development', 'Database Management', 'IT Support'],
    status: 'completed',
    featured: true,
  },
  {
    id: 4,
    title: 'Gestionale per Classificazione Rifiuti',
    description: 'Gestionale specializzato per la classificazione dei rifiuti, destinato a un settore altamente verticale e regolamentato.',
    longDescription: 'Raccolta requisiti intensiva con esperti del settore, modellazione dei flussi e delle logiche normative, sviluppo del backend e delle strutture dati, implementazione dell\'interfaccia operativa, testing e ottimizzazione. Traduzione di processi tecnici complessi in strumenti digitali semplici, affidabili ed efficaci.',
    image: 'https://i.ibb.co/C58jtr9B/sea1.png',
    images: [
      'https://i.ibb.co/W4Q77jC6/sea4.png',
      'https://i.ibb.co/N6hmDFTY/sea2.png',
      'https://i.ibb.co/WNFCHmyp/sea3.png',
    ],
    skills: ['Database Design', 'Backend Development', 'UI/UX', 'Regulatory Compliance', 'Testing'],
    status: 'completed',
    featured: false,
  },
  {
    id: 5,
    title: 'Automazioni e Agenti AI con n8n',
    description: 'Sviluppo di automazioni e sistemi intelligenti per diversi contesti aziendali basati su n8n.',
    longDescription: 'Realizzazione di chatbot avanzati e sistemi conversazionali, agenti AI complessi con memoria, funzioni e decision making, workflow automativi per processi interni, integrazioni API con servizi esterni, e webapp con backend interamente gestito in n8n. Esperienza dalla prototipazione rapida alla produzione scalabile.',
    image: 'https://i.ibb.co/jPRynD4p/autom1.png',
    images: [
      'https://i.ibb.co/tMLpPQXM/autom2.png',
      'https://i.ibb.co/CZ0nMWF/autom3.png',
      'https://i.ibb.co/fYDNw48S/autom4.png',
    ],
    skills: ['n8n', 'AI/ML', 'Chatbots', 'API Integration', 'Workflow Automation'],
    status: 'completed',
    featured: true,
  },
  {
    id: 7,
    title: 'WP AutoBlog - Web App Multi-Tenant',
    description: 'Web app multi-tenant per la gestione automatizzata di contenuti WordPress con login sicuro.',
    longDescription: 'Sviluppo di un\'applicazione SaaS con login sicuro e database isolati per ogni tenant, progettazione dell\'architettura dati multi-tenant, implementazione di autenticazione e ambienti separati per gli utenti, creazione di workflow automatizzati per la pubblicazione dei contenuti, gestione delle integrazioni con le API di WordPress, sviluppo di frontend e backend dell\'applicazione.',
    image: 'https://i.ibb.co/ZRXgG1bG/wp1.png',
    images: [
      'https://i.ibb.co/nqyGTYpf/wp2.png',
      'https://i.ibb.co/LdKYh4J8/wp3.png',
      'https://i.ibb.co/21d7xR61/wp4.png',
    ],
    skills: ['React', 'WordPress API', 'Multi-Tenant Architecture', 'SaaS', 'Backend Development'],
    status: 'completed',
    featured: true,
  },
  {
    id: 8,
    title: 'Sistema di Prenotazione Eventi',
    description: 'Sistema automatizzato di prenotazione eventi con backend n8n e frontend React/Tailwind.',
    longDescription: 'Realizzazione dell\'intero workflow di prenotazione in n8n, creazione dell\'interfaccia frontend in React e Tailwind CSS, integrazione con Google Sheets tramite sincronizzazione real-time, implementazione di validazioni, notifiche e interazioni utente, garanzia di un\'esperienza fluida tra backend e frontend. Dimostra l\'integrazione di strumenti di automazione con tecnologie frontend moderne.',
    image: 'https://i.ibb.co/whwwbrbn/eventmanager1.png',
    images: [
      'https://i.ibb.co/yBM7P0WW/eventmanager2.png',
      'https://i.ibb.co/8n2xbWrn/eventmanager3.png',
      'https://i.ibb.co/SD7Jp77k/eventmanager4.png',
    ],
    skills: ['n8n', 'React', 'Tailwind CSS', 'Google Sheets API', 'Event Management'],
    status: 'completed',
    featured: false,
  },
  {
    id: 9,
    title: 'Chatbot WhatsApp - Bioclinic',
    description: 'Chatbot WhatsApp per automatizzare il customer care di Bioclinic.',
    longDescription: 'Sviluppo di un chatbot per automatizzare il customer care, migliorando i tempi di risposta e riducendo il carico operativo. Progettazione dei flussi conversazionali, implementazione della logica di messaggistica via API, integrazione del chatbot con i sistemi interni, gestione delle risposte automatiche e recupero informazioni, garanzia di usabilità e affidabilità in un contesto sanitario. La soluzione ha ottimizzato significativamente la comunicazione con i pazienti.',
    image: 'https://i.ibb.co/Df9kxJXm/wa1.png',
    images: [
      'https://i.ibb.co/qYJLffQy/wa2.png',
      'https://i.ibb.co/zVGJKNs7/wa3.png',
      'https://i.ibb.co/gMFqXLTR/wa4.png',
    ],
    skills: ['WhatsApp API', 'Chatbot', 'Healthcare', 'Customer Support', 'Messaging Systems'],
    status: 'completed',
    featured: false,
  },
  {
    id: 10,
    title: 'Sistema Gestione Registro Soci - Country Life',
    description: 'Automatizzazione del sistema di gestione dei soci per l\'associazione Country Life.',
    longDescription: 'Trasformazione di un processo manuale in un workflow digitale completo. Progettazione della logica di registrazioni e rinnovi, implementazione di aggiornamenti automatici dei dati, notifiche automatiche agli utenti, organizzazione strutturata dei database dei soci, ottimizzazione del processo per ridurre il lavoro amministrativo. Risultato: un sistema solido, scalabile e a bassa manutenzione.',
    image: 'https://i.ibb.co/0RYJxsfT/cl1.png',
    images: [
      'https://i.ibb.co/W4FHrzkL/cl2.png',
      'https://i.ibb.co/N6d0vrFf/cl3.png',
      'https://i.ibb.co/wZGjFfSD/cl4.png',
    ],
    skills: ['Workflow Automation', 'Database Design', 'n8n', 'User Management', 'Notifications'],
    status: 'completed',
    featured: false,
  },
  {
    id: 11,
    title: 'Sistema Prenotazione Eventi - DarkWave Sup Pineto',
    description: 'Consulenza specializzata per automatizzare il sistema di prenotazione eventi.',
    longDescription: 'Analisi approfondita del sistema di booking esistente, identificazione dei punti critici e processi da automatizzare, progettazione di flussi operativi più efficienti, implementazione di procedure automatizzate per la gestione delle richieste e disponibilità, ottimizzazione del flusso di comunicazione tra staff e clienti, consulenza strategica per ridurre tempi di risposta e attività ripetitive. Risultato: sistema più rapido, affidabile e sostenibile nel tempo.',
    image: 'https://i.ibb.co/HTxZzdPg/sup1.png',
    images: [
      'https://i.ibb.co/gL107H3q/sup2.png',
      'https://i.ibb.co/mPdMYnk/sup3.png',
      'https://i.ibb.co/gMz4tZ3C/sup4.png',
    ],
    skills: ['Business Consulting', 'Workflow Optimization', 'Automation', 'Event Management', 'Process Design'],
    status: 'completed',
    featured: false,
  },
];

// Memoized Project Card Component
const ProjectCard = memo(({ project, onImageClick }: { project: Project; onImageClick: (image: string) => void }) => (
  <motion.div
    initial={{ opacity: 1, x: 0 }}
    className="flex-shrink-0 w-full sm:w-96 group"
  >
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/3 rounded-2xl border border-white/20 hover:border-[#3ECF8E]/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
      
      {/* Main Cover Image */}
      <div className="relative h-56 overflow-hidden cursor-pointer" onClick={() => onImageClick(project.image)}>
        <img 
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold uppercase tracking-wide">
              ✨ Featured
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3ECF8E] transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {project.skills.slice(0, 3).map((skill, skillIndex) => (
            <span 
              key={skillIndex}
              className="px-2 py-1 text-xs rounded-lg bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 group-hover:bg-[#3ECF8E]/30 transition-all duration-300 font-medium whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-lg bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 font-semibold whitespace-nowrap">
              +{project.skills.length - 3}
            </span>
          )}
        </div>

        {/* View More Link */}
        <a 
          href="/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#3ECF8E] font-semibold text-sm hover:text-[#3ECF8E]/80 transition-colors duration-300 group/link"
        >
          Scopri di più
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

const ProjectsSlider = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScroll || !sliderRef.current) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const element = sliderRef.current;
        const maxScroll = element.scrollWidth - element.clientWidth;
        
        if (element.scrollLeft >= maxScroll - 10) {
          element.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          element.scrollBy({ left: 420, behavior: 'smooth' });
        }
      }
    }, 2200);

    return () => clearInterval(interval);
  }, [isAutoScroll]);

  // Memoized handleScroll function
  const handleScroll = useCallback((direction: 'left' | 'right') => {
    setIsAutoScroll(false);
    if (sliderRef.current) {
      const scrollAmount = 400;
      if (direction === 'left') {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
    
    setTimeout(() => setIsAutoScroll(true), 8000);
  }, []);

  // Memoized projects list
  const projects = useMemo(() => PROJECTS_DATA, []);

  // Memoized onImageClick handler
  const handleImageClick = useCallback((image: string) => {
    setSelectedImage(image);
  }, []);

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
              <span className="block text-white">Scopri i Nostri</span>
              <span className="block text-[#3ECF8E]">Progetti Recenti</span>
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Una selezione dei nostri progetti più significativi che dimostrano le nostre capacità e il nostro impegno verso l'eccellenza.
            </p>
          </motion.div>

          {/* Projects Slider Container */}
          <div className="relative group">
            {/* Left Arrow Button */}
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-gradient-to-r from-[#3ECF8E]/80 to-[#3ECF8E]/60 hover:from-[#3ECF8E] hover:to-[#3ECF8E]/80 transition-all duration-300 flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 hover:-translate-x-1 -translate-x-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-gradient-to-r from-[#3ECF8E]/80 to-[#3ECF8E]/60 hover:from-[#3ECF8E] hover:to-[#3ECF8E]/80 transition-all duration-300 flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 hover:translate-x-1 translate-x-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Gradient Overlays for smooth scroll effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/40 to-transparent z-20 pointer-events-none rounded-l-2xl"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/40 to-transparent z-20 pointer-events-none rounded-r-2xl"></div>

            {/* Scrollable Container */}
            <div className="overflow-x-auto scrollbar-none" ref={sliderRef} onMouseEnter={() => setIsAutoScroll(false)} onMouseLeave={() => setIsAutoScroll(true)}>
              <motion.div
                initial={{ opacity: 1 }}
                className="flex gap-6 pb-4"
                style={{
                  scrollBehavior: 'smooth',
                }}
              >
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} onImageClick={handleImageClick} />
                ))}
              </motion.div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <a 
              href="/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3ECF8E] to-[#3ECF8E]/80 hover:from-[#3ECF8E]/90 hover:to-[#3ECF8E]/70 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Visualizza Tutti i Progetti
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 group z-10"
            >
              <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img 
              src={selectedImage}
              alt="Immagine in evidenza"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectsSlider;
