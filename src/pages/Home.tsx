// src/pages/Home.tsx - Versione migliorata e ottimizzata per mobile
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, TrendingUp, Bot } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import Testimonials from '../components/Testimonials';
import ProjectsSlider from '../components/ProjectsSlider';
import YouTubeCommunity from '../components/YouTubeCommunity';
import WhyChooseUs from '../components/WhyChooseUs';
import ScrollGradient from '../components/ScrollGradient';
/* import ThemeToggle from '../components/ThemeToggle'; */
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoData';

const seoData = getSEOData('home'); 

// Testimonials moved to `src/components/Testimonials.tsx`

const Home = () => {
  return (
    <>
     <SEO 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonicalUrl={seoData.canonicalUrl}
    />
      {/* Background gradients statici */}
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

      {/* Hero Section - Centrato e minimal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
          <div className="max-w-4xl mx-auto text-center">
            

            
            {/* Theme Toggle - COMMENTATO INSERIRE IN SEGUITO
            <div className="mb-8 flex justify-center">
              <ThemeToggle />
            </div>
            */}

            {/* Badge sopra il titolo */}
        <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
          <span className="text-green-500">
            Innovazione Tecnologica • Strumenti all'avanguardia
          </span>
        </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
            <span className="block text-primary font-semibold">Oltre il codice,</span>
            <motion.span 
              className="block font-semibold text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {/* Effetto typing */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ 
                  duration: 2.5, 
                  delay: 1,
                  ease: "easeOut"
                }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                verso l'innovazione.  
              </motion.span>
            </motion.span>
          </h1>
            
            <p className="text-base md:text-lg text-secondary mb-8 md:mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
            Integriamo strumenti e metodologie innovative che ci posizionano ben oltre 
            le tradizionali soluzioni software presenti nel panorama italiano.
           </p>
            
           <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="glass px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
            >
              Inizia Ora
            </Link>
            
            <Link 
              to="/services" 
              className="glass px-6 py-3 rounded-xl font-semibold text-sm text-primary bg-glass-secondary border-secondary hover:bg-glass-hover hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              Esplora Soluzioni
            </Link>
          </div>

          {/* Slider per i loghi che si fonde con lo sfondo */}
    <ScrollAnimation animation="fadeIn" delay={0.3}>
      <div className="relative overflow-hidden py-8 md:py-12">
        {/* Sfumature laterali per effetto fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Container dello slider - SERIE UNICA */}
        <div className="flex animate-scroll space-x-12 md:space-x-16">
          <div className="flex space-x-12 md:space-x-16 items-center min-w-fit">
            
            {/* OpenAI */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" 
                alt="OpenAI" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                OpenAI
              </div>
            </div>
            
            {/* React */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                alt="React" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                React
              </div>
            </div>
            
            {/* Python */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
                alt="Python" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                Python
              </div>
            </div>
            
            {/* Node.js */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
                alt="Node.js" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                Node.js
              </div>
            </div>
            
            {/* TypeScript */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
                alt="TypeScript" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                TypeScript
              </div>
            </div>
            
            {/* PostgreSQL */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
                alt="PostgreSQL" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                PostgreSQL
              </div>
            </div>
            
            {/* Docker */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" 
                alt="Docker" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                Docker
              </div>
            </div>
            
            {/* Next.js */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
                alt="Next.js" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                Next.js
              </div>
            </div>
            
            {/* MongoDB */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
                alt="MongoDB" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                MongoDB
              </div>
            </div>
            
            {/* AWS */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" 
                alt="AWS" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                AWS
              </div>
            </div>
            
            {/* Git */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
                alt="Git" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                Git
              </div>
            </div>
            
            {/* Tailwind CSS */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
                alt="Tailwind CSS" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                Tailwind CSS
              </div>
            </div>
            
            {/* Figma */}
            <div className="flex-shrink-0 w-24 md:w-32 h-12 md:h-16 flex items-center justify-center relative group">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" 
                alt="Figma" 
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                Figma
              </div>
            </div>
            
          </div>
        </div>
        
        
      </div>
    </ScrollAnimation>
            
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <ProjectsSlider />
      
      <YouTubeCommunity />

{/* Sezione Servizi - Design narrativo e minimale */}
<section className="py-16 md:py-24 relative overflow-hidden">
  <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
    {/* Servizi Button List */}
    <ScrollAnimation animation="slideUp">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          Esplora i Nostri Servizi
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            to="/software-pmi"
            className="group glass p-4 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-violet-500 flex-shrink-0" />
              <span className="font-semibold text-white group-hover:text-violet-400 transition-colors">Software PMI</span>
            </div>
            <ArrowRight className="w-4 h-4 text-violet-500 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            to="/developers"
            className="group glass p-4 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-violet-500 flex-shrink-0" />
              <span className="font-semibold text-white group-hover:text-violet-400 transition-colors">Team di Sviluppo</span>
            </div>
            <ArrowRight className="w-4 h-4 text-violet-500 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            to="/ai-agents"
            className="group glass p-4 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-violet-500 flex-shrink-0" />
              <span className="font-semibold text-white group-hover:text-violet-400 transition-colors">Agenti AI</span>
            </div>
            <ArrowRight className="w-4 h-4 text-violet-500 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            to="/chatbots"
            className="group glass p-4 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-violet-500 flex-shrink-0" />
              <span className="font-semibold text-white group-hover:text-violet-400 transition-colors">Chatbot AI</span>
            </div>
            <ArrowRight className="w-4 h-4 text-violet-500 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            to="/growth-plans"
            className="group glass p-4 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-violet-500 flex-shrink-0" />
              <span className="font-semibold text-white group-hover:text-violet-400 transition-colors">Piani di Crescita</span>
            </div>
            <ArrowRight className="w-4 h-4 text-violet-500 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            to="/products"
            className="group glass p-4 rounded-xl border border-white/10 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-violet-500 flex-shrink-0" />
              <span className="font-semibold text-white group-hover:text-violet-400 transition-colors">Prodotti & Soluzioni</span>
            </div>
            <ArrowRight className="w-4 h-4 text-violet-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  </div>
</section>


{/* CTA Finale - Testi originali con design minimal */}
<section className="py-20 md:py-12 relative overflow-hidden">
  <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="slideUp">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-8 relative inline-block">
        <span className="block text-primary">Trasformiamo le tue idee in <span className="text-accent">soluzioni.</span></span>
      </h2>
        
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto leading-relaxed">
            Siamo pronti a valutare le tue esigenze e proporti la soluzione più adatta al tuo business.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
        >
          <Link 
            to="/contact" 
            className="glass px-6 py-3 rounded-xl font-semibold text-sm text-accent bg-accent/30 border-accent/40 hover:bg-accent/40 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 inline-flex items-center group"
          >
            Contattaci
          </Link>
          
          <Link 
            to="/services" 
            className="glass px-6 py-3 rounded-xl font-semibold text-sm text-foreground border-white/20 hover:bg-white/5 hover:border-green-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            Esplora Soluzioni
          </Link>
        </motion.div>
      </div>
    </ScrollAnimation>
  </div>
</section>
          
    
    </>
  );
};

export default Home;