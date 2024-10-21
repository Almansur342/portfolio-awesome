"use client";
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import React from 'react'
import { projects } from "../../../../public/Data/projects";
import { FaExternalLinkAlt, FaGithub, FaLock, FaUser } from 'react-icons/fa';

export default function WorkDetails() {
  const params = useParams();
  const { slug } = params;

  const project = projects.find((p) => p.slug === slug);
  // console.log(projects)

  if (!project) {
    notFound();
    return null;
  }
  return (
    <div className="rounded-lg bg-white w-full md:p-6 p-4">
      <div className="flex md:mt-10 mt-4 gap-x-4 justify-start items-center mb-5 flex-wrap">
        <h1 className="text-[42px] font-bold leading-[60px] roboto-slab shiny-text">
          {project.title}
        </h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>

      <div className="mt-10 flex flex-col">
        <div>
          <div className="overflow-hidden object-cover rounded-lg mb-4">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1475}
              height={830}
              layout="responsive"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-wrap gap-1.5 justify-start items-start pt-4 pb-2">
            {project?.tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 border border-primary border-opacity-10 rounded-full px-2 py-0.5 text-xs font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-base leading-6 text-accent mt-4 text-justify">
            {project.description}
          </p>
        </div>

        <div className="mt-10 text-left max-w-xl">
          <h2 className="text-2xl font-medium leading-[36px] text-black shiny-green-text">
            Features
          </h2>
          <ul className="list-disc list-inside text-base text-accent mt-4 space-y-2">
            {project?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-left">
          <h2 className="text-2xl font-medium leading-[36px] shiny-green-text">
            Website Testing Overview
          </h2>
          <ol className="relative mt-4 ml-4 border-l border-primary pl-6 md:pl-8">
            {project?.screenshots?.map((screenshot, index) => (
              <div
                key={index}
                className="overflow-hidden w-full object-cover h-auto rounded-lg mb-4"
              >
                <li className="mb-4">
                  <span className="absolute flex items-center justify-center w-5 h-5 ml-[6px] bg-primary rounded-full -start-4 ring-1 ring-primary animate-spin"></span>
                  <div className="flex items-center justify-start flex-wrap gap-y-2">
                    <h3 className="leading-tight shiny-green-text font-medium">
                      {screenshot.name}
                    </h3>
                    <span className="mx-2 text-black"> | </span>
                    <div>
                      <a
                        className="text-base hover:text-primary hover:underline underline-offset-4 hover:decoration-primary text-primary flex items-center gap-2"
                        href={`${screenshot?.liveLink}`}
                      >
                        <FaExternalLinkAlt />
                        Check Live Result
                      </a>
                    </div>
                  </div>
                </li>
                <Image
                  src={screenshot.src}
                  alt={`${project.title} Screenshot`}
                  width={800}
                  height={600}
                  className="w-full object-cover border border-gray-300 rounded-lg mb-6 shadow"
                />
              </div>
            ))}
          </ol>
        </div>

        <div className="text-left py-16 mt-16 bg-[#F8FBFB] rounded-lg px-6">
          <h2 className="text-2xl mb-3 font-medium leading-[36px] shiny-green-text">
            Project Links{" "}
          </h2>
          <div className="flex flex-wrap justify-start gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaExternalLinkAlt /> Live Link
            </a>
            |
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <FaGithub /> GitHub Link
            </a>
          </div>
          {project.loginDetails && (
            <div className="mt-10">
              <h2 className="text-2xl mb-3 font-medium leading-[36px]">
                Login Details
              </h2>
              <div className="flex flex-wrap justify-start gap-4">
                <p className="flex items-center gap-2 text-primary">
                  <FaUser /> {project.loginDetails.username}
                </p>
                |
                <p className="flex items-center gap-2 text-primary">
                  <FaLock /> {project.loginDetails.password}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-center mt-6 text-base text-accent">
        © 2024 All Rights Reserved by{" "}
        <span className="shiny-green-text">Al Mahfuz</span>
      </p>
    </div>
  );
}
