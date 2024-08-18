import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["Web-Development", "App-Development", "Video-Editing", "Graphics-Designing","ERP-CRM","Web-Autometion","Content-Creation"];

  return (
    <div className="h-[35rem] lg:h-[100vh] bg-transparent flex justify-center items-center px-4 ">
      <div className="text-4xl mx-auto bg-transparent font-normal text-neutral-600 dark:text-neutral-400">
        <div className="flex flex-col bg-transparent items-center justify-center">
        <span className="bg-transparent text-white text-2xl font-semibold mb-2 lg:text-5xl">We Provide</span>
        <FlipWords words={words} /> <br />
        </div>
      </div>
    </div>
  );
}