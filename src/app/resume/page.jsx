import Image from 'next/image';
import React from 'react'

export default function page() {
  const skills = [
    "CSS",
    "DaisyUI",
    "typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Next Auth",
    "Firebase",
    "Passport js",
    "React-Firebase-Hooks",
    "React-Router-DOM v6",
    "Redux",
    "Redux Toolkit",
    "DevTools",
    "Webflow(CMS)",
    "Cloud Server",
    "Recharts",
    "Git",
    "GitHub",
    "VSCode",
    "AOS Animation",
    "MS Office",
    "Adobe Photoshop",
    "Microcontroller",
  ];
  return (
    <div className="rounded-lg bg-white w-full md:p-6 p-4">
      {/* Resume Title */}
      <div className="flex md:mt-10 mt-4 gap-x-4 justify-start items-center">
        <h1 className="text-[42px] font-bold leading-[60px] roboto-slab shiny-text">
          Resume
        </h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>

      <div className="grid grid-cols-1 gap-16 mt-6">
        {/* Education Section */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center leading-none mb-2">
            <Image
              src="/images/education.webp"
              width="30"
              height="27"
              alt="Education Icon"
            />
            <h5 className="text-[26px] font-medium">Education</h5>
          </div>
          <div className="bg-[#faf7ef] rounded-lg py-[15px] px-[20px]">
            <p className="text-base text-accent mb-1">2023-Present</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              B.Sc. in Computer Science and Engineering (CSE)
              <span className="text-accent block font-normal">
                Metropolitan University
              </span>
            </h5>
          </div>
          <div className="bg-[#EEF5FA] rounded-lg py-[15px] px-[20px]">
            <p className="text-base text-accent mb-1">2018-2023</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              Diploma in Engineering (Computer Science and Technology)
              <span className="text-accent block font-normal">
                Moulvibazar Polytechnic Institute
              </span>
            </h5>
          </div>
          <div className="bg-[#faf7ef] rounded-lg py-[15px] px-[20px]">
            <p className="text-base text-accent mb-1">2017-2018</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              Dakhil
              <span className="text-accent block font-normal">
                Moulvibazar Jamea Islamia Dakhil Madrasah
              </span>
            </h5>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 items-center leading-none mb-2">
            <Image
              src="/images/Experience.webp"
              width="30"
              height="27"
              alt="Experience Icon"
            />
            <h5 className="text-[26px] font-medium">Experience</h5>
          </div>
          <div className="bg-[#EEF5FA] rounded-lg py-[15px] px-[20px]">
            <p className="text-base text-accent mb-1">October 2024 - Present</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              Founder And CEO
              <span className="text-accent block font-normal">
                Qrinux, Bangladesh
              </span>
            </h5>
          </div>
          <div className="bg-[#faf7ef] rounded-lg py-[15px] px-[20px]">
            <p className="text-base text-accent mb-1">
              Feb 2024 - October 2024
            </p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              Frontend Developer (
              <span className="text-primary">React.js and Next.js</span>)
              <span className="text-accent block font-normal">
                TechPlato, Inc. (Canada)
              </span>
            </h5>
          </div>
          <div className="bg-[#EEF5FA] rounded-lg py-[15px] px-[20px]">
            <p className="text-base text-accent mb-1">Feb 2023 - June 2023</p>
            <h5 className="text-xl text-[#0F172A] font-medium">
              Guest Teacher (Computer Science and Technology)
              <span className="text-accent block font-normal">
                Moulvibazar Polytechnic Institute
              </span>
            </h5>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 mt-16 bg-[#F8FBFB] rounded-lg px-6">
        <div className="grid grid-cols-1 gap-6">
          {/* Working Skills */}
          <div>
            <h5 className="text-2xl font-semibold leading-[36px] mb-6 ">
              Technical Skills
            </h5>
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-[#d1bc17]">
                    JavaScript
                  </span>
                  <span className="text-base font-medium text-[#d1bc17]">
                    Intermediate
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-[#d1bc17] h-1.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-black">
                    Next.js
                  </span>
                  <span className="text-base font-medium text-black">
                    Expert
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-black h-1.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-[#4bafcb]">
                    React.js
                  </span>
                  <span className="text-base font-medium text-[#4bafcb]">
                    Expert
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-[#4bafcb] h-1.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-[#2c928d]">
                    TailwindCSS
                  </span>
                  <span className="text-base font-medium text-[#2c928d]">
                    Expert
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-[#2c928d] h-1.5 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-[#7952B3]">
                    Bootstrap
                  </span>
                  <span className="text-base font-medium text-[#7952B3]">
                    Expert
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-[#7952B3] h-1.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-8">
            <h5 className="text-2xl font-semibold leading-[36px] mb-6 ">
              Soft Skills
            </h5>
            <div className="flex flex-wrap gap-x-2 gap-y-4">
              {skills.map((skill) => (
                <div className="flex items-center gap-4" key={skill}>
                  <p className="text-base text-accent bg-[#EDF2F2] py-[5px] px-[20px] rounded transition duration-300 ease-in-out transform hover:bg-gray-200 cursor-context-menu ">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-6 text-base text-accent">
        © 2024 All Rights Reserved by{" "}
        <span className="shiny-green-text">Al Mahfuz</span>
      </p>
    </div>
  )
}
