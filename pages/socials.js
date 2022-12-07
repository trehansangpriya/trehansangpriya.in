import React from 'react'
import { SiGithub, SiHashnode, SiInstagram, SiLinkedin, SiSubstack, SiTwitter } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'

const Socials = () => {
    const socialLinks = [
        {
            title: 'Email',
            url: 'mailto:trehansangpriya@gmail.com',
            icon: <FiMail />
        },
        {
            title: 'Twitter',
            url: 'https://twitter.com/trehansangpriya',
            icon: <SiTwitter />
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/trehan-sangpriya/',
            icon: <SiLinkedin />
        },
        {
            title: 'Instagram',
            url: 'https://www.instagram.com/trehan.sangpriya/',
            icon: <SiInstagram />
        },
        {
            title: 'Github',
            url: 'https://github.com/trehansangpriya',
            icon: <SiGithub />
        },
        {
            title: 'Trehan\'s Notes',
            url: 'https://notes.trehansangpriya.in/',
            icon: <SiSubstack />
        },
        {
            title: 'Trehan\'s Blog',
            url: 'https://blog.trehansangpriya.in/',
            icon: <SiHashnode />
        }
    ]
    return (
        <div className='bg-layout-900 w-full h-screen flex justify-center items-center'>
            <div className={[
                'flex bg-layout-800 p-2 gap-4 rounded-lg w-fit',
            ].join(' ')}>
                {socialLinks.map((link, index) => (
                    <a href={link.url} key={index} target='_blank' rel='noreferrer' className='text-4xl text-layout-100 hover:scale-105 hover:text-brand-yellow-500 transition-all'>
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Socials