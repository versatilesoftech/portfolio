import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import TextGenerateEffectDemo from "./text-gen";
export function TypewriterEffectSmoothDemo() {
  const words = [
    [
      {
        text: "The",
      },
      {
        text: "IT",
      },
      {
        text: "industry",
      },
      {
        text: "is",
      },
      {
        text: "super",
      },
      {
        text: "diverse,",
      },
      {
        text: "like",
      },
      {
        text: "we",
        className: "text-blue-300 dark:text-blue-300",
      },
      {
        text: "are!",
        className: "text-blue-300 dark:text-blue-300",
      },
    ],
    [
      { text: "We" },
      { text: "fill" },
      { text: "in" },
      { text: "the" },
      { text: "tech" },
      { text: "your", className: "text-blue-300 dark:text-blue-300" },
      { text: "brand", className: "text-blue-300 dark:text-blue-300" },
      { text: "needs", className: "text-blue-300 dark:text-blue-300" },
    ],
    [
      { text: "We" },
      { text: "fill" },
      { text: "in" },
      { text: "the" },
      { text: "gap" },
      { text: "your", className: "text-blue-300 dark:text-blue-300" },
      { text: "business", className: "text-blue-300 dark:text-blue-300" },
      { text: "faces", className: "text-blue-300 dark:text-blue-300" },
    ],
    [
      { text: "We" },
      { text: "fill" },
      { text: "in" },
      { text: "the" },
      { text: "vision" },
      { text: "of" },
      { text: "your", className: "text-blue-300 dark:text-blue-300" },
      { text: "brand", className: "text-blue-300 dark:text-blue-300" },
    ],
  ];

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < words.length) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 5000);

      return () => clearInterval(timer);
    } else {
      setCounter(0);
    }
  }, [counter]);

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] w-full">
      <TextGenerateEffectDemo />
      {(counter == 0 && <TypewriterEffectSmooth words={words[counter]} />)} 
      {(counter == 1 && <TypewriterEffectSmooth words={words[counter]} />)} 
      {(counter == 2 && <TypewriterEffectSmooth words={words[counter]} />)} 
      {(counter == 3 && <TypewriterEffectSmooth words={words[counter]} />)} 
      
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}
