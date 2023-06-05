import React from 'react'
import Call from "../public/icons/call.svg"
import SMS from "../public/icons/envelope.svg"
import Image from 'next/image'


export default function ServiceHero(props: { certificate_code: string }) {
    return (
        <div className='w-full px-7 md:px-12 flex flex-col space-y-5 pt-9 md:pt-12 relative'>


            <div className="text-xl text-black-primary font-medium md:w-[40%]">
                ВНЕДРЕНИЕ СИСТЕМЫ ЭКОЛОГИЧЕСКОГО МЕНЭДЖМЕНТА <span className='font-bold'>ISO {props.certificate_code}</span>  НА ПРЕДПРИЯТИИ.
            </div>
            <hr className=' border-[#E0E0E0] md:w-[30%]' />
            <div className='flex flex-col px-6 py-4 bg-[#F2F2F2] space-y-4 rounded-xl md:w-[55%]'>
                <div className="text-base text-dark-primary">Свяжитесь с нами</div>
                <div className="flex flex-col md:space-x-7 md:flex-row space-y-3 md:space-y-0">
                    <div className="flex space-x-2 items-center">
                        <div className="w-7 h-7 rounded-full bg-yellow-secondary flex justify-center items-center">
                            <SMS />
                        </div>
                        <div className="text-sm leading-4 text-dark-secondary">
                            triaaaconslult@gmail.com
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="w-7 h-7 rounded-full bg-yellow-secondary flex justify-center items-center">
                            <Call />
                        </div>
                        <div className="text-sm leading-4 text-dark-secondary">
                            +998 ( 90 ) 013 98 31
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="w-7 h-7 rounded-full bg-yellow-secondary flex justify-center items-center">
                            <Call />
                        </div>
                        <div className="text-sm leading-4 text-dark-secondary">
                            +998 ( 90 ) 321 11 55
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-[39.5%] right-0 top-0 -z-20 hidden md:block translate-x-[5%] -translate-y-[35%]">
                <div className="w-full aspect-square relative">
                    <Image src={"/images/pen.png"} alt="" fill />
                </div>
            </div>

        </div>
    )
}
