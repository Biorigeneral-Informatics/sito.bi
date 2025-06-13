// src/pages/Home.tsx - Versione migliorata e ottimizzata per mobile
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BrainCircuit, CheckCircle, Code, Workflow, Mail, TrendingUp, MessageSquare, BarChart, Cloud, Star, BarChart3, Bot } from 'lucide-react';
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
      <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
        La sinergia tra esperienza nell'AI, competenze tecniche avanzate e visione innovativa, 
        per trasformare le sfide digitali in opportunità di crescita
      </p>
    </ScrollAnimation>

    {/* Mosaico di 5 riquadri */}
    <div className="grid grid-cols-1 md:grid-cols-8 gap-6 relative">
      
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
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
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

{/* Recensioni e collaborazioni - con sfondo nero e gradient - ottimizzato per mobile */}
<section className="py-16 md:py-24 relative overflow-visible bg-background">
  {/* Background elements migliorati */}
  <div className="absolute -bottom-80 -left-20 md:-left-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-violet-500/20 filter blur-[60px] md:blur-[80px] opacity-70"></div>
  
  <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16"
    >
      <span className="inline-block px-3 md:px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-xs md:text-sm font-medium mb-3 md:mb-4">
        La voce dei nostri clienti
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Recensioni e collaborazioni</h2>
      <p className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto">
        Esperienze reali di chi ha trasformato il proprio business con le nostre soluzioni
      </p>
    </motion.div>
    
    {/* Testimonial Cards - Improved glassmorphism and mobile responsive */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
      {[
        {
          quote: "BioriAgent ha trasformato completamente il nostro customer service. L'implementazione è stata rapida e i risultati immediati. Ora gestiamo il triplo delle richieste.",
          author: "Laura Romano",
          role: "CEO, Innovatech",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          stars: 5,
          color: "indigo"
        },
        {
          quote: "Il team è stato eccezionale - reattivo, professionale e sempre attento alle nostre esigenze in evoluzione. In soli tre mesi abbiamo visto un ROI del 300%.",
          author: "Alessandro Bianchi",
          role: "CTO, TechVision",
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          stars: 5,
          color: "violet"
        },
        {
          quote: "L'implementazione dei loro chatbot ha migliorato notevolmente l'esperienza clienti. Il nostro team può ora concentrarsi su attività a maggior valore aggiunto.",
          author: "Giulia Conti",
          role: "Marketing Director, RetailPlus",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          stars: 4,
          color: "cyan"
        }
      ].map((testimonial, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className={`glass p-4 md:p-6 rounded-xl border border-${testimonial.color}-500/30 
                    bg-gradient-to-br from-background/90 to-${testimonial.color}-500/5
                    transition-all duration-300 hover:shadow-lg hover:shadow-${testimonial.color}-500/20 hover:-translate-y-1`}
        >
          {/* Stars Rating */}
          <div className="flex mb-2 md:mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 md:w-4 md:h-4 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-foreground/20'}`} 
              />
            ))}
          </div>
          
          {/* Quote */}
          <p className="text-foreground/80 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
            "{testimonial.quote}"
          </p>
          
          {/* Author info */}
          <div className="flex items-center mt-auto">
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-${testimonial.color}-500/30 overflow-hidden`}>
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="ml-2 md:ml-3">
              <h4 className="font-bold text-sm md:text-base">{testimonial.author}</h4>
              <p className="text-foreground/60 text-xxs md:text-xs">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* I nostri servizi - Improved design e ottimizzato per mobile */}
<section className="py-16 md:py-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"></div>
  
  <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16"
    >
      <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-xs md:text-sm font-medium mb-3 md:mb-4">
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Soluzioni & Expertise
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">I nostri servizi</h2>
      <p className="text-base md:text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto">
        Trasformiamo la tua visione in realtà con un portfolio completo di servizi digitali innovativi
      </p>
    </motion.div>
    
    {/* Servizi principali - Enhanced cards with animated hover effects - mobile optimized */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
      {[
        {
          id: "ai-agents",
          title: "Agenti AI",
          description: "Sistemi intelligenti autonomi che automatizzano i processi aziendali operando 24/7",
          icon: <Bot className="w-8 h-8 md:w-10 md:h-10 text-violet-400" />,
          features: ["Automazione processi", "Integrazione sistemi", "Operatività 24/7"],
          color: "violet",
          link: "/ai-agents",
          bgImage: "https://images.unsplash.com/photo-1677442135968-6d89485dc891?q=80&w=400&auto=format"
        },
        {
          id: "software-pmi",
          title: "Sviluppo Software",
          description: "Soluzioni software personalizzate per trasformare la tua visione in applicazioni concrete",
          icon: <Code className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />,
          features: ["App web responsive", "Software gestionali", "Soluzioni cloud"],
          color: "indigo",
          link: "/software-pmi",
          bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format"
        },
        {
          id: "chatbots",
          title: "Chatbot AI",
          description: "Assistenti virtuali intelligenti che migliorano l'esperienza cliente e automatizzano il supporto",
          icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />,
          features: ["Supporto 24/7", "Multilingue", "Personalizzazione"],
          color: "cyan",
          link: "/chatbots",
          bgImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=400&auto=format"
        }
      ].map((service, index) => (
        <motion.div 
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * index, duration: 0.5 }}
          className="group relative h-full overflow-hidden rounded-xl"
        >
          {/* Card with hover reveal effect */}
          <div className="relative h-full overflow-hidden rounded-xl border border-foreground/10 transition-all duration-500 group-hover:border-primary/30">
            {/* Background image with overlay */}
            <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20"></div>
              <img 
                src={service.bgImage} 
                alt={service.title}
                className="h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:opacity-30" 
              />
            </div>
            
            {/* Content */}
            <div className="glass relative z-10 flex h-full flex-col p-4 md:p-6 transition-transform duration-500">
              {/* Icon with animated background */}
              <div className={`relative mb-4 md:mb-6 w-12 h-12 md:w-16 md:h-16 rounded-xl bg-${service.color}-500/20 flex items-center justify-center overflow-hidden group-hover:bg-${service.color}-500/30 transition-all duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/0 to-${service.color}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                {service.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-foreground/70 text-sm md:text-base mb-4 md:mb-6">{service.description}</p>
              
              {/* Features with animated reveal */}
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className={`w-4 h-4 md:w-5 md:h-5 text-${service.color}-400 mt-0.5 mr-2 md:mr-3 flex-shrink-0`} />
                    <span className="text-foreground/80 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Button with hover animation */}
              <Link 
                to={service.link}
                className={`mt-auto group/btn flex w-full items-center justify-center space-x-2 rounded-lg border border-${service.color}-500/30 bg-${service.color}-500/10 px-3 md:px-4 py-2 md:py-3 text-center transition-all duration-300 hover:bg-${service.color}-500/20`}
              >
                <span className={`font-medium text-${service.color}-400 text-sm md:text-base`}>Scopri di più</span>
                <ArrowRight className={`ml-2 w-4 h-4 md:w-5 md:h-5 text-${service.color}-400 transition-transform duration-300 group-hover/btn:translate-x-1`} />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Altri servizi - Improved infinite slider for mobile */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 md:mb-24"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Altri servizi</h3>
      
      <div className="relative overflow-hidden py-4 md:py-6">
        {/* Gradient masks for fade effect */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        {/* Infinite slider container */}
        <div className="animate-infinite-scroll flex items-center justify-center">
          {/* First set of cards */}
          {[
            {
              title: "Team di Sviluppo",
              description: "Sviluppatori esperti integrati nei tuoi team per accelerare i progetti",
              icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />,
              color: "indigo",
              link: "/developers"
            },
            {
              title: "Piani di Crescita",
              description: "Strategie di trasformazione digitale per crescita sostenibile",
              icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-400" />,
              color: "green",
              link: "/growth-plans"
            },
            {
              title: "Consulenza AI",
              description: "Guida esperta per integrare l'intelligenza artificiale nel tuo business",
              icon: <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-violet-400" />,
              color: "violet",
              link: "/ai-consulting"
            },
            {
              title: "Cloud Services",
              description: "Infrastrutture scalabili e sicure per le tue applicazioni",
              icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
              color: "blue",
              link: "/cloud-services"
            },
            {
              title: "Data Analytics",
              description: "Analisi dati avanzata per decisioni data-driven",
              icon: <BarChart className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />,
              color: "amber",
              link: "/data-analytics"
            },
            {
              title: "Digital Marketing",
              description: "Strategie digitali per aumentare la visibilità del tuo brand",
              icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-rose-400" />,
              color: "rose",
              link: "/digital-marketing"
            }
          ].map((service, index) => (
            <Link 
              key={`card-1-${index}`}
              to={service.link}
              className={`flex-shrink-0 glass mx-2 md:mx-3 p-4 md:p-6 rounded-xl border border-${service.color}-500/30 
                       bg-gradient-to-br from-background/90 to-${service.color}-500/5
                       transition-all duration-300 hover:shadow-lg hover:shadow-${service.color}-500/20 
                       hover:-translate-y-1 flex flex-col w-48 md:w-64 h-48 md:h-64`}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-${service.color}-500/20 flex items-center justify-center mb-3 md:mb-4`}>
                {service.icon}
              </div>
              
              <h4 className={`text-base md:text-lg font-bold mb-2 text-${service.color}-400`}>{service.title}</h4>
              <p className="text-foreground/70 text-xs md:text-sm mb-3 md:mb-4 flex-grow">{service.description}</p>
              
              <div className="mt-auto flex items-center text-xs md:text-sm group">
                <span className={`text-${service.color}-400`}>Scopri di più</span>
                <ArrowRight className={`ml-1 w-3 h-3 md:w-4 md:h-4 text-${service.color}-400 transition-transform group-hover:translate-x-1`} />
              </div>
            </Link>
          ))}
          
          {/* Duplicated set for infinite scrolling */}
          {[
            {
              title: "Team di Sviluppo",
              description: "Sviluppatori esperti integrati nei tuoi team per accelerare i progetti",
              icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />,
              color: "indigo",
              link: "/developers"
            },
            {
              title: "Piani di Crescita",
              description: "Strategie di trasformazione digitale per crescita sostenibile",
              icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-400" />,
              color: "green",
              link: "/growth-plans"
            },
            {
              title: "Consulenza AI",
              description: "Guida esperta per integrare l'intelligenza artificiale nel tuo business",
              icon: <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-violet-400" />,
              color: "violet",
              link: "/ai-consulting"
            },
            {
              title: "Cloud Services",
              description: "Infrastrutture scalabili e sicure per le tue applicazioni",
              icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
              color: "blue",
              link: "/cloud-services"
            },
            {
              title: "Data Analytics",
              description: "Analisi dati avanzata per decisioni data-driven",
              icon: <BarChart className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />,
              color: "amber",
              link: "/data-analytics"
            },
            {
              title: "Digital Marketing",
              description: "Strategie digitali per aumentare la visibilità del tuo brand",
              icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-rose-400" />,
              color: "rose",
              link: "/digital-marketing"
            }
          ].map((service, index) => (
            <Link 
              key={`card-2-${index}`}
              to={service.link}
              className={`flex-shrink-0 glass mx-2 md:mx-3 p-4 md:p-6 rounded-xl border border-${service.color}-500/30 
                       bg-gradient-to-br from-background/90 to-${service.color}-500/5
                       transition-all duration-300 hover:shadow-lg hover:shadow-${service.color}-500/20 
                       hover:-translate-y-1 flex flex-col w-48 md:w-64 h-48 md:h-64`}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-${service.color}-500/20 flex items-center justify-center mb-3 md:mb-4`}>
                {service.icon}
              </div>
              
              <h4 className={`text-base md:text-lg font-bold mb-2 text-${service.color}-400`}>{service.title}</h4>
              <p className="text-foreground/70 text-xs md:text-sm mb-3 md:mb-4 flex-grow">{service.description}</p>
              
              <div className="mt-auto flex items-center text-xs md:text-sm group">
                <span className={`text-${service.color}-400`}>Scopri di più</span>
                <ArrowRight className={`ml-1 w-3 h-3 md:w-4 md:h-4 text-${service.color}-400 transition-transform group-hover:translate-x-1`} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
  
  {/* CSS for infinite scroll animation */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes infinite-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .animate-infinite-scroll {
      animation: infinite-scroll 60s linear infinite;
      width: fit-content;
    }
  `}} />
</section>

{/* Enhanced CTA Section with interactive elements - mobile optimized */}
<section className="py-16 md:py-24 relative overflow-visible">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"></div>
  <div className="absolute -top-60 md:-top-80 -right-20 md:-right-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-indigo-500/20 filter blur-[80px] md:blur-[100px] opacity-70"></div>
  <div className="absolute -bottom-60 md:-bottom-80 -left-20 md:-left-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-violet-500/20 filter blur-[80px] md:blur-[100px] opacity-70"></div>
  
  <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
    <div className="relative">
      {/* Interactive card with layered effect */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 lg:p-16 overflow-hidden relative shadow-2xl">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-particle ${5 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.2 + Math.random() * 0.3
              }}
            ></div>
          ))}
        </div>
        
        {/* Colorful top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"></div>
        
        {/* Content with 3D effect */}
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
            {/* Left column - Text content */}
            <div className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block rounded-full glass px-3 md:px-4 py-1 border border-indigo-500/30 mb-4 md:mb-6">
                  <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Il tuo futuro digitale inizia qui
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  Trasforma le <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">idee</span> in <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">innovazione</span>
                </h2>
                
                <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
                  Inizia oggi un percorso personalizzato verso la trasformazione digitale del tuo business, con soluzioni su misura e all'avanguardia.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                {/* Statistics */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="glass p-3 md:p-4 rounded-xl border border-indigo-500/20 text-center">
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">+45</div>
                    <div className="text-xs md:text-sm text-foreground/70">Progetti completati</div>
                  </div>
                  
                  <div className="glass p-3 md:p-4 rounded-xl border border-violet-500/20 text-center">
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">100%</div>
                    <div className="text-xs md:text-sm text-foreground/70">Soddisfazione clienti</div>
                  </div>
                </div>
                
                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 md:gap-4 pt-3 md:pt-4">
                  <Link
                    to="/contact"
                    className="px-5 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 flex items-center group text-sm md:text-base"
                  >
                    <span className="font-semibold">Contattaci ora</span>
                    <div className="relative ml-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white relative z-10 transition-transform group-hover:translate-x-5 duration-300" />
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white absolute -left-5 transition-transform group-hover:translate-x-5 duration-300" />
                    </div>
                  </Link>
                  
                  <Link
                    to="/products"
                    className="px-5 md:px-8 py-3 md:py-4 glass border border-white/20 hover:border-indigo-500/30 rounded-xl transition-all hover:-translate-y-1 flex items-center text-sm md:text-base"
                  >
                    Soluzioni
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Right column - Interactive elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Interactive contact form preview */}
              <div className="glass p-5 md:p-6 rounded-2xl shadow-xl border border-white/10 hover:border-violet-500/20 transition-all relative group overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute -inset-px rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 opacity-20"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                      Iniziamo insieme
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-rose-500"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                <div className="flex flex-col items-center justify-center p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-4 md:mb-6">
                    Iniziamo insieme
                  </h3>
                  
                  {/* Info di contatto */}
                  <div className="space-y-3 md:space-y-4 w-full mb-6 md:mb-8">
                    
                    
                    <div className="flex items-center p-2 md:p-3 glass rounded-lg hover:bg-violet-500/10 transition-colors cursor-pointer group/item">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-violet-500/20 flex items-center justify-center mr-3 md:mr-4 group-hover/item:bg-violet-500/30 transition-colors">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-violet-400 group-hover/item:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="text-xs md:text-sm text-foreground/70">Scrivici</div>
                        <a href="mailto: info@biorigeneralinformatics.com" className="font-medium text-xs sm:text-sm md:text-base hover:text-violet-400 transition-colors truncate"> info@biorigeneralinformatics.com</a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Grande bottone che rimanda alla pagina contatti */}
                  <Link 
                    to="/contact"
                    className="w-full py-3 md:py-4 px-4 md:px-6 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl text-white font-semibold relative overflow-hidden group/btn flex items-center justify-center text-sm md:text-base"
                  >
                    <span className="relative z-10 flex items-center">
                      <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-2" /> 
                      Vai alla pagina contatti
                    </span>
                    
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600"></div>
                      <div className="absolute inset-y-0 -inset-x-40 bg-white/20 blur-2xl skew-x-12 animate-wave-slow"></div>
                    </div>
                    <div className="absolute right-4 md:right-6 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                  </Link>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-8 -right-8 md:-top-10 md:-right-10 w-32 md:w-40 h-32 md:h-40 rounded-full border border-indigo-500/20 blur-sm"></div>
      <div className="absolute -bottom-10 -left-10 md:-bottom-14 md:-left-14 w-48 md:w-64 h-48 md:h-64 rounded-full border border-violet-500/20 blur-sm"></div>
    </div>
  </div>
  
  {/* CSS for animations */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes float-particle {
      0%, 100% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(10px) translateX(-15px); }
      75% { transform: translateY(-15px) translateX(-10px); }
    }
    
    @keyframes wave-slow {
      0%, 100% { transform: translateX(-100%) skewX(12deg); }
      50% { transform: translateX(100%) skewX(12deg); }
    }
  `}} />
</section>
          
    
    </>
  );
};

export default Home;