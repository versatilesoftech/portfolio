import React from "react";
import List_View from "../list-view/list-view";
import Projects from "../projects/projects";
import Services from "../services/services";
import WavyBackgroundDemo from '../../components/wavye-background';
import { TypewriterEffectSmoothDemo } from "../../components/typewriter";
import ScrollText from "../../components/marquee-text/marquee-text";
import Contact from "../contact-us/contact-us";
import announcementVideo from '../../assets/video/announcement_2_1.webm';
import Footer from "../footer/footer";


export default function Hero() {
    return (
        <div>
            <div className="xl:flex  justify-center items-center  h-screen  z-50  text-3xl lg:text-8xl bg-transparent uppercase font-bold overflow-y-hidden">
                <TypewriterEffectSmoothDemo />
                <div className='-z-50'>
                    <WavyBackgroundDemo />
                </div>
            </div>
            <div>
                <List_View mark="animate-marquee" />
            </div>
            {/* <div>
                    <video src={announcementVideo} autoPlay loop muted playsInline className="rounded-lg flex justify-center items-center w-11/12 h-4/6 bg-white mx-auto object-fill"></video>
                </div> */}
            <div id="services">
                <Services />
            </div>
            <div>
                {/* <ScrollerText /> */}
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div>
                <ScrollText />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
