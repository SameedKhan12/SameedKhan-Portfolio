import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-between text-[#BDEBEA] gap-y-12 mb-24">
            <div className="flex items-center justify-between gap-x-[74px] text-center">
                <div className="flex flex-col gap-y-2 items-center">
                    <Image src={"/Gmail.svg"} width={38} height={38} alt={"Gmail"} />
                    <span className="text-xs">GMAIL</span>
                </div>
                <div className="flex flex-col gap-y-2 items-center">
                    <Image src={"/Linkedin.svg"} width={38} height={38} alt={"Gmail"} />
                    <span className="text-xs">linkedin</span>
                </div>
                <div className="flex flex-col gap-y-2 items-center">
                    <Image src={"/Github.svg"} width={38} height={38} alt={"Gmail"} />
                    <span className="text-xs">GITHUB</span>
                </div>
            </div>
            <ul className="flex justify-center gap-x-12 text-sm">
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <span className="text-sm">WEB DEVELOPER</span>
        </footer>
    )
}
