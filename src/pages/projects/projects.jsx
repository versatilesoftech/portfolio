import React from 'react'
import ProjectCard from '../../components/project-card/project-card'
import { TabsDemo } from '../../components/tabs'

const Projects = () => {
    return (
        <>
            <div className='w-full min-h-fit px-4 pt-10 sm:pt-10 sm:px-4 md:pt-10 md:px-6 lg:pt-20 lg:px-8'>
                <div className="flex-col  flex items-center justify-center text-center">
                    <p className="text-4xl tracking-normal md:text-5xl  lg:text-6xl uppercase font-semibold text-white">
                        Bringing Visions to Life.
                    </p>
                    <p className='mt-2 lg:mt-7 text-center  w-[88vw] md:w-[65vw] md:leading-10 text-gray-400 sm:text-lg md:text-lg lg:text-[26px] capitalize font-bold'>
                        Explore the projects where our innovation met our clients’ ambition, delivering results that speak for themselves.
                    </p>
                </div>
                <div className=''>
                    <TabsDemo />
                </div>
            </div>
        </>
    )
}

export default Projects
