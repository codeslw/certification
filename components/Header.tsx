import React, { useMemo, useState } from 'react'
import Logo from "../public/icons/logo.svg"
import Globe from "../public/icons/globe.svg"
import ArrowDonw from "../public/icons/arrow-donw.svg"
import Sms from "../public/icons/sms.svg"
import Call from "../public/icons/call.svg"
import { useRouter } from 'next/router'

export default function Hearder() {

    const [activeLanguage, setActiveLanguage] = useState("Русский")
    const [openLanguages, setopenLanguages] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openServices, setOpenServices] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const headers: any = useMemo(() => {
        return [
            {
                text: 'Главная',
                path: '/'
            },
            {
                text: 'Услуги',
                path: '/services',
                options: [
                    { path: "9001", title: "Разработка и внедрение ISO 9001" },
                    { path: "14001", title: "Разработка и внедрение ISO 14001" },
                    { path: "45001", title: "Разработка и внедрение ISO 45001" },
                    { path: "22000", title: "Разработка и внедрение ISO 22000" },
                    { path: "13485", title: "Разработка и внедрение ISO 13485" }
                ]
            },
            {
                text: 'Контакты',
                path: '/contacts'
            }
        ]
    }, [])



    const languages = useMemo(() => {
        return ["Русский", "O'zbek", "English"]
    }, [])

    const handleToggleLanguages = () => {
        setopenLanguages(prev => !prev)
    }
    const handleToggleServices = () => {
        setOpenServices(true);
    }

    return (
        <header className='flex flex-col shadow-md'>
            <div className="px-[5.2%] flex justify-between items-center border-b border-[#EFEFEF] py-3 bg-white">
                <div className="w-12 h-11 cursor-pointer" onClick={() => router.push("/")}>
                    <Logo />
                </div>
                <div className='flex space-x-1'>
                    <div className="relative w-max ">
                        <button onClick={handleToggleLanguages} className="w-full h-12 rounded-[10px] border border-[#EFF0F6] px-4 flex items-center justify-between space-x-2 md:space-x-4 lg:space-x-8 cursor-pointer">
                            <Globe />
                            <div className="text-sm leading-4 text-[#4F4F4F] w-[3.5rem]">
                                {activeLanguage}
                            </div>
                            <ArrowDonw className="stroke-yellow-primary" />
                        </button>
                        <div className={`w-full lg:w-[365px] origin-top-right lg:-translate-x-[45%] flex flex-col shadow-lg absolute top-4 translate-y-[33%] !z-50 rounded-xl bg-white ${openLanguages ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all duration-300 ease-in-out`}>
                            {languages.map((lang) => <div onClick={() => {
                                setActiveLanguage(lang)
                                setopenLanguages(false);
                            }} className='px-2 py-2 hover:bg-gray-100 cursor-pointer overflow-hidden rounded-xl'>{lang}</div>)}
                        </div>
                    </div>
                    <button onClick={() => setDrawerOpen(true)} className={`h-12 aspect-square rounded-xl bg-[#F3F3F3] flex sm:hidden flex-col justify-center items-center space-y-1.5`}>
                        <div className='w-[50%] h-[3px] bg-[#828282] rounded-sm'></div>
                        <div className='w-[50%] h-[3px] bg-[#828282] rounded-sm'></div>
                        <div className='w-[50%] h-[3px] bg-[#828282] rounded-sm'></div>
                    </button>
                </div>
            </div>
            <div className='hidden sm:flex justify-between items-center px-[5.2%] py-3 z-10 relative bg-white'>
                <div className="flex space-x-4 items-center md:space-x-6 lg:space-x-9 xl:space-x-12">
                    {headers.map((item: any) => {
                        return item.options ? <div onMouseLeave={() => setOpenServices(false)} className='relative text-sm text-dark-primary cursor-pointer cursor-pointer'>
                            <div onMouseEnter={handleToggleServices} className='py-2 flex space-x-3 items-center'>
                                <div>
                                    {item.text}
                                </div>
                                <ArrowDonw
                                    className="stroke-dark-primary"
                                />

                            </div>
                            <div className={`w-max origin-top flex flex-col shadow-md absolute top-4 translate-y-[10%] !z-50 rounded-xl bg-white ${openServices ? "scale-100 opacity-100" : "scale-0 opacity-0"} transition-all duration-300 ease-in-out`}>
                                {item.options.map((opt: any) => <div className='px-2 py-2 hover:bg-[#F3F3F3]' onClick={() => {
                                    setOpenServices(false);
                                    router.push(`/services/${opt.path}`)
                                }}>{opt.title}</div>)}
                            </div>
                        </div> : <div onClick={() => router.push(item.path)} className='text-dark-primary cursor-pointer'>{item.text}</div>
                    })}
                </div>
                <div className="flex space-x-4 md:space-x-6 lg:space-x-9 xl:space-x-12 items-center">
                    <div className="flex space-x-2 items-center cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-yellow-secondary flex justify-center items-center">
                            <Sms />
                        </div>
                        <div className="flex flex-col text-sm text-dark-primary">
                            <div className="opacity-70">Email</div>
                            <div className="text-base">example@mail.com</div>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-yellow-secondary flex justify-center items-center">
                            <Call />
                        </div>
                        <div className="flex flex-col text-sm text-dark-primary">
                            <div className="opacity-70">Номер телефона</div>
                            <div className="text-base">+998 ( 90 ) 013 98 31</div>
                            <div className="text-base">+998 ( 90 ) 321 11 55</div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`${drawerOpen ? "translate-y-0 opacity-100" : "-translate-y-[100%] opacity-0"} min-h-screen lg:hidden w-screen bg-white z-30 fixed top-0 left-0 !m-0 transition-all duration-500 ease-in-out px-4 overflow-hidden`}>
                <div onClick={() => setDrawerOpen(false)} className="text-3xl font-medium text-black ml-auto w-max">x</div>
                <div className="flex flex-col space-y-4 ">
                    {headers.concat(headers[1].options).filter((i: any, idx: number) => idx !== 1).map((item: any) => <div
                        className='flex space-x-2'
                        onClick={() => {
                            if (item.text) {
                                router.push(`/${item.path}`);
                            }
                            else {

                            }
                            setDrawerOpen(false)
                        }}
                    >
                        {item.text ? item.text : item.title}

                    </div>)}
                </div>
            </div>
        </header>
    )
}
