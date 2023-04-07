import React from 'react'
import Image from "next/image"

interface INote {
    photo: string,
    title: string,
    content: string
}

export default function Note(props: INote) {
    return (
        <div className='w-full bg-[#F2F2F2] flex flex-col sm:flex-row items-center sm:space-x-[4.7%] sm:px-[3.7%] px-4 sm:h-[181px] rounded-lg'>
            <div className="w-[48.5%] sm:w-[27%] aspect-square relative rounded-full overflow-hidden -translate-y-[30%] sm:translate-y-0">
                <Image src={props.photo} fill alt="" />
            </div>
            <div className='relative flex flex-col items-center sm:items-start -top-6 sm:top-0'>
                <div className="text-xl  sm:text-2xl font-medium text-black-primary">{props.title}</div>
                <div className='text-sm sm:text-base font-normal text-dark-primary text-center sm:text-start'>{props.content}</div>
            </div>
        </div>
    )
}
