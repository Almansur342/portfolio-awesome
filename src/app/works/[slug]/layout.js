import { projects } from "../../../../public/Data/projects";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project could not be found.",
    };
  }

  return {
    title: project.title || "Project Details",
    description:
      project.description ||
      "Explore the detailed project information, features, and technology stack used by Abdullah Al Mahfuz.",
    keywords:
      (project.tags && project.tags.join(", ")) ||
      "project, details, web development, React.js, Next.js, TailwindCSS, Firebase, Abdullah Al Mahfuz, Mahfuz, Al Mahfuz, Son of Faruque Ahmad, Mahfuzur Rahman, Mahfuj, Abdullah Al Mahfuj, Abdullah, Abdullahalmahfuz, Moulvibazar Best Developer, Experienced Developer, Frontend Developer, React.js Expert, Next.js Specialist, JavaScript Developer, TailwindCSS Expert, Web Development, SEO Optimization, Modern Web Technologies, Portfolio, Web Design, Responsive Web Design, UI/UX Design, Software Engineer, Web Application Developer, API Integration, Progressive Web Apps, Open Source Contributor, Code Reviewer, Bangladesh Developer, Software Development, TechPlato Inc, Metropolitan University, B.Sc. in Computer Science, React Developer, Next.js Developer, UI/UX Designer, Web Performance Optimization, Frontend Technologies, User-Centered Design, Cross-Browser Compatibility, Performance Tuning, Web Accessibility, Frontend Frameworks, Mobile-First Design, Custom Web Solutions, Frontend Architecture, Agile Development, Technical SEO, Frontend Best Practices, E-Commerce Development, Interactive Web Applications, Website Usability, Client-Side Programming, Frontend Engineering, Data-Driven Development, High-Performance Websites, Innovative Web Solutions, Professional Web Development, Modern Frontend Techniques, JavaScript Frameworks, Scalable Web Applications, Advanced Web Technologies, User Experience Enhancement",
    author: "Abdullah Al Mahfuz",
    openGraph: {
      title: project.title || "Project Details",
      description:
        project.description ||
        "Explore the detailed project information, features, and technology stack used by Abdullah Al Mahfuz.",
      url: `https://almahfuz.me/works/${project.slug}`,
      images: [
        {
          url: project.imageUrl || "/images/thumbnail.png",
          alt: project.title || "Project Details",
          width: 1200,
          height: 630,
        },
      ],
      site_name: "Abdullah Al Mahfuz - Portfolio",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: project.title || "Project Details",
      description:
        project.description ||
        "Explore the detailed project information, features, and technology stack used by Abdullah Al Mahfuz.",
      card: "summary_large_image",
      images: [
        {
          url: project.imageUrl || "/images/thumbnail.png",
          alt: project.title || "Project Details",
        },
      ],
    },
    robots: "index, follow",
    canonical: `https://almahfuz.me/works/${project.slug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abdullah Al Mahfuz",
      url: `https://almahfuz.me/works/${project.slug}`,
      sameAs: [
        "https://wa.me/+8801787878743",
        "https://www.facebook.com/profile.php?id=61556525311435",
        "https://github.com/almahfuz2019",
      ],
      jobTitle: "Frontend Developer | Next.js and React.js Specialist",
      worksFor: {
        "@type": "Organization",
        name: "https://almahfuz.me",
      },
      email: "almahfuz2019@gmail.com",
      telephone: "+8801787878743",
      image: project.imageUrl || "/images/thumbnail.png",
      description: project.description,
    },
  };
}

export default function WorkDetailsLayout({ children }) {
  return <>{children}</>;
}
