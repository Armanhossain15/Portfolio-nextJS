import Image from 'next/image';
import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';

const PortfolioSection = () => {
    const projects = [
        {
            id: 1,
            title: "Project Management App",
            description: "A full-stack application built with React, Node.js, and MongoDB that helps teams.",
            image: "/public/project.jpg",
            link: "#"
        },
        {
            id: 2,
            title: "E-commerce Platform",
            description: "Modern e-commerce solution with real-time inventory management and payment processing.",
            image: "/public/project.jpg",
            link: "#"
        },
        {
            id: 3,
            title: "AI Chat Application",
            description: "Real-time chat application powered by AI for smart conversation and language translation.",
            image: "/public/project.jpg",
            link: "#"
        },

    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className=" mb-12 space-y-4">
                    <span className="text-base font-medium text-gray-800 dark:text-white border border-green-500 px-5 py-1 rounded-full ">
                        Portfolio
                    </span>
                    <h2 className="text-black dark:text-white mx-auto text-4xl md:text-5xl font-medium">
                        Explore my recent work
                    </h2>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden p-5 hover:border-green-500 dark:hover:border-green-500 transition duration-300 group "
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden rounded-xl group">
                                <Image
                                    src='/project2.jpg'
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className='w-full h-full object-cover transition duration-300 group-hover:scale-105'
                                />
                            </div>

                            {/* Project Content */}
                            <div className="py-4 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white ">
                                        {project.title}
                                    </h3>
                                    <div className='flex items-center gap-2'>
                                        <span className='mt-2  bg-slate-400 dark:bg-slate-700 bg-opacity-20 px-3 py-1 rounded-full text-xs group-hover:text-green-500 transition duration-300 '>React</span>
                                        <span className='mt-2  bg-slate-400 dark:bg-slate-700 bg-opacity-20 px-3 py-1 rounded-full text-xs group-hover:text-green-500 transition duration-300 '>NextJs</span>
                                    </div>
                                </div>

                                {/* View Details Button */}
                                <div className='flex justify-end'>
                                    <p className=' dark:bg-transparent hover:bg-green-500 transition duration-300 cursor-pointer w-10 h-10 border  border-slate-800 dark:border-green-500 p-2 rounded-full text-slate-800 hover:text-white hover:border-green-500 dark:text-white dark:hover:bg-green-500 '>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;