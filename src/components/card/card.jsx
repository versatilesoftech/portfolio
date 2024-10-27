import React, { useRef, useEffect } from 'react';
import Components from '../components';
import gsap from 'gsap';
import './card.css';

const Card = (props) => {
  const circleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const circle = circleRef.current;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = card.getBoundingClientRect();
      const xPos = clientX - left;
      const yPos = clientY - top;

      gsap.to(circle, {
        x: xPos - card.offsetWidth / 2,
        y: yPos - card.offsetHeight / 2,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const onMouseEnter = () => {
      gsap.to(circle, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    };

    const onMouseLeave = () => {
      gsap.to(circle, { opacity: 0, duration: 0.3, ease: 'power2.out' });
    };

    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="card-container p-3 text-white col-span-1 mt-3" data-aos="zoom-in">
      <div ref={cardRef} className="card rounded-lg border">
        <div ref={circleRef} className="mesh-circle"></div>
        <div className="title text-lg md:text-xl lg:text-2xl font-extrabold">
          {props.icon}
        </div>
        <div className="title mt-3 text-2xl md:text-xl lg:text-2xl font-extrabold">
          <p>{props?.title || ""}</p>
        </div>
        <div className="content mt-2 text-sm md:text-sm lg:text-sm text-gray-300">
          <p>{props?.description || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
