/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import emailjs from "emailjs-com";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const onSubmit = (data) => {
    emailjs
      .send("service_t9kakly", "template_q8u09us", data, "JhoXCyazG5qKFOqOo")
      .then((response) => {
        // console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true);
        setErrorMessage(""); // Clear any previous error messages
        reset(); // Reset form fields after submission
      })
      .catch((err) => {
        // console.error("FAILED...", err);
        setErrorMessage("Failed to send the message. Please try again later."); // Set the error message
      });
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Hide success message after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);
  return (
    <div className="rounded-lg bg-white w-full md:p-6 p-4">
      {isSubmitted ? (
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-semibold roboto-slab text-primary">
              Thank you for reaching out!
            </h2>
            <p className="text-lg md:text-xl mt-4">
              I have received your message and will get back to you shortly.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex md:mt-10 mt-4 gap-x-4 justify-start items-center">
            <h1 className="text-[42px] font-bold leading-[60px] roboto-slab shiny-text">
              Contact
            </h1>
            <div className="w-40 h-[3px] bg-primary"></div>
          </div>
          <div className="bg-[#F8FBFB] p-6 rounded-lg mt-6">
            <p className="mt-4 text-2xl text-accent">
              I'm Always Open To Discussing
            </p>
            <p className="font-bold mt-2  uppercase text-2xl lg:text-3xl shiny-green-text">
              work or partnerships.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="mb-4">
                <input
                  placeholder="Name *"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 block w-full border bg-transparent border-b-1 border-gray-400 border-x-0 border-t-0 py-4 px-3 focus:border-none "
                />
                {errors.name && (
                  <p className="text-red-600 mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email *"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Email is not valid",
                    },
                  })}
                  className="mt-1 block w-full border bg-transparent border-b-1 border-gray-400 border-x-0 border-t-0 py-4 px-3 focus:border-none"
                />
                {errors.email && (
                  <p className="text-red-600 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4 mt-8">
                <textarea
                  placeholder="Message *"
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="mt-1 block w-full border border-gray-400 shadow-sm py-2 px-3 focus:ring-primary focus:border-primary border-x-0 border-t-0"
                  rows="4"
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent text-base bg-[#1b74e4] font-medium rounded-lg shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 ease-in-out transform hover:bg-primary-dark hover:scale-105 hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
            {errorMessage && (
              <p className="text-red-600 mt-4 text-center">{errorMessage}</p> // Display error message
            )}
          </div>
          <p className="text-center mt-6 text-base text-accent">
            © 2024 All Rights Reserved by{" "}
            <span className="shiny-green-text">Al Mahfuz</span>
          </p>
        </>
      )}
    </div>
  )
}
