import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import profPic from "/chan-prof-pic.png"

export function Home() {
    return (
        <div className="flex justify-around items-center">
            <div className="mx-auto py-8">
                <h1 className="text-white font-bold text-4xl">
                    Hi, I'm Chan!
                </h1>
            </div>
            <div className="">
                    <img className="" src={profPic}/>
            </div>
        </div>
    )
}