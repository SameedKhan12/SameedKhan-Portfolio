import Image from "next/image"

export default function Nav() {

  return (
    <header className=" px-6 py-7  flex items-center justify-between text-base">
      <div className=" relative w-8 h-8">
        <Image src={"/logo2.svg"} alt={"Project Image"} fill priority />
      </div>
      <nav>
        <ul className="flex items-center justify-between gap-x-8">
          <li className="">Projects</li>
          <li><button className="px-5 py-3 rounded-md bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-[#252728]">Contect</button></li>
        </ul>
      </nav>
    </header>
  )
}
