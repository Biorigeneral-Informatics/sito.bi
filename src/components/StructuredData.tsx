// src/components/StructuredData.tsx
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'website' | 'organization' | 'service' | 'product';
  data?: any;
}

const StructuredData = ({ type}: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    };

    switch (type) {
      case 'website':
        return {
          ...baseData,
          "@type": "WebSite",
          "name": "Biorigeneral Informatics",
          "url": "https://biorigeneralinformatics.com",
          "description": "AI Agency e Software Engineering per PMI",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://biorigeneralinformatics.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "sameAs": [
            "https://linkedin.com/company/biorigeneralinformatics",
            "https://twitter.com/biorigeneralinformatics"
          ]
        };

      case 'organization':
        return {
          ...baseData,
          "@type": "Organization",
          "name": "Biorigeneral Informatics",
          "url": "https://biorigeneralinformatics.com",
          "logo": "https://i.imgur.com/UoihSYZ.png",
          "description": "AI Agency specializzata in software engineering e soluzioni digitali per PMI",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Salara 2/A",
            "addressLocality": "Roseto Degli Abruzzi",
            "addressRegion": "Abruzzo",
            "postalCode": "64026",
            "addressCountry": "IT"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://linkedin.com/company/biorigeneralinformatics",
            "https://twitter.com/biorigeneralinformatics"
          ]
        };

      case 'service':
        return {
          ...baseData,
          "@type": "Service",
          "serviceType": "Software Development",
          "provider": {
            "@type": "Organization",
            "name": "Biorigeneral Informatics"
          },
          "areaServed": "Italy",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sviluppo Software PMI"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Chatbot AI"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Agenti AI"
                }
              }
            ]
          }
        };

      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;