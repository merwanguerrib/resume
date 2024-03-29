import React from 'react';
import { Helmet } from 'react-helmet';

export const SchemaMarkup = () => (
  <Helmet>
    <script type="application/ld+json">
      {`
       {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Merwan Guerrib",
        "jobTitle": "Fullstack Developer",
        "email": "merwanguerrib@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Marseille",
        },
        "sameAs": [
          "https://www.linkedin.com/in/merwanguerrib",
          "https://github.com/merwanguerrib/merwanguerrib",
          "https://twitter.com/mrwn211"
        ]
      }
      `}
    </script>
  </Helmet>
);
