export function About() {
    return (
        <div id="about" className="flex justify-center border-2 border-zinc-800 lg:h-screen items-center justify-center">
            <div className="w-3/4 lg:p-8 md:p-8 mx-auto lg:mt-8 mt-20 mb-8">
                <div>
                    <h1 className="text-6xl font-bold text-yellow-500 ">About Me</h1>
                    <p className="pt-8 text-2xl text-zinc-400">
                        I’m Chan W. Ng Cashin, a Purdue University graduate with a Bachelor of Science in Electrical and Computer Engineering, driven by a 
                        passion for creating innovative software solutions that bridge technology and impact. Currently, I’m an Associate Software Engineer 
                        at Numina Group, a warehouse automation company, where I’m transforming their legacy systems into modern tools. I’ve built a React 
                        proof-of-concept, developed Java applications running on Raspberry Pi workstations for warehouse operators, and, my most recent project, 
                        co-leading the creation of Numina’s first API using Go and Domain-Driven Design.
                    </p>
                    <p className="pt-8 text-2xl text-zinc-400">
                        My journey in tech is built on a strong foundation of diverse experiences. As a Software Development Intern at Revibe Technologies, 
                        I spearheaded a mobile app facelift, converting a Material UI-based React.js frontend. Before that, as a Data Science Intern at Revibe, 
                        I optimized a fidget-detection algorithm for their digital theraputic device. These roles, combined 
                        with personal projects like an RFID Attendance Tracker and a Video Game Collection Website, have honed my skills in JavaScript, Python, 
                        React, SQL, and AWS.
                    </p>
                    <p className="pt-8 text-2xl text-zinc-400 hidden xl:flex">
                        Outside of code, I’m an Eagle Scout with a Triple Crown award and a former Sigma Chi Magister, where I led recruitment and raised 
                        over $60,000 for cancer research. Whether I’m optimizing algorithms, designing APIs, or collaborating on impactful projects, I’m always 
                        excited to push boundaries and deliver solutions that matter.
                    </p>
                </div>
            </div>
        </div>
    )
}