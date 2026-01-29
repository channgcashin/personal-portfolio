export function About() {
    return (
        <div id="about" className="flex justify-center border-2 border-zinc-800 lg:h-screen items-center justify-center">
            <div className="w-3/4 lg:p-8 md:p-8 mx-auto lg:mt-8 mt-20 mb-8">
                <div>
                    <h1 className="text-6xl font-bold text-yellow-500 ">About Me</h1>
                    <p className="pt-8 text-2xl text-zinc-400">
                        I’m Chan W. Ng Cashin, a Purdue University graduate holding a Bachelor of Science in Electrical and Computer Engineering. I’m passionate about building 
                        innovative software solutions that combine cutting-edge technology with real-world impact. 
                    </p>
                    <p className="pt-8 text-2xl text-zinc-400">
                        I currently work as an Associate Software Engineer at Numina Group, a warehouse distribution automation company. In this role, I’m helping modernize the 
                        company’s legacy systems by transitioning them into scalable, contemporary platforms. One of my first major contributions was co-leading the development 
                        of Numina’s inaugural internal Go based API. This API serves as the foundation for replacing outdated Java applications with modern, cloud-ready solutions. 
                        Key projects include upgrading legacy Java-based warehouse operation workstations and transforming the customer-facing dashboard from Angular/HTML5 into a sleek, 
                        fully modern frontend using React and TypeScript, backed by the new Go API. These redesigned products deliver a significantly more professional and contemporary 
                        user experience while gaining full cloud-hosting capabilities, enabling greater scalability and flexibility for the future.
                    </p>
                    <p className="pt-8 text-2xl text-zinc-400">
                        My journey in tech is built on a strong foundation of diverse experiences. As a Software Development Intern at Revibe Technologies, 
                        I spearheaded a mobile app facelift. Before that, as a Data Science Intern at Revibe, I optimized a fidget-detection algorithm for their digital theraputic device. These roles, combined 
                        with personal projects like an RFID Attendance Tracker and a Video Game Collection Website, have honed my skills as a developer.
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