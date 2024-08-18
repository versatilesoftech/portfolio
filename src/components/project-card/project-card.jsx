import React from 'react';
import Components from '../components';
import './project-card.css';

const ProjectCard = (props) => {
    return (
        <div className="w-full overflow-hidden relative h-fit rounded-2xl p-5  glassmorphism">
            <p className='text-xl md:text-2xl lg:text-4xl font-bold text-white'>{props?.title || ""}</p>
            <p className='text-xs md:text-xl lg:text-2xl text-white mt-1'>{props?.description || ""}</p>
            <div className="flex justify-center items-center mt-3">
                <img
                    src={props?.image || ""}
                    alt="thumbnail"
                    // className="object-cover object-left-top h-[40%]  md:h-[50%] absolute -bottom-10 mt-10 inset-x-0 w-[60%] rounded-xl mx-auto"
                    className="rounded-xl mx-auto my-auto"
                />
            </div>
        </div>
    );
};

export default ProjectCard;
