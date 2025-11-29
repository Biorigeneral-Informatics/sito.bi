import ScrollAnimation from './ScrollAnimation';
import React, { useMemo } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  initials: string;
  text: string;
  rating: number;
  delay: number;
}

const FilledStar = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.17L12 18.896l-7.336 3.972 1.402-8.17L.132 9.21l8.2-1.192L12 .587z" />
  </svg>
);

// Componente avatar con iniziali
const AvatarWithInitials = ({ initials }: { initials: string }) => {
  const colors = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500', 'from-indigo-500 to-purple-500'];
  const colorIndex = initials.charCodeAt(0) % colors.length;
  
  return (
    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center flex-shrink-0 shadow-md`}>
      <span className="text-white font-bold text-sm">{initials}</span>
    </div>
  );
};

// Componente singola testimonianza memoizzata
const TestimonialCard = React.memo(({ testimonial }: { testimonial: Testimonial }) => (
  <ScrollAnimation animation="slideUp" delay={testimonial.delay}>
    <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <AvatarWithInitials initials={testimonial.initials} />
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
      id: 4,
      name: "Riccardo Dell' Orletta",
      role: "Founder, DarkWave Sup",
      avatar: "",
      initials: "RD",
      text: "Cercavo una piccola automazione per la mia attività di noleggio SUP a Pineto, e devo riconoscere che ho trovato due ragazzi esperti e abili nel captare la richiesta e strutturare l'automazione. COMPLIMENTI a questa REALTA'! Grazie Federico e Alessandro. Professionalità e cordialità unica!",
      rating: 5,
      delay: 0.25,
    },
    {
      id: 2,
      name: "Dr. Donato Zizi",
      role: "Direttore Sanitario, Bioclinic",
      avatar: "",
      initials: "DZ",
      text: "Federico e Alessandro hanno dato vita a questa realtà in totale autonomia e ora gestiscono tutto il nostro ecosistema di innovazione digitale. Abbiamo aumentato la produttività del 40%.",
      rating: 5,
      delay: 0.15,
    },
    {
      id: 6,
      name: "Alessandro Binotti",
      role: "SEA Manager, Laboratorio",
      avatar: "",
      initials: "AB",
      text: "Abbiamo sviluppato un software per la classificazione rifiuti insieme, hanno fatto un ottimo lavoro nel identificare i calcoli complessi necessari.",
      rating: 5,
      delay: 0.35,
    },
    {
      id: 8,
      name: "Alessandro Gobbi",
      role: "SEO Specialist, Freelance",
      avatar: "",
      initials: "AG",
      text: "Federico mi ha trasmesso grandi entusiasmo e competenza nell'ambito dell'integrazione di AI negli ecosistemi aziendali, voglia di condividere e di fornire valore alle aziende tramite il proprio lavoro.",
      rating: 5,
      delay: 0.45,
    },
    {
      id: 9,
      name: "Giovanni Marchetti",
      role: "Responsabile IT, Manifattura",
      avatar: "",
      initials: "GM",
      text: "Abbiamo sviluppato diversi software con loro ed offrono un supporto serio e veloce. Inoltre, mi piace molto il concetto di manutenzione per interventi.",
      rating: 5,
      delay: 0.5,
    },
        {
      id: 1,
      name: "Luca Salini",
      role: "Avvocato, Freelance",
      avatar: "",
      initials: "LS",
      text: "Professionale, competente, chiaro nelle spiegazioni, puntuale negli aggiornamenti, attento ad ogni dettaglio anche nell'ambito della sicurezza e della manutenzione e dell'assistenza. Inoltre massima disponibilità ed affidabilità con pronta reperibilità in ogni momento.",
      rating: 5,
      delay: 0.1,
    },
    {
      id: 11,
      name: "Paolo Ferraro",
      role: "Founder, Startup Innovation",
      avatar: "",
      initials: "PF",
      text: "Ragazzi in gamba, che comprendonod avvero le esigenze delle aziende, con un approccio pratico e moderno. Bravi.",
      rating: 5,
      delay: 0.6,
    },
    {
      id: 12,
      name: "Gianluca Prati",
      role: "Backend Developer",
      avatar: "",
      initials: "GP",
      text: "Giovani ragazzi competenti, disponibili e attenti alle esigenze. Hanno sviluppato un gestionale con AI per la mia attività di consulenza e sono molto soddisfatto del risultato.",
      rating: 5,
      delay: 0.65,
    },
  ], []);
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 relative z-10">
        <ScrollAnimation animation="fadeIn" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-6 relative inline-block">
            <span className="block text-primary">Cosa dicono di noi</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Le parole dei nostri clienti: esperienze dirette e impatto sulla loro realtà aziendale.
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
