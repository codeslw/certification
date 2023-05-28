import React from 'react'
import Image from 'next/image'

export default function Negotiation() {
    return (
        <div className='w-full bg-[#F5F5F5] px-4 sm:px-6 py-6 md:pl-[6%] md:py-[4.3%] md:mt-[100px]'>
            <div className="flex items-center space-x-[7%]">
                <div className="w-full md:w-[49.5%] flex flex-col space-y-4">
                    <div className="text-xl text-black-primary md:text-[40px] md:leading-[42px]">
                        Почему наши клиенты считают нас самыми  <span className='font-bold'>надёжными</span>
                    </div>
                    <div className="flex flex-col space-y-1 5 ">
                        <div className="w-full p-4 md:py-5 md:px-7 flex space-y-1 bg-white rounded-xl flex-col shadow-sm">
                            <div className="text-black-primary text-base leading-none md:text-xl">РАБОТА ПО ДОГОВОРУ</div>
                            <div className="text-dark-primary text-sm leading-none">Стоимость и сроки выполнения работ всегда прозрачны и понятны нашему клиенту</div>
                        </div>
                        <div className="w-full p-4 md:py-5 md:px-7 flex space-y-1 bg-white rounded-xl flex-col shadow-sm">
                            <div className="text-black-primary text-base leading-none md:text-xl">БЕСПЛАТНАЯ ДОСТАВКА ДОКУМЕНТОВ</div>
                            <div className="text-dark-primary text-sm leading-none">Бесплатная доставка документов курьером лично вам в руки в любую точку</div>
                        </div>
                        <div className="w-full p-4 md:py-5 md:px-7 flex space-y-1 bg-white rounded-xl flex-col shadow-sm">
                            <div className="text-black-primary text-base leading-none md:text-xl">РАБОТАЕМ ПО ВСЕМУ УЗБЕКИСТАНУ</div>
                            <div className="text-dark-primary text-sm leading-none">Работаем со всеми городами на территории Узбекистана.</div>
                        </div>
                        <div className="w-full p-4 md:py-5 md:px-7 flex space-y-1 bg-white rounded-xl flex-col shadow-sm">
                            <div className="text-black-primary text-base leading-none md:text-xl">ПОДДЕРЖКА ЭКСПЕРТА</div>
                            <div className="text-dark-primary text-sm leading-none">Бесплатная поддержка эксперта как на этапе работ, так и после</div>
                        </div>
                    </div>
                </div>
                <div className="w-[37%] aspect-[55/50] overflow-hidden rounded-[3.7%] hidden md:block relative bg-[#E9E9E9]">
                    <Image fill src={"/images/hands.png"} alt="" />
                </div>
            </div>
        </div>
    )
}
