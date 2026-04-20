import React from 'react'

const JsonLd: React.FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fabriciocunha.vercel.app'
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fabricio Cunha",
    "url": baseUrl,
    "jobTitle": "Frontend Developer",
    "sameAs": [
      "https://www.linkedin.com/in/fabricio-cunha-7b7392162/",
      "https://github.com/fabriciocunhauk",
      "https://stackoverflow.com/users/13144771/fabricio-cunha"
    ],
    "description": "Frontend Developer passionate about building fast, beautiful, and user-friendly web experiences."
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default JsonLd
