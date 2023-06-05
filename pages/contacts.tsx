import React, { useEffect, useState } from 'react'
import Geo from "../public/icons/geo.svg"
import Email from "../public/icons/email.svg"
import Call from "../public/icons/phone.svg"
import { useForm } from 'react-hook-form'
import { log } from 'console'
import { Spinner, Toast, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const getStaticProps = () => {
    return {
        props: {

        }
    }
}


export default function Contacts() {

    const methods = useForm();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const router = useRouter();

    const handleSubmitFrom = () => {
        methods.handleSubmit(async (data) => {
            let formatedText = encodeURIComponent(
                `<b>Получена заявка:</b>

Название компании : ${data.company}

Номер телефона: <a>${data.phoneNumber}</a>

Почта: ${data.email}

Интересы: ${data.description}
            `)
            const chat_id = "@cert_app_iso"
            const bot_token = "6160349152:AAGZVqbIW_GsYj88hu2IsHgshUgDkKHqOHw"
            const baseUrl = `https://api.telegram.org/bot${bot_token}`
            console.log(formatedText)
            try {
                setLoading(true)
                const response = await fetch(`${baseUrl}/sendMessage?chat_id=${chat_id}&text=${formatedText}&parse_mode=HTML`);
                if (response.status < 400) {
                    toast({
                        status: "success",
                        title: "Успешно отправлено!",
                        duration: 1000,
                        position: "top-right"
                    })
                    methods.reset();
                }

            }
            catch (err) {
                console.log(err, "error")
                toast({
                    status: "error",
                    title: "Что-то пошло не так!",
                    duration: 1000,
                    position: "top-right"
                })
            }
            finally {
                setLoading(false);
            }
        })();
    }

    useEffect(() => {
        if (router.query.code)
            methods.setValue("description", `Хочу получить сертификат ISO-${router.query.code}`)
        else
            methods.setValue("description", undefined)

    }, [router])


    return (
        <div className='w-full px-4 lg:px-[5%] pt-5 lg:pt-10 pb-[50px] lg:pb-[100px]'>
            <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5">
                <div className="w-full lg:w-[50%] bg-[#FAFAFA] px-[10px] space-y-4 lg:space-y-0 py-4 lg:py-7 lg:px-9  rounded-[20px]">
                    <div className="text-4xl leading-[43px] font-bold text-[rgb(68,68,68)] mt-3">
                        Оставьте <span className='bg-yellow-secondary px-2 rounded-lg'>заявку</span>
                    </div>
                    <div className="text-sm leading-4 text-[#8a8a8a] font-normal">Оставьте контактные данные и мы обязательно свяжемся с вами</div>
                    <div className="flex flex-col space-y-[5px] lg:!mt-6">
                        <input {...methods.register("company", { required: true })} placeholder='Название компании или имя' type="text " className={`w-full h-[46px] rounded-[10px] bg-[#F2F2F2] placeholder:text-[#E0E0E0] border ${methods.formState.errors.company ? "border-red-500" : "border-[#E0E0E0]"} px-6`} />
                        <input {...methods.register("phoneNumber", { required: true, pattern: /^\+\d{12}$/ })} placeholder='+998 ( _ _ ) _ _ _ - _ _ - _ _' type="text " className={`w-full h-[46px] rounded-[10px] bg-[#F2F2F2] placeholder:text-black-primary border ${methods.formState.errors.phoneNumber ? "border-red-500" : "border-[#E0E0E0]"} px-6`} />
                        <input {...methods.register("email", { required: true })} placeholder='Ваш e-mail' type="text " className={`w-full h-[46px] rounded-[10px] bg-[#F2F2F2] placeholder:text-[#E0E0E0] border ${methods.formState.errors.email ? "border-red-500" : "border-[#E0E0E0]"} px-6`} />
                        <textarea {...methods.register("description", { required: true })} placeholder='Напишите что именно вас интересует' id="" rows={4} className={`w-full rounded-[10px] bg-[#F2F2F2] placeholder:text-[#E0E0E0] border ${methods.formState.errors.description ? "border-red-500" : "border-[#E0E0E0]"} py-4  px-6 resize-none`}></textarea>
                        <button onClick={() => handleSubmitFrom()} className='w-full text-center rounded-lg h-12 text-sm bg-yellow-secondary text-black-primary !mt-2.5 lg:!mt-4'>{"Отправить "} {loading ? <Spinner size={"sm"} color='#333333' /> : ""}</button>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] bg-[#FAFAFA] px-[10px] space-y-4 lg:space-y-0 py-4 lg:py-7 lg:px-9  rounded-[20px]">
                    <div className="text-4xl leading-[43px] font-bold text-[rgb(68,68,68)] mt-3">
                        Наши <span className='bg-yellow-secondary px-2 rounded-lg'>контакты</span>
                    </div>
                    <div className="text-sm leading-4 text-[#8a8a8a] font-normal !mt-5">Работаем во всех регионах Узбекистана. Наш единый телефонный номер по Узбекистану: +998 ( 90 ) 321 11 55</div>
                    <hr className='border-yellow-primary !mt-6' />
                    <div className="flex flex-col space-y-5 lg:space-y-9 lg:!mt-9 !mt-5">
                        <div className="flex space-x-3 items-center">
                            <div className="w-7 h-7">
                                <Geo />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm leading-5 font-bold text-yellow-primary">Адрес</div>
                                <div className="text-sm leading-5 font-normal text-[#7E7E7E]">г. Ташкент, Юнусобадский район, ул Шахристан, Дом 3</div>
                            </div>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <div className="w-7 h-7">
                                <Email />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm leading-5 font-bold text-yellow-primary">EMAIL</div>
                                <div className="text-sm leading-5 font-normal text-[#7E7E7E]">triaaaconslult@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <div className="w-7 h-7">
                                <Call />
                            </div>
                            <div className="flex flex-col cursor-pointer">
                                <div className="text-sm leading-5 font-bold text-yellow-primary">Телефон</div>
                                <div className="text-sm leading-5 font-normal text-[#7E7E7E]">+998 ( 90 ) 321 11 55</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
