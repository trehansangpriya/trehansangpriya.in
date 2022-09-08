import React from 'react'
import { heroLinks } from '@/Data/Links'

const Hero = () => {
    const aboutPills = ['Storyteller', 'Builder', 'Mentor', 'Learner']
    return (
        <div className='w-full h-screen flex flex-col md:flex-row gap-5 md:gap-0'>
            {/* Left Section with Name - Trehan Sangpriya and know more button */}
            <div className={[
                'flex',
                // medium screens and up
                'md:w-1/2 md:h-full md:items-start md:gap-3',
                // small screens
                'w-full h-fit flex-col justify-center items-center p-2'
            ].join(' ')}>
                <h1 className='flex gap-1 2xl:text-7xl lg:text-6xl text-2xl font-bold text-gray-800 py-3 md:flex-col'>
                    <span>
                        Trehan
                    </span>
                    <span>
                        Sangpriya
                    </span>
                </h1>
                <div className="flex gap-2">
                    {aboutPills.map((pill, index) => (
                        <div key={index} className="flex bg-layout-700 text-layout-100 text-sm py-1 px-3 rounded-full">
                            {pill}
                        </div>
                    ))}
                </div>
            </div>
            {/* Right Section with Links */}
            <div className={[
                'flex',
                // medium screens and up
                'md:w-1/2 md:h-full md:justify-center md:items-end md:gap-3',
                // small screens
                'w-full h-[75%] flex-col justify-start items-center'
            ].join(' ')}>
                <div className="w-[90%] h-[80%] max-h-[480px] flex flex-col bg-layout-200 rounded overflow-y-scroll p-3 gap-2">
                    {
                        heroLinks.length > 0 ? heroLinks.map((link, index) => (
                            <a key={index} href={link.url}>
                                <div className="w-full flex p-4 items-center gap-2 bg-layout-800 text-layout-100 hover:text-brand-yellow-500 rounded cursor-pointer lg:hover:translate-x-1 active:scale-[98%] transition-all">
                                    {link.icon}
                                    {link.title}
                                </div>
                            </a>
                        )) : <div className="flex justify-center items-center h-full">No Links</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero