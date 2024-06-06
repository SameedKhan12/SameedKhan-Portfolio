import { projects, skills } from "@/constants/cons";
import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import Projects from "./Projects";

export default function Hero() {

    return (
        <div className="mx-10 lg:mx-auto">
            <section className="mt-7 lg:mt-24 mb-9 lg:mb-[130px]">
                <div className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between items-center">
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-[50%]">
                        <h3 className="text-[#D7E5EC] text-base lg:text-xl">WEB DEVELOPER</h3>
                        <h1 className="bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] inline-block text-transparent bg-clip-text text-4xl lg:text-7xl font-semibold">Sameed Khan</h1>
                        <p className="text-[#BDEBEA] text-base text-center lg:text-left my-4 lg:mb-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                        <button className="bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] px-5 py-3 rounded-md text-[#252728] font-medium">Contect Me</button>
                    </div>
                    <div className="relative w-[90%] h-[60vw] lg:w-[500px] lg:h-[500px]">
                        <Image src={"/Hero.svg"} alt={"Hero Image"} fill priority />
                    </div>
                </div>
                <div className="hidden lg:flex justify-center animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 9 16"><path fill="currentColor" d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5" /><path fill="currentColor" d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
                </div>
            </section>
            <section className="my-9 lg:my-[130px] flex items-start lg:items-end">
                <span className="h-[116px] w-[5px] shrink-0 my-2 mr-4 bg-gradient-to-t from-[#00F5A0] to-[#00D9F5] rounded-md" />
                <div className="flex flex-col items-start">
                    <h2 className="text-2xl font-semibold">About me</h2>
                    <div className=" text-lg w-full lg:w-3/4">The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.</div>
                </div>
            </section>
            {/* Projects */}
            <Projects/>
            {/* Skills */}
            <section className="mb-60 mt-32">
                <h2 className="text-2xl font-semibold mb-8">Skills</h2>
                <div className="grid lg:grid-cols-5 gap-y-14 grid-cols-3 ">
                    {skills.map((skill, index) => (

                        <div className="flex flex-col items-center lg:data-[last=true]:col-start-3 lg:data-[last=true]:col-end-4" key={index} data-last={index === skills.length - 1} >
                            <div className="relative w-[120px] h-[120px] lg:w-[110px] lg:h-[110px] md:w-[90px] md:h-[90px]">
                                <Image src={skill.icon} fill priority />
                            </div>
                            <p className="text-base text-[#BDEBEA]">{skill.name}</p>
                        </div>
                    ))
                    }
                </div>
            </section>
        </div>
    )
}
