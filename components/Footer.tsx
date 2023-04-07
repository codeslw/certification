import React, { useMemo } from 'react'
import Logo from "../public/icons/logo-footer.svg"
import Call from "../public/icons/call.svg"
import { useRouter } from 'next/router'


export default function Footer() {
    const router = useRouter()
    const headers = useMemo(() => {
        return [
            {
                text: 'Главная',
                path: '/'
            },
            {
                text: 'Услуги',
                path: '/services/9001',
                options: ["Разработка и внедрение ISO 9001", "Разработка и внедрение ISO 14001", "Разработка и внедрение ISO 45001", "Разработка и внедрение ISO 22000", "Разработка и внедрение ISO 13485", "Разработка и внедрение ИСМ 9001"]
            },
            {
                text: 'Контакты',
                path: '/contacts'
            }
        ]
    }, [])

    return (

        <footer className='flex flex-col items-center pt-5 space-y-4 sm:flex-row sm:justify-between px-[5.2%] relative bottom-0' style={{
            boxShadow: "10px -10px 5px -5px #eee"
        }}>
            <div className="w-28 aspect-[120/107]">
                <Logo />
            </div>
            <div className="flex flex-col space-y-3">
                <div className="flex space-x-2 items-center cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-yellow-secondary flex justify-center items-center">
                        <Call />
                    </div>
                    <div className="flex flex-col text-sm text-dark-primary">
                        <div className="opacity-70">У вас есть вопрос?</div>
                        <div className="text-base">+998 ( 90 ) 013 98 31</div>
                        <div className="text-base">+998 ( 90 ) 321 11 55</div>

                    </div>
                </div>
                <hr className='border-[#F2F2F2]' />
                <div className="flex space-x-8 pb-5">
                    {headers.map((item) => <div onClick={() => router.push(item.path)} className='text-dark-secondary text-sm leading-4'>{item.text}</div>)}
                </div>
            </div>
        </footer>
    )
}


