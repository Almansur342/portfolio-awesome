import React from "react";

// Define and export metadata for the contact layout
export const metadata = {
  title: "Get in Touch with Abdullah Al Mahfuz | Full Stack Web Developer",
  description:
    "Contact Abdullah Al Mahfuz, a dedicated Full Stack Web Developer specializing in React.js and Next.js. Reach out for web development inquiries, collaborations, or partnerships.",
  keywords:
    "Contact Abdullah Al Mahfuz, Frontend Developer, React.js, Next.js, Web Development Inquiries, Collaborations, Partnerships, Abdullah Al Mahfuz, Mahfuz, Al Mahfuz, Son of Faruque Ahmad, Mahfuzur Rahman, Mahfuj, Abdullah Al Mahfuj, Abdullah, Abdullahalmahfuz, Moulvibazar Best Developer, Experienced Developer, Frontend Developer, React.js Expert, Next.js Specialist, JavaScript Developer, TailwindCSS Expert, Web Development, SEO Optimization, Modern Web Technologies, Portfolio, Web Design, Responsive Web Design, UI/UX Design, Software Engineer, Web Application Developer, API Integration, Progressive Web Apps, Open Source Contributor, Code Reviewer, Bangladesh Developer, Software Development, TechPlato Inc, Metropolitan University, B.Sc. in Computer Science, React Developer, Next.js Developer, UI/UX Designer, Web Performance Optimization, Frontend Technologies, User-Centered Design, Cross-Browser Compatibility, Performance Tuning, Web Accessibility, Frontend Frameworks, Mobile-First Design, Custom Web Solutions, Frontend Architecture, Agile Development, Technical SEO, Frontend Best Practices, E-Commerce Development, Interactive Web Applications, Website Usability, Client-Side Programming, Frontend Engineering, Data-Driven Development, High-Performance Websites, Innovative Web Solutions, Professional Web Development, Modern Frontend Techniques, JavaScript Frameworks, Scalable Web Applications, Advanced Web Technologies, User Experience Enhancement,Web Designer Moulvibazar,company in moulvibazar sylhet,specializes in web application and mobile application, Web Developer in Moulvibazar, best web developer in bangladesh, It Company In Bangladesh,IT Farm in Bangladesh, Web Developer Sylhet, Best Web Developer Bangladesh, Qrinux IT Solutions, Full Stack Web Developer, Abdullah Al Mahfuz,al mahfuz,আব্দুল্লাহ আল মাহফুজ, আল-মাহফুজ,CEO of Qrinux, React.js Developer, Next.js Specialist, Web Development Services, SEO Optimization, Professional Web Design, IT Company Sylhet,IT Companies in Sylhet,specialized in web development,Discover top IT Companies in Sylhet specialized in web development, software development, web design, UI/UX design, digital marketing,web application and digital marketing services, Modern Web Technologies, Web Application Development Bangladesh",
  author: "Abdullah Al Mahfuz",
  openGraph: {
    title: "Get in Touch with Abdullah Al Mahfuz | Full Stack Web Developer",
    description:
      "Looking to collaborate on a project? Contact Abdullah Al Mahfuz, an expert in React.js and Next.js, for high-quality web development solutions.",
    url: "https://almahfuz.me/contact",
    images: [
      {
        url: "/images/contact_thumbnail.png",
        alt: "Get in Touch with Abdullah Al Mahfuz",
        width: 1200,
        height: 630,
      },
    ],
    site_name: "Abdullah Al Mahfuz - Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Get in Touch with Abdullah Al Mahfuz | Full Stack Web Developer",
    description:
      "Contact Abdullah Al Mahfuz, an expert in React.js and Next.js, for high-quality web development solutions.",
    card: "summary_large_image",
    images: [
      {
        url: "/images/contact_thumbnail.png",
        alt: "Get in Touch with Abdullah Al Mahfuz",
      },
    ],
  },
  robots: "index, follow",
  canonical: "https://almahfuz.me/contact",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Al Mahfuz",
    url: "https://almahfuz.me/contact",
    sameAs: [
      "https://wa.me/+8801787878743",
      "https://www.facebook.com/profile.php?id=61556525311435",
      "https://github.com/almahfuz2019",
      "https://www.linkedin.com/in/abdullah-al-mahfuz-ceo-of-qrinux/",
      "https://qrinux.com/",
    ],
    jobTitle: "Full Stack Web Developer | React.js and Next.js Specialist",
    worksFor: {
      "@type": "Organization",
      name: "https://almahfuz.me",
    },
    email: "almahfuz2019@gmail.com",
    telephone: "+8801787878743",
    image: "/images/contact_thumbnail.png",
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
