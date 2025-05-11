
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Taylab',
  description = 'Taylab equips the next generation with the virtues to lead—not just succeed. The definitive system for character-driven leadership development.',
  type = 'website',
  name = 'Taylab Leadership',
  imageUrl = 'https://example.com/taylab-og-image.jpg' // Replace with actual image URL when available
}) => {
  const location = useLocation();
  const currentUrl = `https://taylab.com${location.pathname}`;

  // Create JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Taylab Leadership',
    url: 'https://taylab.com',
    logo: 'https://taylab.com/logo.png', // Replace with actual logo URL
    description: 'The definitive system for character-driven leadership development',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@taylab.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/taylab',
      'https://twitter.com/taylab'
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
