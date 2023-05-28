import React from 'react'
import Placeholder from "../public/icons/placeholder.svg"
import ArrowDown from "../public/icons/arrow-donw.svg"
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
interface ICard {
    name: string,
    description: string,
    photo: string,
    code: string,
    path: string
}

export default function Card(props: ICard) {
    const router = useRouter()
    return (
        <Link href={props.path} className='flex flex-col items-center space-y-[10px] sm:space-y-4 sm:items-start last-of-type:pr-4'>
            <div className="h-[10rem] aspect-square sm:aspect-[31/16] flex justify-center items-center bg-[#F2F2F2] rounded-xl relative overflow-hidden">
                <Image src={props.photo} style={{ objectFit: "cover" }} fill alt="" className='rounded-xl object-contain' />
            </div>
            <div className="text-base sm:text-[18px] text-black-primary font h-[60px] sm:h-11 text-center sm:text-start w-[80%]">{props.name}</div>
            <hr className='mt-[10px] w-[80%] sm:hidden border-[#D9D9D9]' />
            <div className='text-dark-primary text-xs text-center sm:text-start sm:text-sm h-[60px] sm:h-auto min-h-[60px]'>{props.description}</div>
            <div className="flex space-x-1 items-center" onClick={() => router.push({
                pathname: "/contacts",
                query: {
                    code: props.code
                }
            })}>
                <div className="text-dark-primary text-sm leading-6 cursor-pointer">
                    Получить
                </div>
                <div className="w-2 h-2 -rotate-90 top-0.5 relative">
                    <ArrowDown className="stroke-[#4F4F4F]" />
                </div>
            </div>
        </Link>
    )
}
