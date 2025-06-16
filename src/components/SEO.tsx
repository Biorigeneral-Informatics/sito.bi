// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogImage = "https://i.imgur.com/UoihSYZ.png",
  ogType = "website"
}: SEOProps) => {
  const siteName = "Biorigeneral Informatics";
  const baseUrl = "https://biorigeneralinformatics.com"; // Sostituisci con il tuo dominio
  
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  
  // Se canonicalUrl non è fornito, costruisci l'URL usando baseUrl + pathname
  const url = canonicalUrl || `${baseUrl}${window.location.pathname}`;

  return (
    <Helmet>
      {/* Title e Description di base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Altri meta tag utili */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      
      {/* Lingua del contenuto */}
      <meta httpEquiv="content-language" content="it" />
    </Helmet>
  );
};

export default SEO;