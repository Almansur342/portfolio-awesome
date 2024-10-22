import Image from 'next/image'
import React from 'react'
import {FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp} from "react-icons/fa"
import { MdOutlineAttachEmail, MdPhoneAndroid } from "react-icons/md";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { TypewriterComponent } from '../ClientComponents/Info';

export default function BasicInfo() {
  return (
   <>
    <title>
          Abdullah Al Mahfuz - Best Web Designer & Developer in Moulvibazar,
          Sylhet, Bangladesh | CEO of Qrinux
        </title>
        <meta
          name="description"
          content="Abdullah Al Mahfuz is a professional full-stack web developer based in Moulvibazar and Sylhet,Dhaka, Bangladesh. As the CEO of Qrinux, he offers top-notch web design, React.js, and Next.js development services."
        />
        <meta
          name="keywords"
          content="Web Designer Moulvibazar,company in moulvibazar sylhet,specializes in web application and mobile application, Web Developer in Moulvibazar, best web developer in bangladesh, It Company In Bangladesh,IT Farm in Bangladesh, Web Developer Sylhet, Best Web Developer Bangladesh, Qrinux IT Solutions, Full Stack Web Developer, Abdullah Al Mahfuz,al mahfuz,আব্দুল্লাহ আল মাহফুজ, আল-মাহফুজ,CEO of Qrinux, React.js Developer, Next.js Specialist, Web Development Services, SEO Optimization, Professional Web Design, IT Company Sylhet,IT Companies in Sylhet,specialized in web development,Discover top IT Companies in Sylhet specialized in web development, software development, web design, UI/UX design, digital marketing,web application and digital marketing services, Modern Web Technologies, Web Application Development Bangladesh"
        />
        <meta name="author" content="Abdullah Al Mahfuz" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Abdullah Al Mahfuz - Best Web Designer & Developer in Moulvibazar, Sylhet, Bangladesh | CEO of Qrinux"
        />
        <meta
          property="og:description"
          content="Abdullah Al Mahfuz is a seasoned web designer and full-stack developer specializing in React.js and Next.js. Based in Moulvibazar and Sylhet, Bangladesh, he is the CEO of Qrinux IT Solutions."
        />
        <meta property="og:image" content="/images/thumbnail.png" />
        <meta property="og:url" content="https://almahfuz.me/basicInfo" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/thumbnail.png" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://almahfuz.me/basicInfo" />

        {/* Structured Data (JSON-LD) for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdullah Al Mahfuz",
              url: "https://almahfuz.me/",
              sameAs: [
                "https://wa.me/+8801787878743",
                "https://www.facebook.com/profile.php?id=61556525311435",
                "https://github.com/almahfuz2019",
                "https://www.linkedin.com/in/abdullah-al-mahfuz-a852d/",
              ],
              jobTitle: "CEO of Qrinux | Web Designer & Developer",
              worksFor: {
                "@type": "Organization",
                name: "Qrinux",
                url: "https://almahfuz.me",
              },
              email: "almahfuz2019@gmail.com",
              telephone: "+8801787878743",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Moulvibazar",
                addressRegion: "Sylhet",
                addressCountry: "Bangladesh",
              },
              birthDate: "2000",
              image: "/images/thumbnail.png",
              description:
                "Abdullah Al Mahfuz is the CEO of Qrinux, a full-stack web designer and developer specializing in modern web technologies including React.js and Next.js. Based in Moulvibazar and Sylhet, he offers professional IT solutions across Bangladesh.",
            }),
          }}
        />
         <div className="flex justify-center items-center lg:sticky top-2 z-20">
        <div className="bg-white mt-40 rounded-lg px-6 shadow-lg w-full lg:w-auto md:w-[90vw]">
          <div className="relative">
            <Image
              src="/images/Abdullah_al_mahfuz.png"
              alt="Abdullah Al Mahfuz - Best Web Developer in Moulvibazar"
              className="w-full md:w-96 lg:w-80 mx-auto object-cover rounded-lg -mt-40  shadow-2xl"
              width={500}
              height={500}
              priority={true}
            />
          </div>
          <div className="py-6 text-center">
            <h2 className="text-[26px] font-medium leading-[39px] roboto-slab shiny-text">
              Abdullah Al Mahfuz
            </h2>
            <p className="text-black text-sm my-2 font-medium leading-[28px] bg-secondary rounded-lg py-[4px] px-[20px]">
              <TypewriterComponent
                options={{
                  strings: [
                    "Full-Stack Developer",
                    "Next.js Developer",
                    "React.js Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <div className="flex justify-center space-x-4 my-4">
              <a
                href="https://github.com/almahfuz2019"
                className="text-[#000000] bg-secondary p-2 rounded-lg transition duration-300 ease-in-out hover:text-white hover:bg-[#1b74e4] transform hover:scale-110"
              >
                <FaGithub className="text-xl leading-[20px]" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556525311435"
                className="text-[#1773EA] bg-secondary p-2 rounded-lg transition duration-300 ease-in-out hover:text-white hover:bg-[#1b74e4] transform hover:scale-110"
              >
                <FaFacebookF className="text-xl leading-[20px]" />
              </a>

              <a
                href="https://wa.me/+8801787878743"
                className="text-[#00da78] bg-secondary p-2 rounded-lg transition duration-300 ease-in-out hover:text-white hover:bg-[#1b74e4] transform hover:scale-110"
              >
                <FaWhatsapp className="text-xl leading-[20px]" />
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-al-mahfuz-a852d/"
                className="text-[#144679] bg-secondary p-2 rounded-lg transition duration-300 ease-in-out hover:text-white hover:bg-[#1b74e4] transform hover:scale-110"
              >
                <FaLinkedinIn className="text-xl leading-[20px]" />
              </a>
            </div>

            <div className="space-y-3 mt-8 bg-secondary p-6 rounded-lg">
              <div className="flex items-center space-x-2 border-b-1 border-x-0 border-t-0 pb-3 border border-gray-200">
                <div className="p-2 rounded-lg shadow-md bg-white">
                  <MdPhoneAndroid className="text-[#E94189] text-2xl" />
                </div>
                <div className="text-base justify-start items-start flex flex-col">
                  <p className="text-xs text-accent">Phone</p>
                  <a href="tel:+8801787878743" className="text-black">
                    +880 1787-878743
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 border-b-1 border-x-0 border-t-0 pb-3 border border-gray-200">
                <div className="p-2 rounded-lg shadow-md bg-white">
                  <MdOutlineAttachEmail className="text-[#6AB5CB] text-2xl" />
                </div>
                <div className="text-base justify-start items-start flex flex-col">
                  <p className="text-xs text-accent flex gap-x-1 items-center">
                    Email{" "}
                    <span className="relative flex h-2 w-2 ">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02ff8d] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00b966]"></span>
                    </span>
                  </p>
                  <a
                    href="mailto:almahfuz2019@gmail.com"
                    className="text-black"
                  >
                    almahfuz2019@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 border-b-1 border-x-0 border-t-0 pb-3 border border-gray-200">
                <div className="p-2 rounded-lg shadow-md bg-white">
                  <FaMapMarkerAlt className="text-[#FD7590] text-2xl" />
                </div>
                <div className="text-base justify-start items-start flex flex-col">
                  <p className="text-xs text-accent">Location</p>
                  <p>Moulvibazar, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 pb-3 hover:bg-gray-100">
                <div className="p-2 rounded-lg shadow-md bg-white">
                  <FaCalendarAlt className="text-[#C77CED] text-2xl" />
                </div>
                <div className="text-base justify-start items-start flex flex-col">
                  <p className="text-xs text-accent">Year of Birth</p>
                  <p>2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
