import React from "react";
import PythonIcon from "../../assets/svgs/python";
import ReactIcon from "../../assets/svgs/react";
import AngularIcon from "../../assets/svgs/angular";
import HTMLIcon from "../../assets/svgs/html";
import CSSIcon from "../../assets/svgs/css";
import DjangoIcon from "../../assets/svgs/django";
import FigmaIcon from "../../assets/svgs/figma";
import JS from "../../assets/svgs/js";
import TS from "../../assets/svgs/ts";
import Mongo from "../../assets/svgs/mongo";
import Marquee from "react-fast-marquee"; // Import the marquee library
import NodeJs from "../../assets/svgs/nodejs";
import Dart from "../../assets/svgs/dart";
import Flask from "../../assets/svgs/flask";
import Flutter from "../../assets/svgs/flutter";
import Express from "../../assets/svgs/express";
import NextJs from "../../assets/svgs/nextjs";
import MySql from "../../assets/svgs/mysql";
import PostgreSQL from "../../assets/svgs/PostgreSQL";
import Illustrator from "../../assets/svgs/Illustrator";
import Photoshop from "../../assets/svgs/photoshop";
import Premier from "../../assets/svgs/premier";
import AfterEffects from "../../assets/svgs/after-effects";
import Docker from "../../assets/svgs/docker";
import Aws from "../../assets/svgs/aws";
import Azure from "../../assets/svgs/azure";
import Kubernetes from "../../assets/svgs/kubernetes";
import Github from "../../assets/svgs/github";
import Gitlab from "../../assets/svgs/gitlab";

const icons1 = [
  { Component: HTMLIcon, alt: "HTML" },
  { Component: CSSIcon, alt: "CSS" },
  { Component: JS, alt: "JavaScript" },
  { Component: TS, alt: "TypeScript" },
  { Component: PythonIcon, alt: "Python" },
  { Component: NodeJs, alt: "Node" },
  { Component: Dart, alt: "Dart" },
  { Component: FigmaIcon, alt: "Figma" },
  { Component: Photoshop, alt: "Photoshop" },
  { Component: Illustrator, alt: "Illustrator" },
  { Component: Premier, alt: "Premier" },
  { Component: AfterEffects, alt: "AfterEffects" },
  { Component: Kubernetes, alt: "Kubernetes" },
  { Component: Github, alt: "Github" },

];

const icons2 = [
  { Component: ReactIcon, alt: "React" },
  { Component: AngularIcon, alt: "Angular" },
  { Component: Flutter, alt: "Flutter" },
  { Component: DjangoIcon, alt: "Django" },
  { Component: Flask, alt: "Flask" },
  { Component: Express, alt: "Express" },
  { Component: NextJs, alt: "NextJs" },
  { Component: MySql, alt: "MySql" },
  { Component: Mongo, alt: "MongoDB" },
  { Component: PostgreSQL, alt: "PostgreSQL"},
  { Component: Docker, alt: "Docker"},
  { Component: Aws, alt: "Aws"},
  { Component: Azure, alt: "Azure"},
  { Component: Gitlab, alt: "Gitlab"},
];

function List_View() {
  return (
    <div className="relative overflow-hidden h-80 w-full space-y-8">
      {/* First Marquee (Black & White with Hover Color Effect) */}
      <Marquee gradient={false}>
        {icons1?.map(({ Component, alt }, index) => (
          <div
            key={index}
            className="mx-12 transition duration-300"
          >
            <Component alt={alt} height="75px" width="75px" />
          </div>
        ))}
      </Marquee>

      <Marquee gradient={false} direction="right">
        {icons2?.map(({ Component, alt }, index) => (
          <div
            key={index}
            className="mx-12 transition duration-300"
          >
            <Component alt={alt} height="75px" width="75px" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default List_View;