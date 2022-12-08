import Head from 'next/head'
import React, { useState } from 'react'
import dayjs from 'dayjs'
import { NextPage } from 'next'

const NewTab: NextPage = () => {
    const [time, setTime] = useState(dayjs().format('hh:mm A'))
    const [date, setDate] = useState(dayjs().format('MMMM D, dddd'))

    setInterval(() => {
        setTime(dayjs().format('hh:mm A'))
        setDate(dayjs().format('MMMM D, dddd'))
    }, 1000)

    return (
        <div>
            <Head>
                <title>Trehan Sangpriya</title>
            </Head>
            <div className={`flex flex-col items-center justify-center h-screen py-2 bg-layout-900 gap-4`}>
                <div className='text-8xl font-semibold text-layout-100'>
                    {time}
                </div>
                <div className='text-2xl text-layout-400 font-medium'>
                    {date}
                </div>
            </div>
        </div>
    )
}

export default NewTab