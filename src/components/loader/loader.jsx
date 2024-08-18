import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VSLoader = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.8,
      }
    );
  });

  return (
    <div className="loading-page z-30 h-full">
      <svg id="svg" viewBox="0 0 392.47 351.3">
        <path
          className="cls1"
          d="M0,38.06s33.31-1.78,56.7,30.33c23.39,32.12,105.67,192.9,105.67,192.9l19.23-33.7L110.82,97.34l-17.25-29.74s-9.71-26.8,18.44-29.56c-10.71-.64-112.01.02-112.01.02Z"
        />
        <path
          className="cls1"
          d="M122.52,313.43s34.69,3.96,61.06-34.69c13.81-20.25,18.83-38.66,19.23-38.66h38.26l-22.8,40.44s-10.71,19.23,12.09,25.97c22.8,6.74,39.45,7.05,39.45,7.05Z"
        />
        <path
          className="cls1"
          d="M196.23,39.38s-64.53,68.46,35.39,137.98c103.62,65.55,104.94,101.5,101.5,133.75,0,0,22.47-17.97,20.35-53.13,0,0,10.04-47.58-81.94-101.77-91.46-58.87-71.57-103.09-75.3-116.84Z"
        />
        <path
          className="cls1"
          d="M277.09,38.45s26.17,2.11,23.79,18.11-27.49,53.92-27.49,53.92h38.33l23.53-41.9s21.94-30.79,57.23-30.13c-27.09.93-115.38,0-115.38,0Z"
        />
      </svg>

      <div className="name-container">
        <div className="logo-name text-[10px] md:text-[14px] lg:text-[20px] text-nowrap">Versatile Softech</div>
      </div>
    </div>
  );
};

export default VSLoader;
