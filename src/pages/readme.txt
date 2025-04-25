## DECRIZIONE, STRUTTURA E PROCEDURE STANDARD

La cartella pages contiene componenti di livello superiore che rappresentano pagine intere dell'applicazione.
Ogni pagina è associata a una route specifica definita in App.tsx.

## STRUTTURA DELLE PAGINE

- Home.tsx: Landing page principale con presentazione dell'azienda e sezioni dei servizi.
- Products.tsx: Pagina del catalogo prodotti con filtri, effetti interattivi e showcase dettagliato.
- Services.tsx: Pagina dei servizi offerti con descrizioni e vantaggi.
- AIAgents.tsx: Pagina dedicata ai servizi di intelligenza artificiale con caratteristiche e demo.
- Chatbots.tsx: Pagina specifica per i servizi di chatbot e assistenti virtuali.
- Developers.tsx: Pagina che presenta i team di sviluppo disponibili e le loro competenze.
- SoftwarePMI.tsx: Pagina dedicata alle soluzioni software per piccole e medie imprese.
- GrowthPlans.tsx: Pagina per i piani di crescita aziendale con pricing e offerte.
- Contact.tsx: Pagina con modulo di contatto, mappa e informazioni di contatto.


Convenzioni per le pagine:

- Sezione hero con titolo e sottotitolo
- Sezioni di contenuto con componenti riutilizzabili
- Call-to-action finali
- Utilizzo di animazioni di scroll e parallax per migliorare l'esperienza utente


## PROCEDURA STANDARD SVILUPPO DI NUOVE PAGINE (ESEMPIO)
// src/pages/NewPage.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconOne, IconTwo } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import CTASection from '../components/CTASection';

const NewPage = () => {
  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Page Title</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Page description and introduction
        </p>
      </motion.div>
      
      {/* Content Sections */}
      <ScrollAnimation animation="fadeIn" className="mb-16">
        {/* Section content */}
      </ScrollAnimation>
      
      {/* Additional sections */}
      
      {/* CTA */}
      <CTASection 
        title="Call to Action Title"
        description="Call to action description text"
        buttonText="Action Text"
        buttonLink="/link-url"
      />
    </div>
  );
};

export default NewPage;

## IMPORTAZIONE COMPONENTI
Importa il componente dove necessario:
tsximport MyComponent from '../components/MyComponent';

oppure: import ScrollAnimation from '../components/ScrollAnimation'; (ESEMPIO USANDO IL NOME DELLA FUNZIONE)


NOTA FINALE: Per i commit, push e pull request, utilizzare le stesse best practices che utilizziamo per gli altri progetti e applicazioni.