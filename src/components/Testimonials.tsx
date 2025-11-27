import ScrollAnimation from './ScrollAnimation';
import React from 'react';

const FilledStar = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.17L12 18.896l-7.336 3.972 1.402-8.17L.132 9.21l8.2-1.192L12 .587z" />
  </svg>
);

const Testimonials: React.FC = () => {
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
          {/* Testimonial 1 */}
          <ScrollAnimation animation="slideUp" delay={0.1}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=32" alt="Luca" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Luca B.</div>
                  <div className="text-xs text-foreground/60">CTO, Startup Innovativa</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">
                "Il loro approccio ci ha permesso di lanciare un agente AI che ha ridotto i tempi operativi del 40%.
                Comunicazione chiara e risultati concreti." 
              </p>
            </div>
          </ScrollAnimation>

          {/* Testimonial 2 */}
          <ScrollAnimation animation="slideUp" delay={0.15}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=12" alt="Giulia" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Giulia R.</div>
                  <div className="text-xs text-foreground/60">Responsabile Marketing</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">
                "Campagne ottimizzate dall'AI che hanno incrementato le conversioni del 60%.
                Team proattivo e idea-driven." 
              </p>
            </div>
          </ScrollAnimation>

          {/* Testimonial 3 */}
          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=5" alt="Marco" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Marco S.</div>
                  <div className="text-xs text-foreground/60">Operations Manager</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">
                "Automazioni che hanno eliminato attività ripetitive e liberato 20 ore/settimana per ogni agente.
                Altamente raccomandati." 
              </p>
            </div>
          </ScrollAnimation>

          {/* Testimonial 4 */}
          <ScrollAnimation animation="slideUp" delay={0.25}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=18" alt="Silvia" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Silvia M.</div>
                  <div className="text-xs text-foreground/60">CEO, Retail</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">
                "Consulenza strategica e implementazione rapida: il progetto è stato live in meno di un mese con ROI evidente." 
              </p>
            </div>
          </ScrollAnimation>

          {/* Testimonial 5-12 (duplicati con persone diverse) */}
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=3" alt="Alessandro" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Alessandro V.</div>
                  <div className="text-xs text-foreground/60">Head of Product</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">"Soluzione impeccabile, integrazione rapida e impatto immediato sul flusso di lavoro."</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.35}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=7" alt="Daniela" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Daniela P.</div>
                  <div className="text-xs text-foreground/60">Head of Sales</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">"Il progetto ha superato le aspettative: ROI visibile e team molto competente."</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.4}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=9" alt="Federico" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Federico L.</div>
                  <div className="text-xs text-foreground/60">CTO, E-commerce</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">"Architettura solida e risultati misurabili. Consigliati per progetti su larga scala."</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.45}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=21" alt="Elena" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Elena N.</div>
                  <div className="text-xs text-foreground/60">Product Manager</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">"Collaborazione fluida e implementazione precisa, tutto consegnato nei tempi previsti."</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.5}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=27" alt="Giovanni" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Giovanni R.</div>
                  <div className="text-xs text-foreground/60">COO</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">"Processi ottimizzati e supporto continuativo: partner affidabile per la nostra crescita."</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.55}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=30" alt="Martina" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Martina F.</div>
                  <div className="text-xs text-foreground/60">Head of Support</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">"Supporto eccellente e consegna rapida: l'esperienza utente è migliorata notevolmente."</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.6}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=45" alt="Paolo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Paolo D.</div>
                  <div className="text-xs text-foreground/60">Founder</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">"Soluzione end-to-end: ottima esecuzione e grande attenzione ai dettagli."</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.65}>
            <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://i.pravatar.cc/150?img=49" alt="Cristina" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white">Cristina G.</div>
                  <div className="text-xs text-foreground/60">Digital Strategist</div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                  <FilledStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="ml-2 text-sm text-foreground/60">5.0</div>
              </div>

              <p className="text-white/90 leading-relaxed flex-1">"Creatività e precisione nella strategia digitale: risultati tangibili in poche settimane."</p>
            </div>
          </ScrollAnimation>

        </div>

        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-foreground/60">Hai avuto una buona esperienza con noi? <a href="/contact" className="text-accent font-medium">Lascia la tua recensione</a></p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
