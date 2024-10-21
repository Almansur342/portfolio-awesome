import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

export default function Blogs() {
  return (
    <div className="rounded-lg bg-white w-full md:p-6 p-4">
      {/* Page header */}
      <div className="flex md:mt-10 mt-4 gap-x-4 justify-start items-center">
        <h1 className="text-[42px] font-bold leading-[60px] roboto-slab shiny-text">
          Blogs
        </h1>
        <div className="w-40 h-[3px] bg-primary"></div>
      </div>

      {/* Placeholder content */}
      <div className="flex flex-col mt-5 items-center justify-center h-64 bg-[#F8FBFB] rounded-lg">
        <FaInfoCircle className="text-4xl text-accent mb-4 animate-pulse" />
        <p className="text-xl text-accent ">Nothing is here</p>
      </div>

      {/* Footer */}
      <p className="text-center mt-6 text-base text-accent py-5 rounded-lg">
        © 2024 All Rights Reserved by{" "}
        <span className="shiny-green-text">Al Mahfuz</span>
      </p>
    </div>
  )
}
