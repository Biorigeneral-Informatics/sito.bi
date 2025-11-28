import ScrollAnimation from './ScrollAnimation';
import React, { useMemo } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  delay: number;
}

const FilledStar = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.17L12 18.896l-7.336 3.972 1.402-8.17L.132 9.21l8.2-1.192L12 .587z" />
  </svg>
);

// Componente singola testimonianza memoizzata
const TestimonialCard = React.memo(({ testimonial }: { testimonial: Testimonial }) => (
  <ScrollAnimation animation="slideUp" delay={testimonial.delay}>
    <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-xs text-foreground/60">{testimonial.role}</div>
        </div>
      </div>

      <div className="flex items-center mb-3">
        <div className="flex text-yellow-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FilledStar key={i} className="w-4 h-4 text-yellow-400" />
          ))}
        </div>
        <div className="ml-2 text-sm text-foreground/60">{testimonial.rating}.0</div>
      </div>

      <p className="text-white/90 leading-relaxed flex-1">{testimonial.text}</p>
    </div>
  </ScrollAnimation>
));

TestimonialCard.displayName = 'TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = useMemo(() => [
    {
      id: 1,
      name: "Luca B.",
      role: "CTO, Startup Innovativa",
      avatar: "https://i.pravatar.cc/150?img=32",
      text: "Il loro approccio ci ha permesso di lanciare un agente AI che ha ridotto i tempi operativi del 40%. Comunicazione chiara e risultati concreti.",
      rating: 5,
      delay: 0.1,
    },
    {
      id: 2,
      name: "Giulia R.",
      role: "Responsabile Marketing",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "Campagne ottimizzate dall'AI che hanno incrementato le conversioni del 60%. Team proattivo e idea-driven.",
      rating: 5,
      delay: 0.15,
    },
    {
      id: 3,
      name: "Marco S.",
      role: "Operations Manager",
      avatar: "https://i.pravatar.cc/150?img=5",
      text: "Automazioni che hanno eliminato attività ripetitive e liberato 20 ore/settimana per ogni agente. Altamente raccomandati.",
      rating: 5,
      delay: 0.2,
    },
    {
      id: 4,
      name: "Silvia M.",
      role: "CEO, Retail",
      avatar: "https://i.pravatar.cc/150?img=18",
      text: "Consulenza strategica e implementazione rapida: il progetto è stato live in meno di un mese con ROI evidente.",
      rating: 5,
      delay: 0.25,
    },
    {
      id: 5,
      name: "Alessandro V.",
      role: "Head of Product",
      avatar: "https://i.pravatar.cc/150?img=3",
      text: "Soluzione impeccabile, integrazione rapida e impatto immediato sul flusso di lavoro.",
      rating: 5,
      delay: 0.3,
    },
    {
      id: 6,
      name: "Daniela P.",
      role: "Head of Sales",
      avatar: "https://i.pravatar.cc/150?img=7",
      text: "Il progetto ha superato le aspettative: ROI visibile e team molto competente.",
      rating: 5,
      delay: 0.35,
    },
    {
      id: 7,
      name: "Federico L.",
      role: "CTO, E-commerce",
      avatar: "https://i.pravatar.cc/150?img=9",
      text: "Architettura solida e risultati misurabili. Consigliati per progetti su larga scala.",
      rating: 5,
      delay: 0.4,
    },
    {
      id: 8,
      name: "Elena N.",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?img=21",
      text: "Collaborazione fluida e implementazione precisa, tutto consegnato nei tempi previsti.",
      rating: 5,
      delay: 0.45,
    },
    {
      id: 9,
      name: "Giovanni R.",
      role: "COO",
      avatar: "https://i.pravatar.cc/150?img=27",
      text: "Processi ottimizzati e supporto continuativo: partner affidabile per la nostra crescita.",
      rating: 5,
      delay: 0.5,
    },
    {
      id: 10,
      name: "Martina F.",
      role: "Head of Support",
      avatar: "https://i.pravatar.cc/150?img=30",
      text: "Supporto eccellente e consegna rapida: l'esperienza utente è migliorata notevolmente.",
      rating: 5,
      delay: 0.55,
    },
    {
      id: 11,
      name: "Paolo D.",
      role: "Founder",
      avatar: "https://i.pravatar.cc/150?img=45",
      text: "Soluzione end-to-end: ottima esecuzione e grande attenzione ai dettagli.",
      rating: 5,
      delay: 0.6,
    },
    {
      id: 12,
      name: "Cristina G.",
      role: "Digital Strategist",
      avatar: "https://i.pravatar.cc/150?img=49",
      text: "Creatività e precisione nella strategia digitale: risultati tangibili in poche settimane.",
      rating: 5,
      delay: 0.65,
    },
  ], []);
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <ScrollAnimation animation="fadeIn" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-6 relative inline-block">
            <span className="block text-primary">Recensioni</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Le parole dei nostri clienti: esperienze dirette, impatto reale e risultati misurabili.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-foreground/60">Hai avuto una buona esperienza con noi? <a href="/contact" className="text-accent font-medium">Lascia la tua recensione</a></p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
