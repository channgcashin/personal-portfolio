/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon, TrainFrontTunnel } from "lucide-react"
import C from "/C.png";

export function Navbar() {
  return (
    <header className="fixed bg-zinc-800 lg:border-b-4 lg:border-b-yellow-500 flex h-20 w-full shrink-0 items-center px-4 md:px-6 justify-between top-0 left-0 z-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="lg:hidden text-yellow-500 hover:text-zinc-800" variant="outline">
            <MenuIcon/>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-zinc-800">
          <a href="#" className="mr-6 lg:flex h-20">
            <img className="border-b-2 border-b-yellow-500 h-20" src={C}/>
            <span className="sr-only">Chan Ng Cashin</span>
          </a>
          <div className="grid gap-2 py-6">
            <a href="#home" className="flex rounded-md w-full items-center py-2 text-lg font-semibold bg-zinc-800 px-4 py-2 text-lg text-yellow-500 font-md hover:bg-yellow-500 hover:text-zinc-800 active:bg-yellow-700 active:text-zinc-800 focus:bg-yellow-500 focus:text-zinc-800">
              Home
            </a>
            <a href="#about" className="flex rounded-md w-full items-center py-2 text-lg font-semibold bg-zinc-800 px-4 py-2 text-lg text-yellow-500 font-md hover:bg-yellow-500 hover:text-zinc-800 active:bg-yellow-700 active:text-zinc-800 focus:bg-yellow-500 focus:text-zinc-800">
              About
            </a>
            <a href="#contact" className="flex rounded-md w-full items-center py-2 text-lg font-semibold bg-zinc-800 px-4 py-2 text-lg text-yellow-500 font-md hover:bg-yellow-500 hover:text-zinc-800 active:bg-yellow-700 active:text-zinc-800 focus:bg-yellow-500 focus:text-zinc-800">
              Contact
            </a>
          </div>
        </SheetContent>
      </Sheet> 
      <a href="#" className="mr-6 lg:flex">
        <img className="h-full max-h-20 object-contain lg:border-b-2 lg:border-b-yellow-500" src={C} alt="Chan Ng Cashin"/>
        <span className="sr-only">Chan Ng Cashin</span>
      </a>
      <nav className="ml-auto hidden lg:flex gap-6">
        <a
          href="#home"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-lg text-yellow-500 font-md hover:bg-yellow-500 hover:text-zinc-800 active:bg-yellow-700 active:text-zinc-800 focus:bg-yellow-500 focus:text-zinc-800"
        >
          Home
        </a>
        <a
          href="#about"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-lg text-yellow-500 font-md hover:bg-yellow-500 hover:text-zinc-800 active:bg-yellow-700 active:text-zinc-800 focus:bg-yellow-500 focus:text-zinc-800"
        >
          About
        </a>
        <a
          href="#contact"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-lg text-yellow-500 font-md hover:bg-yellow-500 hover:text-zinc-800 active:bg-yellow-700 active:text-zinc-800 focus:bg-yellow-500 focus:text-zinc-800"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}