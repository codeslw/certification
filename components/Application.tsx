import Image from 'next/image'
import React, { useState } from 'react'
import Geo from "../public/icons/geo.svg"
import Phone from "../public/icons/phone.svg"
import Email from "../public/icons/email.svg"
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import { useForm } from 'react-hook-form'
import { Spinner, useToast } from '@chakra-ui/react'

export default function Application() {
    const methods = useForm();
    const [loading, setLoading] = useState(false);
    const toast = useToast();

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

    return (
        <div className='w-full flex flex-col md:flex-row md:space-x-[7.6%]  space-y-10 md:space-y-0'>
            <div className="w-full md:w-[45.5%] md:aspect-[54/45] aspect-[34/30] relative">
                <YMaps
                    styles={{
                    }}>
                    <Map defaultState={{ center: [41.353368, 69.274392], zoom: 14 }} width={"100%"} height={"100%"} >
                        <Placemark geometry={[41.353368, 69.274392]} />
                    </Map>
                </YMaps>
            </div>
            <div className="flex flex-col w-full md:w-[50%]">
                <div className="text-4xl font-bold text-[#444444]">
                    Оставьте <span className='bg-yellow-secondary rounded-xl leading-9 px-2'>заявку</span>
                </div>
                <div className="mt-3 text-sm leading-4 text-[#8A8A8A] max-w-[70%]">
                    Оставьте контактные данные и мы обязательно свяжемся с вами
                </div>
                <div className="mt-[10px] flex flex-col space-y-1.5">
                    <input {...methods.register("company", { required: true })} type="text" className={`w-full h-12 rounded-xl bg-[#F2F2F2] placeholder:text-[#828282] px-6 ${methods.formState.errors.company ? "border-red-500" : "border-[#E0E0E0]"} border`} placeholder='Название компании или имя' />
                    <input {...methods.register("phoneNumber", { required: true, pattern: /^\+\d{12}$/ })} type="text" className={`w-full h-12 rounded-xl bg-[#F2F2F2] placeholder:text-black-primary px-6 ${methods.formState.errors.phoneNumber ? "border-red-500" : "border-[#E0E0E0]"} border`} placeholder='+998 ( _ _ ) _ _ _ - _ _ - _ _' />
                    <input  {...methods.register("email", { required: true })} type="text" className={`w-full h-12 rounded-xl bg-[#F2F2F2] placeholder:text-[#828282] px-6 ${methods.formState.errors.email ? "border-red-500" : "border-[#E0E0E0]"} border`} placeholder='Ваш e-mail' />
                    <textarea {...methods.register("description", { required: true })} className={`w-full h-[100px] rounded-xl bg-[#F2F2F2] placeholder:text-[#828282] px-6 ${methods.formState.errors.description ? "border-red-500" : "border-[#E0E0E0]"} border py-3`} placeholder='Напишите что именно вас интересует' />
                </div>
                <button onClick={() => handleSubmitFrom()} className="mt-3 w-full h-12 rounded-xl md:w-[9.5rem] bg-yellow-primary">{"Отправить "} {loading ? <Spinner color='#333333' size={"sm"} /> : ""}</button>
                <div className="mt-8 flex flex-col space-y-4">
                    <div className="flex space-x-3 items-start">
                        <div className="w-7 h-7 mt-2">
                            <Geo />
                        </div>
                        <div className="flex flex-col leading-5 text-sm">
                            <div className="font-bold text-yellow-primary">Адрес</div>
                            <div className="font-normal text-[#7E7E7E]">
                            г.Ташкент, Юнусабадский район, Шахристан МФЙ, ул. Шахристан, 89
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-7">
                        <div className="flex space-x-3 items-start">
                            <div className="w-7 h-7 mt-2">
                                <Email />
                            </div>
                            <div className="flex flex-col leading-5 text-sm">
                                <div className="font-bold text-yellow-primary"> EMAIL</div>
                                <div className="font-normal text-[#7E7E7E]">
                                    triaaaconslult@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-3 items-start">
                            <div className="w-7 h-7 mt-2">
                                <Phone />
                            </div>
                            <div className="flex flex-col leading-5 text-sm">
                                <div className="font-bold text-yellow-primary">Телефон</div>
                                <div className="font-normal text-[#7E7E7E]">
                                    +998 90 321 11 55,  +998 90 013 98 31
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
