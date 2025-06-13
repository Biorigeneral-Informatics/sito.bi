// src/pages/Home.tsx - Versione migliorata e ottimizzata per mobile
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BrainCircuit, Code, Workflow, TrendingUp, Bot } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import ScrollGradient from '../components/ScrollGradient';
import ThemeToggle from '../components/ThemeToggle';

const Home = () => {
  return (
    <>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 z-10">
          <div className="max-w-4xl mx-auto text-center">
            
           {/* Theme Toggle */}
            <div className="mb-8 flex justify-center">
              <ThemeToggle />
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
            
            <p className="text-base md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
            AI Agency e Software Engineering. Soluzioni digitali innovative per il tuo business.
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
            
          </div>
        </div>
      </section>
      
      {/* Sezione Valore, competenze, innovazione - Layout pulito con puntini animati */}
<section className="py-16 md:py-24 relative overflow-hidden">
  <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
    
    {/* Titolo principale con stesso font del titolo hero */}
    <ScrollAnimation animation="fadeIn" className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
        <span className="block text-primary">Valore, competenze e innovazione</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-foreground/80  text-gray-400 max-w-3xl mx-auto leading-relaxed">
        La sinergia tra esperienza nell'AI, competenze tecniche avanzate e visione innovativa, 
        per trasformare le sfide digitali in opportunità di crescita
      </p>
    </ScrollAnimation>

    {/* Mosaico di 5 riquadri */}
    <div className="grid grid-cols-1 md:grid-cols-8 gap-6 ml-10 mr-10 relative">
      
      {/* PRIMA RIGA */}
      
      {/* Riquadro 1 - Integrazione AI evoluta (GRANDE - 5 colonne) */}
      <ScrollAnimation animation="slideUp" delay={0.1} className="md:col-span-5 relative">
        <div className="bg-gradient-to-br from-background/70 to-emerald-500/8 backdrop-blur-lg border border-emerald-500/25 rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden hover:scale-[1.02] transition-all duration-500 group h-full">
          {/* Top gradient border verde */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400"></div>
          
          {/* Gradient interno verde */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/12 via-green-500/8 to-teal-500/6 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-white/8 via-transparent to-emerald-300/6 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          {/* Rete di connessioni animate */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-12 right-12 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
            <div className="absolute bottom-16 right-8 w-1 h-1 bg-emerald-200 rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <BrainCircuit className="w-5 h-5 text-white mr-3" />
              <h3 className="text-lg font-semibold text-white">Integrazione AI evoluta</h3>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              Mentre la maggior parte delle aziende italiane non sfrutta ancora l'AI, noi integriamo <span className="text-white font-medium">modelli linguistici avanzati</span> in ogni soluzione per automatizzare <span className="text-white font-medium">processi complessi</span> e migliorare l'efficienza operativa.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Riquadro 2 - Automazione intelligente (MEDIO - 3 colonne) */}
      <ScrollAnimation animation="slideUp" delay={0.2} className="md:col-span-3 relative">
        <div className="bg-gradient-to-br from-background/70 to-teal-500/8 backdrop-blur-lg border border-teal-500/25 rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden hover:scale-[1.02] transition-all duration-500 group h-full">
          {/* Top gradient border verde */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400"></div>
          
          {/* Gradient interno verde */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/12 via-emerald-500/8 to-green-500/6 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/8 via-transparent to-teal-300/6 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          {/* Rete di connessioni animate */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-14 right-10 w-1 h-1 bg-teal-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-10 left-12 w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce"></div>
            <div className="absolute bottom-18 right-6 w-1 h-1 bg-teal-200 rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Workflow className="w-5 h-5 text-white mr-3" />
              <h3 className="text-lg font-semibold text-white">Automazione intelligente</h3>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              Combinazione avanzata di strumenti come <span className="text-white font-medium">N8n e Make</span> con AI per creare <span className="text-white font-medium">flussi di lavoro autonomi</span> che riducono i costi operativi.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* SECONDA RIGA */}
      
      {/* Riquadro 3 - Competenze all'avanguardia (PICCOLO - 2 colonne) */}
      <ScrollAnimation animation="slideUp" delay={0.3} className="md:col-span-2 relative">
        <div className="bg-gradient-to-br from-background/70 to-green-500/8 backdrop-blur-lg border border-green-500/25 rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden hover:scale-[1.02] transition-all duration-500 group h-full">
          {/* Top gradient border verde */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400"></div>
          
          {/* Gradient interno verde */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/12 via-teal-500/8 to-emerald-500/6 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/8 via-transparent to-green-300/6 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          {/* Rete di connessioni animate */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-5 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute top-16 right-8 w-1 h-1 bg-green-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce"></div>
            <div className="absolute bottom-6 right-12 w-1 h-1 bg-green-200 rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Code className="w-5 h-5 text-white mr-3" />
              <h3 className="text-lg font-semibold text-white">Competenze all'avanguardia</h3>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              <span className="text-white font-medium">Metodologie pionieristiche</span> e strumenti innovativi che ci posizionano oltre le <span className="text-white font-medium">soluzioni tradizionali</span> del panorama italiano.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Riquadro 4 - Performance e Scalabilità (PICCOLO - 2 colonne) */}
      <ScrollAnimation animation="slideUp" delay={0.4} className="md:col-span-2 relative">
        <div className="bg-gradient-to-br from-background/70 to-teal-600/8 backdrop-blur-lg border border-teal-600/25 rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden hover:scale-[1.02] transition-all duration-500 group h-full">
          {/* Top gradient border verde */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400"></div>
          
          {/* Gradient interno verde */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/12 via-green-600/8 to-emerald-600/6 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/8 via-transparent to-teal-400/6 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          {/* Rete di connessioni animate */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-7 left-12 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <div className="absolute top-16 right-6 w-1 h-1 bg-teal-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-14 left-6 w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce"></div>
            <div className="absolute bottom-8 right-14 w-1 h-1 bg-teal-200 rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-5 h-5 text-white mr-3" />
              <h3 className="text-lg font-semibold text-white">Performance e Scalabilità</h3>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              <span className="text-white font-medium">Architetture cloud-native</span> e ottimizzazioni avanzate garantiscono <span className="text-white font-medium">prestazioni superiori</span> e scalabilità dinamica senza compromessi.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Riquadro 5 - Giovani Talenti e Innovazione (GRANDE - 4 colonne) */}
      <ScrollAnimation animation="slideUp" delay={0.5} className="md:col-span-4 relative">
        <div className="bg-gradient-to-br from-background/70 to-emerald-600/8 backdrop-blur-lg border border-emerald-600/25 rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden hover:scale-[1.02] transition-all duration-500 group h-full">
          {/* Top gradient border verde */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400"></div>
          
          {/* Gradient interno verde */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/12 via-green-600/8 to-teal-600/6 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-emerald-400/6 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          {/* Rete di connessioni animate */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-6 left-8 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute top-12 right-12 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
            <div className="absolute bottom-16 right-8 w-1 h-1 bg-emerald-200 rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Users className="w-5 h-5 text-white mr-3" />
              <h3 className="text-lg font-semibold text-white">Giovani Talenti e Innovazione</h3>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              L'integrazione di <span className="text-white font-medium">giovani talenti</span> porta energie fresche e <span className="text-white font-medium">approcci innovativi</span>, combinando competenze tecniche all'avanguardia con una <span className="text-white font-medium">visione disruptive</span> per affrontare ogni sfida con creatività e pragmatismo.
            </p>
          </div>
        </div>
      </ScrollAnimation>

    </div>

  </div>
</section>
      
      {/* Competenze all'avanguardia - Solo titolo, descrizione e slider */}
<section className="py-8 md:py-12 pt-6 md:pt-8 relative overflow-hidden">
  <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="slideUp">
      <div className="text-center mb-12 md:mb-20">
        {/* Badge sopra il titolo */}
        <div className="inline-block px-3 md:px-5 py-1 rounded-full border border-green-500">
        <span className="text-xs md:text-sm font-medium text-green-500">
          Innovazione Tecnologica • Strumenti di Nuova Generazione
        </span>
      </div>
        
        <div>
        {/* Titolo con esattamente lo stesso stile di "Valore, competenza e innovazione" */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 mt-4 md:mb-6 relative inline-block">
        <span className="block text-primary">Competenze all'avanguardia</span>
      </h2>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Integriamo strumenti e metodologie innovative che ci posizionano ben oltre 
          le tradizionali soluzioni software presenti nel panorama italiano.
        </p>
      </div>
    </ScrollAnimation>
    
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
        
        {/* Testo descrittivo sotto lo slider */}
        <div className="text-center mt-20 md:mt-22">
          <p className="text-sm md:text-base text-foreground/60">
          Siamo pronti a valutare le tue esigenze e proporti la soluzione di integrazione più adatta al tuo business.
          </p>
        </div>
      </div>
    </ScrollAnimation>
  </div>
</section>

{/* Sezione Servizi - Design innovativo senza card */}
<section className="py-16 md:py-24 relative overflow-hidden">
  <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
    <ScrollAnimation animation="slideUp">
      <div className="text-center mb-12 md:mb-20">
        <div className="inline-block px-3 md:px-4 py-1 rounded-full glass border border-white/10 text-xs md:text-sm font-medium mb-3 md:mb-4">
          <span className="text-green-500">
            Soluzioni & Expertise
          </span>
        </div>
        <div>
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 relative inline-block">
        <span className="block text-primary">I Nostri Servizi</span>
      </h2>
       </div>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
          Trasformiamo la tua visione in realtà con un portfolio completo di servizi digitali innovativi.
        </p>
      </div>
    </ScrollAnimation>
    
    {/* Layout innovativo con linee di connessione */}
    <div className="max-w-6xl mx-auto">
      
      {/* Categoria: Sviluppo Software */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-20"
      >
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center mr-4">
            <Code className="w-6 h-6 text-gray-400" />
          </div>
          <div>
            <div className="text-sm font-medium text-violet-500 mb-1">SVILUPPO</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Software & Applicazioni</h3>
          </div>
          <div className="flex-1 ml-8 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 pl-16">
          <Link 
            to="/software-pmi"
            className="group block glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-2 text-white group-hover:text-violet-500 transition-colors">Software PMI</h4>
            <p className="text-gray-400 text-sm mb-4">Soluzioni ERP, CRM e applicazioni gestionali per piccole e medie imprese</p>
            <div className="flex items-center text-sm text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Scopri di più</span>
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link 
            to="/developers"
            className="group block glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-2 text-white group-hover:text-violet-500 transition-colors">Team di Sviluppo</h4>
            <p className="text-gray-400 text-sm mb-4">Sviluppatori esperti integrati nei tuoi progetti per accelerare la crescita</p>
            <div className="flex items-center text-sm text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Scopri di più</span>
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </motion.div>

      {/* Categoria: Intelligenza Artificiale */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16 md:mb-20"
      >
        <div className="flex items-center mb-8 flex-row-reverse">
          <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center ml-4">
          
            <Bot className="w-6 h-6 text-gray-400" />
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-violet-500 mb-1">INTELLIGENZA ARTIFICIALE</div>
            <h3 className="text-2xl md:text-3xl font-bold">AI & Automazione</h3>
          </div>
          <div className="flex-1 mr-8 h-px bg-gradient-to-l from-violet-500/30 to-transparent"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 pr-16">
          <Link 
            to="/ai-agents"
            className="group block glass p-6 rounded-xl border border-white/10 hover:violet-green-500/30 hover:bg-white/5 transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-2 group-hover:text-violet-500 transition-colors">Agenti AI</h4>
            <p className="text-gray-400 text-sm mb-4">Agenti intelligenti personalizzati per automatizzare processi complessi</p>
            <div className="flex items-center text-sm text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Scopri di più</span>
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link 
            to="/chatbots"
            className="group block glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-2 group-hover:text-violet-500 transition-colors">Chatbot AI</h4>
            <p className="text-gray-400 text-sm mb-4">Assistenti conversazionali intelligenti per customer service e vendite</p>
            <div className="flex items-center text-sm text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Scopri di più</span>
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </motion.div>

      {/* Categoria: Strategia & Crescita */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16 md:mb-20"
      >
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center mr-4">
            <TrendingUp className="w-6 h-6 text-gray-400" />
          </div>
          <div>
            <div className="text-sm font-medium text-violet-500 mb-1">STRATEGIA</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Crescita & Consulenza</h3>
          </div>
          <div className="flex-1 ml-8 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 pl-16">
          <Link 
            to="/growth-plans"
            className="group block glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-2 text-white group-hover:text-violet-500 transition-colors">Piani di Crescita</h4>
            <p className="text-gray-400 text-sm mb-4">Strategie su misura per scalare il tuo business con tecnologie innovative</p>
            <div className="flex items-center text-sm text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Scopri di più</span>
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          
          <Link 
            to="/products"
            className="group block glass p-6 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300"
          >
            <h4 className="text-lg font-bold mb-2 text-white group-hover:text-violet-500 transition-colors">Prodotti & Soluzioni</h4>
            <p className="text-gray-400 text-sm mb-4">Catalogo completo di strumenti e prodotti digitali pronti all'uso</p>
            <div className="flex items-center text-sm text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Scopri di più</span>
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </motion.div>

      
    </div>
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