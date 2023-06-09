import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ArrowRight from "../public/icons/arrow-right.svg"
import Placeholder from "../public/icons/placeholder.svg"

import { LegacyRef, useRef, useState } from 'react'
import { cert_cards } from '@/utils/Content'
import Card from '@/components/Card'
import Note from '@/components/Note'
import Application from '@/components/Application'
import Negotiation from '@/components/Negotiation'
import { useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = () => {
  return {
    props: {

    }
  }
}

export default function Home() {

  const ref: LegacyRef<HTMLDivElement> | undefined = useRef(null)
  const [imageCount, setImageCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  const router = useRouter();

  const handleLeftClick = () => {
    // ref.current!.scrollBy(-window.innerWidth, 0)
    if (imageCount > 0) {
      setPrevCount(imageCount)
      setImageCount(prev => prev - 1)

    }
  }
  const handleRightClick = () => {
    //ref.current!.scrollBy(window.innerWidth, 0)
    if (imageCount < 4) {
      setPrevCount(imageCount)
      setImageCount(prev => prev + 1)

    }

  }





  return (
    <>
      <Head>
        <title>Внедрение, разработка и обучение систем менеджмента ISO</title>
        <meta name="description" content="Внедрим и разработаем систему менеджмента на вашем предприятии. Подготовим и сопроводим вас ко внешним проверкам." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <div className='min-h-[500px]'>

        <div className='h-max w-max relative overflow-x-hidden'>
          {/* <div onClick={handleLeftClick} className="w-7 h-7 hidden md:block absolute top-[50%] -translate-y-[50%] left-[5.2%] z-20 cursor-pointer">
            <ArrowRight />
          </div>
          <div onClick={handleRightClick} className="w-7 h-7 hidden md:block absolute top-[50%] -translate-y-[50%] right-[5.2%] rotate-180 z-20 cursor-pointer">
            <ArrowRight />
          </div> */}

          <div ref={ref} id='container' className="w-screen bg-[#f2f2f2] lg:aspect-[3/1] min-h-max flex snap-x snap-mandatory relative scroll-smooth overflow-x-hidden">

            <div className="w-screen snap-always min-w-full h-full flex  sm:px-[11%] justify-between lg:items-center px-4 pt-6 pb-12 overflow-x-hidden">
              <div className='flex flex-col space-y-3 sm:space-y-4 lg:space-y-6 z-20'>
                <div className='flex flex-col'>
                  <div className="max-w-[80%] text-xl leading-6 lg:text-2xl lg:leading-7 text-black-primary">
                  Внедрение, разработка и обучение систем менеджмента ISO
                  </div>
                  <div className="text-sm lg:text-base text-dark-primary max-w-[80%]">Внедрим и разработаем систему менеджмента на вашем предприятии. Подготовим и сопроводим вас ко внешним проверкам.</div>
                </div>
                <div className="flex space-x-2 max-w-[90%] min-w-[21rem] lg:w-[35%] text-sm text-black-primary">
                  <button onClick={() => router.push("/contacts")} className='w-full py-3 bg-yellow-secondary rounded-xl px-4 hover:filter hover:brightness-75 hover:shadow-inner hover:text-base hover:font-normal'>Заказать услугу</button>
                  <button onClick={() => router.push("/services/9001")} className='w-full py-3 border rounded-xl px-4 border-yellow-primary hover:bg-white'>Подробнее</button>
                </div>
              </div>
              <div className={`w-screen h-full absolute min-w-screen min-h-full left-0 top-0 ${imageCount === 0 ? "translate-x-0" : prevCount < imageCount ? "-translate-x-[100%]" : "translate-x-[100%]"} transition-all duration-500 ease-in-out`}>
                <Image src={"/images/ISO-9001.png"} alt='' fill className='opacity-30' />
              </div>
              {/* <div className={`hidden lg:block w-screen h-full absolute min-w-screen min-h-full left-0 top-0 ${imageCount === 1 ? "translate-x-0" : prevCount < imageCount ? "-translate-x-[100%]" : "translate-x-[100%]"} transition-all duration-500 ease-in-out`}>
                <Image style={{
                  objectFit: "cover"
                }} src={"/images/ISO-22000.png"} alt='' fill className='opacity-30' />
              </div>
              <div className={`hidden lg:block w-screen h-full absolute min-w-screen min-h-full left-0 top-0 ${imageCount === 2 ? "translate-x-0" : prevCount < imageCount ? "-translate-x-[100%]" : "translate-x-[100%]"} transition-all duration-500 ease-in-out`}>
                <Image style={{
                  objectFit: "cover"
                }} src={"/images/ISO-14001.png"} alt='' fill className='opacity-30' />
              </div>
              <div className={`hidden lg:block w-screen h-full absolute min-w-screen min-h-full left-0 top-0 ${imageCount === 3 ? "translate-x-0" : prevCount < imageCount ? "-translate-x-[100%]" : "translate-x-[100%]"} transition-all duration-500 ease-in-out`}>
                <Image style={{
                  objectFit: "cover"
                }} src={"/images/ISO-45001.png"} alt='' fill className='opacity-30' />
              </div>
              <div className={`hidden lg:block w-screen h-full absolute min-w-screen min-h-full left-0 top-0 ${imageCount === 4 ? "translate-x-0" : prevCount < imageCount ? "-translate-x-[100%]" : "translate-x-[100%]"} transition-all duration-500 ease-in-out`}>
                <Image style={{
                  objectFit: "cover"
                }} src={"/images/ISO-13485.png"} alt='' fill className='opacity-30' />
              </div> */}

              {/* <div className="hidden lg:block w-[140px] h-[140px] mr-[12%]">
                <Placeholder />
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 md:mt-16 lg:mt-20">
          <div className="text-xl lg:text-2xl text-black-primary font-medium pb-4   px-4 lg:px-[5.2%] ">
            <span className='font-bold'>Услуги</span> нашей компании , которые вы можете получить
          </div>
          <hr className='border-[#E0E0E0] w-full lg:w-[50%]   mx-4 lg:mx-[5.2%]' />
          <div className="mt-5 sm:mt-8 flex space-x-[10px] sm:space-x-5 overflow-x-scroll ml-4 lg:ml-[5%] scrollbar-hide">
            {cert_cards.map((item) => <Card path={item.path} code={item.code} name={item.name} description={item.description} photo={item.photo} />)}
          </div>
        </div>
        <div className="mt-[5rem] mb-[5rem] px-4 sm:px-[5.2%] sm:mt-[9rem] sm:mb-[8rem] ">
          <Note photo='/images/human.png' title='Возьмем на себя все' content='вопросы по разработке документов и внедрения ISO, работаем с клиентами из любого региона Узбекистана.' />
        </div>
        <div className="px-4 md:px-[5.2%] md:py-[4.5%] relative">
          <div className='absolute left-0 top-0 w-full h-[33%] md:w-[29%] md:h-full md:rounded-r-2xl bg-yellow-primary'></div>
          <Application />
        </div>
        <Negotiation />
      </div>
    </>
  )
}
