export const metadata = {
  title:
    "Tech Insights & Tutorials by Abdullah Al Mahfuz | Full Stack Development Blogs",
  description:
    "Explore the latest insights, tutorials, and thoughts on Full Stack Web development, React.js, Next.js, and web technologies by Abdullah Al Mahfuz. Stay updated with cutting-edge trends and best practices.",
  keywords:
    "Full Stack Web Development Blog, React.js Tutorials, Next.js Guides, Web Development Insights, Abdullah Al Mahfuz, JavaScript Blogs, Tech Tutorials, Web Technologies, Abdullah Al Mahfuz, Mahfuz, Al Mahfuz, Son of Faruque Ahmad, Mahfuzur Rahman, Mahfuj, Abdullah Al Mahfuj, Abdullah, Abdullahalmahfuz, Moulvibazar Best Developer, Experienced Developer, Frontend Developer, React.js Expert, Next.js Specialist, JavaScript Developer, TailwindCSS Expert, Web Development, SEO Optimization, Modern Web Technologies, Portfolio, Web Design, Responsive Web Design, UI/UX Design, Software Engineer, Web Application Developer, API Integration, Progressive Web Apps, Open Source Contributor, Code Reviewer, Bangladesh Developer, Software Development, TechPlato Inc, Metropolitan University, B.Sc. in Computer Science, React Developer, Next.js Developer, UI/UX Designer, Web Performance Optimization, Frontend Technologies, User-Centered Design, Cross-Browser Compatibility, Performance Tuning, Web Accessibility, Frontend Frameworks, Mobile-First Design, Custom Web Solutions, Frontend Architecture, Agile Development, Technical SEO, Frontend Best Practices, E-Commerce Development, Interactive Web Applications, Website Usability, Client-Side Programming, Frontend Engineering, Data-Driven Development, High-Performance Websites, Innovative Web Solutions, Professional Web Development, Modern Frontend Techniques, JavaScript Frameworks, Scalable Web Applications, Advanced Web Technologies, User Experience Enhancement",
  author: "Abdullah Al Mahfuz",
  openGraph: {
    title:
      "Tech Insights & Tutorials by Abdullah Al Mahfuz | Full Stack Web Development Blogs",
    description:
      "Join Abdullah Al Mahfuz as he shares his expertise in Full Stack Web development with in-depth blogs on React.js, Next.js, and the latest web technologies.",
    url: "https://almahfuz.me/blogs",
    images: [
      {
        url: "/images/thumbnail.png",
        alt: "Tech Insights & Tutorials Thumbnail",
        width: 1200,
        height: 630,
      },
    ],
    site_name: "Abdullah Al Mahfuz - Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title:
      "Tech Insights & Tutorials by Abdullah Al Mahfuz | Full Stack Web Development Blogs",
    description:
      "Explore blogs on Full Stack Web development, React.js, Next.js, and web technologies.",
    card: "summary_large_image",
    images: [
      {
        url: "/images/thumbnail.png",
        alt: "Tech Insights & Tutorials Thumbnail",
      },
    ],
  },
  robots: "index, follow",
  canonical: "https://almahfuz.me/blogs",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Tech Insights & Tutorials by Abdullah Al Mahfuz",
    description:
      "Explore blogs on Full Stack Web development, React.js, Next.js, and web technologies.",
    author: {
      "@type": "Person",
      name: "Abdullah Al Mahfuz",
      url: "https://almahfuz.me/blogs",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://almahfuz.me/blogs",
    },
    sameAs: [
      "https://wa.me/+8801787878743",
      "https://www.facebook.com/profile.php?id=61556525311435",
      "https://github.com/almahfuz2019",
      "https://www.linkedin.com/in/abdullah-al-mahfuz-ceo-of-qrinux/",
      "https://qrinux.com/",
    ],
    image: "/images/thumbnail.png",
    url: "https://almahfuz.me/blogs",
    datePublished: "2024-01-01", // Update with actual publish date
  },
};

export default function BlogsLayout({ children }) {
  return <>{children}</>;
}
