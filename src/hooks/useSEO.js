// src/hooks/useSEO.js
import { useEffect } from 'react';

/**
 * Reusable React Hook that dynamically manages document title, meta descriptions, and updates
 * structured JSON-LD schemas in the document head for LocalBusiness / GeneralContractor.
 */
export default function useSEO({ title, description, schema }) {
  useEffect(() => {
    // 1. Update Document Title
    const finalTitle = title
      ? `${title} | Summit Build Contractors Chicago`
      : 'Summit Build Contractors | Chicago General Contracting & Remodeling';
    document.title = finalTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || "Summit Build Contractors provides dependable residential and commercial construction, kitchen and bathroom remodeling, roofing, siding, and property improvement across Chicagoland.";

    // 3. Inject structured JSON-LD schema
    let schemaScript = document.getElementById('json-ld-seo-schema');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'json-ld-seo-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify(schema);
    } else {
      // Sane default: general LocalBusiness / GeneralContractor schema placeholder
      const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "name": "Summit Build Contractors",
        "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2500 Construction Avenue",
          "addressLocality": "Chicago",
          "addressRegion": "IL",
          "postalCode": "60618",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "41.927",
          "longitude": "-87.697"
        },
        "url": "https://www.summitbuildcontractors.com",
        "telephone": "+13125552026",
        "priceRange": "$$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "08:00",
            "closes": "14:00"
          }
        ],
        "areaServed": [
          "Chicago", "Evanston", "Skokie", "Lincolnwood", "Niles",
          "Park Ridge", "Des Plaines", "Morton Grove", "Glenview",
          "Northbrook", "Oak Park", "River Forest", "Schaumburg", "Naperville"
        ]
      };
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'json-ld-seo-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify(defaultSchema);
    }

    return () => {
      // Cleanup schema scripts on unmount to avoid cluttering Head
      if (schemaScript) {
        schemaScript.innerHTML = '';
      }
    };
  }, [title, description, schema]);
}
