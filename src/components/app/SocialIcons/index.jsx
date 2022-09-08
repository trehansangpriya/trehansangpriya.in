import React from 'react'
import { socialLinks } from '@/Data/Links'

const SocialIcons = () => {
    return (
        <div className={[
            'fixed',
            // medium screens and up
            'md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:left-3 md:bottom-auto',
            // small screens
            'bottom-3 left-1/2 -translate-x-1/2',
        ].join(' ')}>
            <div className={[
                'flex bg-layout-800 p-2 gap-3 rounded-lg w-fit',
                // medium screen and up
                'md:flex-col',
                // small screen
                'flex-row'
            ].join(' ')}>
                {socialLinks.map((link, index) => (
                    <a href={link.url} key={index} target='_blank' rel='noreferrer' className='text-xl text-layout-100 hover:scale-105 transition-all'>
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SocialIcons