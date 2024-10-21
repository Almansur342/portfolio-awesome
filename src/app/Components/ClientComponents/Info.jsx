"use client";
const { default: dynamic } = require("next/dynamic");

const TypewriterComponent = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

export {TypewriterComponent};