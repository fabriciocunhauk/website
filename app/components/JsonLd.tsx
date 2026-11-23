import { SITE_CONFIG } from "@/app/lib/site-config";
import { SOCIAL_LINKS } from "@/app/data/social-links";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.baseUrl,
  jobTitle: SITE_CONFIG.jobTitle,
  sameAs: Object.values(SOCIAL_LINKS),
  description: SITE_CONFIG.shortDescription,
};

// Escape "<" so the serialized JSON can never close the <script> tag early.
const serializedSchema = JSON.stringify(PERSON_SCHEMA).replace(/</g, "\\u003c");

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedSchema }}
    />
  );
}
