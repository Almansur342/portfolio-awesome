import React from 'react'
import BasicInfo from './Components/Common/BasicInfo';
import AboutMe from './Components/Common/AboutMe';

export const metadata = {
  title: "About Abdullah Al Mahfuz | Full Stack Web Developer",
  description:
    "Learn more about Abdullah Al Mahfuz, a skilled Full Stack Web Developer specializing in React.js and Next.js. Discover my background, experience, and expertise.",
  keywords:
    "Abdullah Al Mahfuz, Frontend Developer, React.js, Next.js, Web Development, About Me, Developer Background, Abdullah Al Mahfuz Portfolio, Web Design, UI/UX Design",
  author: "Abdullah Al Mahfuz",
  openGraph: {
    title: "About Abdullah Al Mahfuz | Full Stack Web Developer",
    description:
      "Explore the background and experience of Abdullah Al Mahfuz, a professional Full Stack Web Developer with expertise in React.js and Next.js.",
    url: "https://almahfuz.me/about",
    images: [
      {
        url: "/images/profile_thumbnail.png",
        alt: "Abdullah Al Mahfuz Profile Thumbnail",
        width: 1200,
        height: 630,
      },
    ],
    site_name: "Abdullah Al Mahfuz - Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "About Abdullah Al Mahfuz | Full Stack Web Developer",
    description:
      "Explore the background and experience of Abdullah Al Mahfuz, a professional Full Stack Web Developer with expertise in React.js and Next.js.",
    card: "summary_large_image",
    images: [
      {
        url: "/images/profile_thumbnail.png",
        alt: "Abdullah Al Mahfuz Profile Thumbnail",
      },
    ],
  },
  robots: "index, follow",
  canonical: "https://almahfuz.me/about",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Al Mahfuz",
    url: "https://almahfuz.me/about",
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
    image: "/images/profile_thumbnail.png",
    description:
      "About Abdullah Al Mahfuz, a skilled Full Stack Web Developer specializing in React.js and Next.js. Discover my background, experience, and expertise.",
  },
};

export default function page() {
  return (
    <div>
     <div className="lg:hidden block">
        <BasicInfo />
      </div>
      <div className="hidden lg:block">
        <AboutMe />
      </div>
    </div>
  )
}
