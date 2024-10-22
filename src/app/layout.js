import BasicInfo from "./Components/Common/BasicInfo";
import Navbar from "./Components/Common/Navbar";
import Navbar_For_Top from "./Components/Common/Navbar_For_Top";
import "./globals.css";
import { Roboto_Slab, Poppins } from "next/font/google";

// fonst
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Abdullah Al Mahfuz - Expert Frontend Developer | React.js & Next.js",

  description:
    "I am Abdullah Al Mahfuz, an expert frontend developer specializing in Next.js, React.js, and modern web technologies. Discover my projects, skills, and experience.",
  keywords:
    "Abdullah Al Mahfuz, Mahfuz, Al Mahfuz, Son of Faruque Ahmad, Mahfuzur Rahman, Mahfuj, Abdullah Al Mahfuj, Abdullah, Abdullahalmahfuz, Moulvibazar Best Developer, Experienced Developer, Frontend Developer, React.js Expert, Next.js Specialist, JavaScript Developer, TailwindCSS Expert, Web Development, SEO Optimization, Modern Web Technologies, Portfolio, Web Design, Responsive Web Design, UI/UX Design, Software Engineer, Web Application Developer, API Integration, Progressive Web Apps, Open Source Contributor, Code Reviewer, Bangladesh Developer, Software Development, TechPlato Inc, Metropolitan University, B.Sc. in Computer Science, React Developer, Next.js Developer, UI/UX Designer, Web Performance Optimization, Frontend Technologies, User-Centered Design, Cross-Browser Compatibility, Performance Tuning, Web Accessibility, Frontend Frameworks, Mobile-First Design, Custom Web Solutions, Frontend Architecture, Agile Development, Technical SEO, Frontend Best Practices, E-Commerce Development, Interactive Web Applications, Website Usability, Client-Side Programming, Frontend Engineering, Data-Driven Development, High-Performance Websites, Innovative Web Solutions, Professional Web Development, Modern Frontend Techniques, JavaScript Frameworks, Scalable Web Applications, Advanced Web Technologies, User Experience Enhancement",
  author: "Abdullah Al Mahfuz",
  openGraph: {
    title:
      "Abdullah Al Mahfuz - Expert Frontend Developer | React.js & Next.js",
    description:
      "Discover the professional portfolio of Abdullah Al Mahfuz, showcasing expertise in Next.js, React.js, and cutting-edge web development. See my latest projects and technical skills.",
    url: "https://almahfuz.me",
    images: [
      {
        url: "/Images/thumbnail.png",
        alt: "Abdullah Al Mahfuz Portfolio Thumbnail",
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
      "Abdullah Al Mahfuz - Expert Frontend Developer | React.js & Next.js",
    description:
      "Connect with Abdullah Al Mahfuz, a skilled frontend developer with expertise in Next.js, React.js, and modern web technologies. View my portfolio and recent work.",
    card: "summary_large_image",
    images: [
      {
        url: "/images/thumbnail.png",
        alt: "Abdullah Al Mahfuz Portfolio Thumbnail",
      },
    ],
  },
  robots: "index, follow",
  canonical: "https://almahfuz.me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={`${robotoSlab.className} ${poppins.className}`}>
      <div className="container mx-auto max-w-screen-xl md:px-4 px-2">
          <Navbar_For_Top/>
        </div>
        <div className="container block lg:hidden items-start mx-auto justify-center pb-24 md:pt-10 pt-14 gap-6 max-w-screen-xl md:px-4 px-2">
          {children}
        </div>
        <div className="container lg:flex hidden items-start mx-auto justify-between pb-24 md:pt-10 pt-14 gap-6 max-w-screen-xl md:px-4 px-2">
          <BasicInfo />
          {children}

          {/* <SpeedInsights /> */}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
