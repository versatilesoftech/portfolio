import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollText.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ScrollText = (props) => {
    const textRef = useRef(null);

    useGSAP(() => {
        const element = textRef.current;

        gsap.to('.text h3', {
            transform: 'translateX(-150%)',
            duration: 30,
            ease: 'none',
            repeat: -1,
        });

    })

    return (
        <div className="move my-[3rem] md:my-[6rem] lg:my-[5rem]">
            <div className="text">
                <h3 className='text-[1.5rem] md:text-[2.3rem] lg:text-[4rem]'>{props?.text || "Beyond tech, beyond limits ● key to unlocking your business potential ● Where your tech journey ends ●"}</h3>
                <h3 className='text-[1.5rem] md:text-[2.3rem] lg:text-[4rem]'>{props?.text || "Beyond tech, beyond limits ● key to unlocking your business potential ● Where your tech journey ends ●"}</h3>
                {/* <h3 className='text-[1.5rem] md:text-[2.3rem] lg:text-[4rem]'>{props?.text || "key to unlocking your business potential"}</h3> */}
                {/* <h3 className='text-[1.5rem] md:text-[2.3rem] lg:text-[4rem]'>{props?.text || "Where your tech journey ends."}</h3> */}
                {/* <h3 className='text-[1.5rem] md:text-[2.3rem] lg:text-[4rem]'>{props?.text || ""}</h3>
                <h3 className='text-[1.5rem] md:text-[2.3rem] lg:text-[4rem]'>{props?.text || ""}</h3>
                <h3 className='text-[1.5rem] md:text-[2.3rem] lg:text-[4rem]'>{props?.text || ""}</h3>
                <h3 className='text-[1.5rem] md:text-[2.3rem] lg:text-[4rem]'>{props?.text || ""}</h3> */}
            </div>
        </div>
    );
};

export default ScrollText;
