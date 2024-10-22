/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function AboutMe() {
  return (
    <>
      <title>
          Abdullah Al Mahfuz | Top Web Designer & Full Stack Developer in
          Moulvibazar, Sylhet, Bangladesh
        </title>
        <meta
          name="description"
          content="Abdullah Al Mahfuz is a professional web designer and full stack developer based in Moulvibazar, Sylhet, Bangladesh. As the CEO of Qrinux, I specialize in creating SEO-friendly, responsive websites using modern web technologies like React.js and Next.js."
        />
        <meta
          name="keywords"
          content="Web Designer Moulvibazar, Web Developer Sylhet, Full Stack Developer Bangladesh, Abdullah Al Mahfuz, CEO of Qrinux, Responsive Web Design, SEO Expert Bangladesh, React.js Developer, Next.js Developer, IT Solutions Bangladesh, Professional Web Design, Frontend Developer Sylhet, Modern Web Technologies, Qrinux IT Services, User-Centric Web Applications, Web Development Services Moulvibazar, Best Web Designer Sylhet,Web Designer Moulvibazar,company in moulvibazar sylhet,specializes in web application and mobile application, Web Developer in Moulvibazar, best web developer in bangladesh, It Company In Bangladesh,IT Farm in Bangladesh, Web Developer Sylhet, Best Web Developer Bangladesh, Qrinux IT Solutions, Full Stack Web Developer, Abdullah Al Mahfuz,al mahfuz,আব্দুল্লাহ আল মাহফুজ, আল-মাহফুজ,CEO of Qrinux, React.js Developer, Next.js Specialist, Web Development Services, SEO Optimization, Professional Web Design, IT Company Sylhet,IT Companies in Sylhet,specialized in web development,Discover top IT Companies in Sylhet specialized in web development, software development, web design, UI/UX design, digital marketing,web application and digital marketing services, Modern Web Technologies, Web Application Development Bangladesh"
        />
        <meta name="author" content="Abdullah Al Mahfuz" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Abdullah Al Mahfuz | Top Web Designer & Full Stack Developer in Moulvibazar, Sylhet, Bangladesh"
        />
        <meta
          property="og:description"
          content="Discover Abdullah Al Mahfuz, a leading web designer and full stack developer from Moulvibazar, Sylhet, Bangladesh. Specializing in building SEO-optimized, responsive websites with cutting-edge technologies."
        />
        <meta property="og:image" content="/images/thumbnail.png" />
        <meta property="og:url" content="https://almahfuz.me/about" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/thumbnail.png" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://almahfuz.me/about" />

        {/* Structured Data (JSON-LD) for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdullah Al Mahfuz",
              url: "https://almahfuz.me/about",
              sameAs: [
                "https://wa.me/+8801787878743",
                "https://www.facebook.com/profile.php?id=61556525311435",
                "https://github.com/almahfuz2019",
              ],
              jobTitle:
                "Full Stack Web Developer | Web Designer | CEO of Qrinux",
              worksFor: {
                "@type": "Organization",
                name: "Qrinux",
                url: "https://almahfuz.me",
              },
              email: "almahfuz2019@gmail.com",
              telephone: "+8801787878743",
              image: "/images/thumbnail.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Moulvibazar",
                addressRegion: "Sylhet",
                addressCountry: "Bangladesh",
              },
              description:
                "Abdullah Al Mahfuz, CEO of Qrinux, offers top-notch web design and development services in Moulvibazar and Sylhet, Bangladesh. Expert in creating SEO-friendly and responsive websites using the latest web technologies.",
            }),
          }}
        />
 
 <section className="rounded-lg bg-white w-full md:p-6 p-4">
        {/* About Me */}
        <header className="flex md:mt-10 mt-4 gap-x-4 justify-start items-center">
          <h1 className="text-[42px] font-bold leading-[60px] roboto-slab shiny-text">
            About
          </h1>
          <div className="w-40 h-[3px] bg-primary"></div>
        </header>
        <p className="text-base text-accent mt-4 text-justify">
          Hi, I'm{" "}
          <span className="font-medium shiny-green-text">
            Abdullah Al Mahfuz,
          </span>{" "}
          a full-stack web developer and the Founder and CEO of{" "}
          <a
            href="https://qrinux.com/"
            className="font-medium shiny-green-text"
          >
            Qrinux
          </a>
          . Based in Moulvibazar, Sylhet, Bangladesh, I lead a talented team of
          developers who specialize in creating cutting-edge, responsive, and
          SEO-optimized web applications. My role at Qrinux extends beyond
          management; I am actively involved in writing full-stack code using
          modern technologies like React.js, Next.js, Node.js, and MongoDB to
          deliver high-performance, tailored solutions that meet our clients'
          business needs.
          <br />
          <br />
          My expertise lies in building dynamic, mobile-first web solutions,
          focusing on both front-end and back-end development. At Qrinux, we
          prioritize creating user-centric, scalable, and secure applications
          that not only look stunning but also provide a seamless user
          experience. With a deep understanding of the latest web technologies,
          I ensure every project we undertake helps transform our clients'
          digital dreams into reality.
        </p>


        {/* Projects Overview */}
        <div className="bg-[#F8FBFB] py-16 mt-16 mb-16 rounded-lg">
          <h4 className="text-2xl font-medium leading-[36px] text-center mb-8 px-4">
            My Completed Projects in{" "}
            <span className="font-semibold shiny-red-text text-4xl">2024</span>
          </h4>
          <section className="body-font px-4">
            <div className="flex flex-wrap justify-center gap-4 text-center">
              {[
                { count: "37", label: "Total ", bgColor: "#faf7ef" },
                { count: "22", label: "Official ", bgColor: "#EEF5FA" },
                { count: "08", label: "Personal ", bgColor: "#faf7ef" },
                { count: "23", label: "Next.js ", bgColor: "#EEF5FA" },
                { count: "09", label: "React.js ", bgColor: "#EEF5FA" },
                {
                  count: "01",
                  label: "TypeScript ",
                  bgColor: "#faf7ef",
                },
                {
                  count: "02",
                  label: "Full-Stack ",
                  bgColor: "#EEF5FA",
                },
                { count: "05", label: "Webflow ", bgColor: "#faf7ef" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-lg border cursor-default hover:shadow border-[${item.bgColor}] ease-in-out w-[47%] sm:w-36`}
                >
                  <h2 className="title-font font-medium text-4xl mb-2 text-[#0F172A]">
                    {item.count}
                  </h2>
                  <p className="leading-relaxed text-base font-medium text-accent">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Clients Section */}
          <div className="bg-[#F8FBFB] rounded-lg mt-16">
            <h5 className="text-2xl font-medium leading-[36px] text-center shiny-green-text">
              My Valued Clients
            </h5>
            <div className="mt-8">
              <Marquee pauseOnHover="true" pauseOnClick="true">
                {Array(5)
                  .fill("")
                  .map((_, index) => (
                    <Image
                      key={index}
                      src="/public/Images/no_clients.png"
                      alt="Client logo for Qrinux"
                      className="mx-5 rounded-lg"
                      width="100"
                      height="60"
                    />
                  ))}
              </Marquee>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-base text-accent">
          © 2024 All Rights Reserved by{" "}
          <span className="shiny-green-text">Al Mahfuz</span>
        </p>
      </section>

    </>
  )
}
