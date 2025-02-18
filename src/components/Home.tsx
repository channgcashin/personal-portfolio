import { TypeAnimation } from "react-type-animation"
import profPic from "/chan-prof-pic.png"

export function Home() {
    return (
        <div id="home" className="static md:flex justify-around items-center h-full">
            <div className="w-full md:w-1/2">
                <div className="p-8 md:pr-0 mx-auto">
                   <h1 className="lg:text-6xl text-4xl font-bold text-center text-zinc-400">
                            Hi, I'm <span className="lg:text-6xl text-4xl font-bold text-center text-yellow-500">Chan</span>
                    </h1> 
                    <h2 className="lg:text-4xl md:text-2xl sm:text-lg font-bold text-center text-zinc-400">
                        a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                ' software engineer.',
                                1500,
                                ' full stack dev.',
                                1500,
                                ' boilermaker.',
                                1500,
                                ' coder.',
                                1500,
                            ]}
                            className="text-yellow-500 font-mono"
                            repeat={Infinity}
                            />
                    </h2>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                    <div className="md:pt-8 md:pr-8 mx-auto">
                        <img className="border-2 border-zinc-800 border-b-yellow-500" src={profPic}/>
                    </div>
            </div>
        </div>
    )
}