import Navbar from "@/components/Navbar/landingNavbar";
import Image from "next/image";
import { FaGoogle, FaYoutube } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="w-screen flex flex-col" id="home">
      {/* style={{background: 'radial-gradient(circle, rgb(226, 221, 228) 20%, rgb(56, 97, 144) 100%)'}} */}
      <div className=" bg-[#cfcfe2]" >
        <header className="bg-transparent backdrop-blur-md drop-shadow-lg">
          <Navbar/>
        </header>
        <div className="mx-auto flex flex-col gap-5 w-[90%]" id="hero">
          <div className="flex justify-between items-center">
            <div className="flex px-5 py-10 mt-20 flex-col gap-10">
            <span className="flex flex-col gap-5">
              <span className="flex items-end gap-3"><h1 className="text-3xl font-semibold ">DFund</h1><h3 className="text-sm pb-1">Let&apos;s Raise some Fund together.</h3></span>
              <h3 className="text-5xl">Dfund is A Fundraising Platform, Which let&apos;s you raise fund by creating campaigns and attract other&apos;s attention.</h3>
            </span>
            <div className="flex gap-3 text-md text-nowrap">
              <h3 className="drop-shadow-sm text-black px-3 py-2 bg-white rounded-md">Create Campaign, Ask For funding</h3>
              <h3 className="bg-white text-black px-3 py-2 drop-shadow-sm rounded-md">Let it be viral</h3>
              <h3 className="bg-white px-3 py-2 text-black drop-shadow-sm rounded-md">If someone likes your campaign, He can donate to you.</h3>
            </div>
            </div>
            <div className="">
              <Image src="/landing.png" alt="fundraiser" width={1500} height={1500} />
            </div>
          </div>
          <div className="mx-auto p-10">
            <h3 className="text-2xl text-center">Trusted By:</h3>
            <div className="flex justify-between items-center gap-10">
              <span className="text-3xl font-semibold">Google</span>
              <span className="flex items-center text-xl"><FaYoutube/>YouTube</span>
              <span className="text-xl font-bold">Facebook</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center" id="about">
        <h3 className="text-3xl font-semibold">Who we are?</h3>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto ducimus, voluptas impedit commodi eligendi obcaecati error deleniti deserunt mollitia, placeat sint eos? Voluptatum eligendi unde mollitia dolor distinctio molestias alias pariatur sit nisi obcaecati quas perferendis, recusandae nobis culpa quod dolore quidem corrupti quo voluptatibus iste provident temporibus! Sint! <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta recusandae porro accusamus? Eos sint, molestias iure quis voluptas illum nesciunt consectetur aliquid molestiae tempora dolor harum saepe. Aspernatur nam eum eligendi ratione saepe fuga, sapiente incidunt ullam temporibus fugiat! Aliquid commodi, facere dolorum in voluptatem amet accusamus accusantium et!
        </p>
      </div>
    </main>
  );
}
