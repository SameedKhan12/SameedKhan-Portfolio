'use client'
import { projects } from '@/constants/cons'
import Image from 'next/image'
import React, { useState } from 'react'

const Projects = () => {
    const [display,setDisplay]=useState(2)
  return (
    <section className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold w-full mb-8">Projects</h2>
                {/* project showcase grtid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">

                    {/* Projects Cards */}
                    {projects.slice(0,display).map((project, index) => (
                        <div className="bg-[#222525] w-full" key={index}>
                            <div className="relative w-full h-[388px] lg:h-[10vw]  ">
                                <Image src={project.image !== undefined ? project.image : "/dummy.png"} alt={"Project Image"} fill priority />
                            </div>

                            <div className="content pl-6 pr-1">
                                <h4 className="mt-8 font-semibold text-xl text-[#D9F2F2]">{project.title}</h4>
                                <div className="flex flex-wrap  gap-3 mt-3 mb-5">
                                    {project.skills.map((skill, index) => (<span key={index} className="px-4 py-2 rounded-md text-xs md:text-[10px] text-[#1F2626] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">{skill}</span>))}
                                    
                                </div>
                                <p className="text-base text-[#BDEBEA] mb-8">{project.description}</p>
                            </div>
                        </div>
                    ))}


                </div>

                {/* See All Projects */}

                <button onClick={()=>setDisplay(display+2)} className="px-[74px] py-[17px] mt-14 rounded-lg text-base font-medium text-[#252728] bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">SEE ALL PROJECTS</button>
            </section>
  )
}

export default Projects
