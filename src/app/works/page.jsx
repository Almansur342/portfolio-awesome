"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { projects } from "../../../public/Data/projects";
import { FaInfoCircle } from 'react-icons/fa'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

export default function page() {
  return (
    <div className="rounded-lg bg-white w-full md:p-6 p-4">
      {/* Title */}
      <div className="flex md:mt-10 mt-4 gap-x-4 justify-start items-center mb-5">
        <h1 className="text-[42px] font-bold leading-[60px] roboto-slab shiny-text">
          Works
        </h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>

      <Tabs>
        <TabList className="flex justify-end mb-4">
          <Tab
            className="px-3 py-2  cursor-pointer border-none bg-none text-xl font-medium"
            selectedClassName="text-primary border-none"
          >
            All
          </Tab>
          <Tab
            className="px-3 py-2 cursor-pointer border-none bg-none text-xl font-medium"
            selectedClassName="text-primary border-none"
          >
            Full Stack
          </Tab>
          <Tab
            className="px-3 py-2 cursor-pointer border-none bg-none text-xl font-medium shiny-text-for-tab"
            selectedClassName="!text-primary border-none"
          >
            Important
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects?.map((project) => (
              <Link key={project?.id} href={`/works/${project?.slug}`}>
                <div
                  className={`relative group p-4 rounded-lg transition-transform transform duration-500 ease-in-out hover:shadow`}
                  style={{ backgroundColor: project?.bgColor }}
                >
                  <div className="overflow-hidden object-cover rounded-lg mb-4">
                    <Image
                      src={project?.imageUrl}
                      alt={project?.title}
                      width={1475}
                      height={830}
                      layout="responsive"
                      className="w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out object-top"
                    />
                  </div>
                  <p className="cursor-pointer text-xl font-medium transition-colors duration-500 ease-in-out">
                    {project?.title}
                  </p>
                  <p className="mt-1 text-sm font-normal transition-colors duration-500 ease-in-out text-accent">
                    {project?.description.split(" ").slice(0, 10).join(" ") +
                      (project?.description.split(" ").length > 10
                        ? "..."
                        : "")}
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-start items-start pt-4 pb-2">
                    {project?.tags?.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700 "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col items-center justify-center h-64 bg-[#F8FBFB] rounded-lg">
            <FaInfoCircle className="text-4xl text-accent mb-4 animate-pulse" />
            <p className="text-xl text-accent">Nothing is here</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects?.slice(0, 4)?.map((project) => (
              <Link key={project?.id} href={`/works/${project?.slug}`}>
                <div
                  className={`relative group p-4 rounded-lg transition-transform transform duration-500 ease-in-out hover:shadow`}
                  style={{ backgroundColor: project?.bgColor }}
                >
                  <div className="overflow-hidden object-cover rounded-lg mb-4">
                    <Image
                      src={project?.imageUrl}
                      alt={project?.title}
                      width={400}
                      height={300}
                      className="w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out bg-black"
                    />
                  </div>
                  <p className="cursor-pointer text-xl shiny-green-text font-medium  transition-colors duration-500 ease-in-out">
                    {project?.title}
                  </p>
                  <p className="mt-1 text-sm font-normal transition-colors duration-500 ease-in-out text-accent">
                    {project?.description.split(" ").slice(0, 10).join(" ") +
                      (project?.description.split(" ").length > 10
                        ? "..."
                        : "")}
                  </p>

                  <div className="flex flex-wrap gap-1.5 justify-start items-start pt-4 pb-2">
                    {project?.tags?.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </TabPanel>
      </Tabs>

      <p className="text-center mt-10 text-base text-accent bg-[#F8FBFB] py-5 rounded-lg">
        © 2024 All Rights Reserved by{" "}
        <span className="shiny-green-text">Al Mahfuz</span>
      </p>
    </div>
  )
}
