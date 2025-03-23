import { Copyright, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export function Footer() {
    return (
        <div className="flex lg:flex-row md:flex-row items-center flex-col justify-between bg-zinc-800 bg-opacity-100 p-4 text-zinc-400 border-t-2 border-t-yellow-500 z-10">
            <div className="flex items-center px-8">
                <Copyright className="inline mr-2" size={15}/> 
                <h1 className="text-lg">Chan Ng Cashin</h1>
            </div>
            <div className="flex items-center px-8">
                <a href="https://github.com/channgcashin" className="hover:-translate-y-1 hover:text-yellow-500">
                    <Github className="inline m-3" size={25}/> 
                </a>
                <a href="https://www.linkedin.com/in/chan-ng-cashin-532407106/" className="hover:-translate-y-1 hover:text-yellow-500">
                    <Linkedin className="inline m-3" size={25}/>
                </a>
                <a href="https://www.instagram.com/cwnc_chan/" className="hover:-translate-y-1 hover:text-yellow-500">
                    <Instagram className="inline m-3" size={25}/>
                </a>
                <a href="mailto:chan.ng.cashin@gmail.com" className="hover:-translate-y-1 hover:text-yellow-500">
                    <Mail className="inline m-3" size={25}/>
                </a>
            </div>
        </div>
    )
}