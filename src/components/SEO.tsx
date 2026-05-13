import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, schema }: { title?: string, description?: string, schema?: object }) {
  const defaultTitle = "Streamline | Work Smarter. Achieve More.";
  const defaultDesc = "Streamline helps businesses connect communication, automation, and operations in one intelligent workspace.";
  
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Streamline",
    "url": "https://www.streamline.com",
    "logo": "https://www.streamline.com/images/streamline-logo.png",
    "sameAs": [
      "https://twitter.com/streamline",
      "https://linkedin.com/company/streamline"
    ]
  };

  return (
    <Helmet>
      <title>{title ? `${title} | Streamline` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
