## DECRIZIONE, STRUTTURA E PROCEDURE STANDARD

La cartella components contiene elementi riutilizzabili dell'interfaccia utente
che vengono utilizzati in diverse pagine dell'applicazione. 
Questi componenti sono progettati per essere modulari, riutilizzabili e mantenibili.

Convenzioni per i componenti:

- Ogni componente è in un file separato con estensione .tsx
- I nomi dei file usano il PascalCase (es. ComponentName.tsx)
- I componenti accettano props tipizzate con interfacce TypeScript
- I componenti sono esportati come default
- Si utilizza il pattern functional component con React Hooks


## PROCEDURA STANDARD SVILUPPO DI NUOVI COMPONENTI
Crea un nuovo file nella cartella src/components seguendo la convenzione PascalCase (es. MyComponent.tsx)

Utilizza la seguente struttura di base:
tsximport { useState, useEffect } from 'react';

interface MyComponentProps {
  // Definisci le props qui
}

const MyComponent = ({ /* props */ }: MyComponentProps) => {
  // Logica del componente
  return (
    <div className="...">
      {/* Rendering del componente */}
    </div>
  );
};

export default MyComponent;

## IMPORTAZIONE COMPONENTI (Ad esempio nelle pagine)
Importa il componente dove necessario:
tsximport MyComponent from '../components/MyComponent';

oppure: import ScrollAnimation from '../components/ScrollAnimation'; (ESEMPIO USANDO IL NOME DELLA FUNZIONE)



NOTA FINALE: Per i commit, push e pull request, utilizzare le stesse best practices che utilizziamo per gli altri progetti e applicazioni.