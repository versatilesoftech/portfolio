import React from "react";
import { Tabs } from "../components/ui/tabs";
import "./components.css";
import ProjectCard from "./project-card/project-card";
import coldy from "../assets/imgs/Frame1.png";
import jhoom from '../assets/imgs/Frame2.png';
import pizzapulse from '../assets/imgs/Frame3.png';
import talkflow from '../assets/imgs/Frame4.png';


export function TabsDemo() {
  const tabs = [
    {
      title: "Coldy",
      value: "Coldy",
      content: (
        <ProjectCard
          title={"Coldy Bevarges"}
          description={"Coldy Brevenge is a digital management app replacing paper-based operations. It streamlines order taking, customer management, inventory control, and more, using React, Express, MongoDB, and Node.js"}
          image={coldy}
        />
      ),
    },
    {
      title: "Jhoom",
      value: "Jhoom",
      content: (
        <ProjectCard
          title={"Jhoom "}
          description={"Jhoom is a secure real-time communication app built with Flutter and Firebase. Offering encrypted video conferencing, screen sharing, and chat, it ensures private and confidential meetings."}
          image={jhoom}
        />
      ),
    },
    {
      title: "PizzaPulse",
      value: "PizzaPulse",
      content: (
        <ProjectCard
          title={"Pizza Pulse"}
          description={"Pizza Pulse is a web app revolutionizing pizza restaurants. It streamlines orders, inventory, and customer experience with real-time tracking, built on React, Node.js, MongoDB, Express, Tailwind, and Socket.io."}
          image={pizzapulse}
        />
      ),
    },
    {
      title: "TalkFlow",
      value: "TalkFlow",
      content: (
        <ProjectCard
          title={"TalkFlow"}
          description={"Talk Flow is a private messaging app designed for seamless, uninterrupted conversations. Create exclusive groups, share freely, and enjoy a clutter-free chatting experience. Built with React Native, Node.js, PostgreSQL, and more, it ensures speed, security, and reliability."}
          image={talkflow}
        />
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[30rem] lg:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-10 mb-20">
      <Tabs tabs={tabs} />
    </div>
  );
}
