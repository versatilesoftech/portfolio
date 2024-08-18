import React from 'react'
import Components from '../../components/components'
import Card from '../../components/card/card'
import CRM from '../../assets/svgs/crm'
import SEO from '../../assets/svgs/seo'
import ContentCreation from '../../assets/svgs/reel'
import GraphicDesign from '../../assets/svgs/gd'
import VideoEditing from '../../assets/svgs/video'
import SMM from '../../assets/svgs/smm'

const Services = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='w-5/6 mt-12'>
                    <div className='text-center'>
                        {/* <span className='text-white text-3xl md:text-5xl lg:text-6xl font-bold'>EXPERTISE</span><br />
                        <span className='text-white text-md md:text-lg lg:text-xl font-normal text-center'>Our expertise spans across the digital landscape, ensuring your business stays ahead of the curve.</span> */}
                        <div className="flex-col  flex items-center justify-center">
                            {/* <p className="text-5xl tracking-wide sm:text-6xl md:text-7xl lg:text-8xl uppercase font-semibold text-white"> */}
                            <p className="text-5xl md:text-5xl lg:text-6xl uppercase font-bold text-white">
                                EXPERTISE
                            </p>
                            <p className='mt-2 lg:mt-7 text-center  w-[65vw] leading-10 text-gray-400 sm:text-lg md:text-lg lg:text-[26px] capitalize font-bold'>Your business, our expertise.</p>
                        </div>
                        <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2'>
                            {/* Web Development */}
                            <Card title={"Web Development"} description={"Crafting websites that don’t just look good, but work seamlessly for your business."} icon={<Components.Icons.Web sx={{ fontSize: "50px" }} />} />

                            {/* App Development */}

                            <Card title={"App Development"} description={"Turning ideas into powerful mobile experiences that engage users and drive results."} icon={<Components.Icons.StayCurrentPortrait sx={{ fontSize: "50px" }} />} />

                            {/* Web Automation */}

                            <Card title={"Web Automation"} description={"Automating the mundane, so you can focus on innovation and growth."} icon={<Components.Icons.Language sx={{ fontSize: "50px" }} />} />

                            {/* AI/ML Integrations */}

                            <Card title={"AI/ML Integrations"} description={"Empowering your business with the intelligence of AI and the efficiency of ML."} icon={<Components.Icons.Psychology sx={{ fontSize: "50px" }} />} />

                            {/* Data Driven Solution */}

                            <Card title={"Data Driven Solutions"} description={"Transforming raw data into actionable insights that drive smart business decisions."} icon={<Components.Icons.QueryStats sx={{ fontSize: "50px" }} />} />

                            {/* ERP/CRM Solutions */}

                            <Card title={"ERP/CRM Solutions"} description={"Streamlining your operations with solutions that understand your unique business needs."} icon={<div className='flex justify-center items-center'><CRM height={"50px"} width={"50px"} /></div>} />

                            {/* SEO */}

                            <Card title={"SEO"} description={"Optimizing your path to the top of search engine results, where visibility meets credibility."} icon={<div className='flex justify-center items-center'><SEO height={"50px"} width={"50px"} /></div>} />


                            {/* Social Media Marketing */}

                            <Card title={"Social Media Marketing"} description={"Connecting your brand with the right audience, one post at a time."} icon={<div className='flex justify-center items-center'><SMM height={"55px"} width={"55px"} /></div>} />

                            {/* Content Creation */}

                            <Card title={"Content Creation"} description={"Creating content that speaks to your audience and strengthens your brand voice."} icon={<div className='flex justify-center items-center'><ContentCreation height={"50px"} width={"50px"} /></div>} />

                            {/* Digital Marketing */}

                            <Card title={"Digital Marketing"} description={"Where strategy meets creativity, and results speak for themselves."} icon={<div className='flex justify-center items-center'><SMM height={"55px"} width={"55px"} /></div>} />

                            {/* Graphic Designing */}

                            <Card title={"Graphic Designing"} description={"Designs that aren’t just seen, but felt-transforming ideas into visual impact."} icon={<div className='flex justify-center items-center'><GraphicDesign height={"50px"} width={"50px"} /></div>} />

                            {/* Video Editing */}

                            <Card title={"Video Editing"} description={"Editing that breathes life into your story, making every second count."} icon={<div className='flex justify-center items-center'><VideoEditing height={"55px"} width={"55px"} /></div>} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
