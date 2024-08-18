import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default function ScrollerText(){
    const TextRef = useRef(null);

    useGSAP(()=>{
        gsap.from(TextRef.current,{
            x:500,
            duration:2,
            ease:"power1",
            scrollTrigger:{
                scroller:"body",
                trigger:TextRef.current,
                markers:false,
                start:"top 90%",
                end:"top 30%",
                scrub:4
            }
        })
    })

    return(
        <div className="flex p-10 lg:text-9xl md:text-6xl sm:text-7xl  justify-center text-[#0077B6] items-center">
            <span id="scrollText" ref={TextRef}>
                still here?
            </span>
        </div>
    )
}