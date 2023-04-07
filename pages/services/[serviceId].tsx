import Negotiation from '@/components/Negotiation'
import ServiceHero from '@/components/ServiceHero'
import { service_texts } from '@/utils/Content'
import { InferGetStaticPropsType } from 'next/types'
import React from 'react'

export async function getStaticProps(context: { params: { serviceId: ("9001" | "22000" | "45001" | "14001" | "13485") } }) {
    const param = context.params.serviceId
    return {
        props: {
            data: service_texts[context.params.serviceId]
        }
    }
}


export function getStaticPaths() {
    return {
        paths: [
            {
                params: { serviceId: "9001" },
            },
            {
                params: { serviceId: "14001" },
            },
            {
                params: { serviceId: "45001" },
            },
            {
                params: { serviceId: "22000" },
            },
            {
                params: { serviceId: "13485" },
            },

        ],
        fallback: true
    }
}

export default function serviceId(props: InferGetStaticPropsType<typeof getStaticProps>) {


    const formatText = (text: string) => {
        return text.replace(/\n/g, '<br/>');
        //return text;

    }

    return (
        <div className='w-full min-h-[500px]'>
            <ServiceHero certificate_code={props.data.title} />
            <div className="mt-7 flex flex-col space-y-10 px-4 md:px-[5.2%] mb-10">
                <div className='flex flex-col space-y-5'>
                    <div className="text-xl font-medium text-black-primary">Общие сведения</div>
                    <hr className='w-full md:w-[30%] border-yellow-primary' />
                    <p dangerouslySetInnerHTML={{ __html: formatText(props.data.general) }} className="text-sm md:leading-10 text-dark-secondary">

                    </p>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div className="text-xl font-medium text-black-primary">Внедрение и разработка</div>
                    <hr className='w-full md:w-[30%] border-yellow-primary' />
                    <p dangerouslySetInnerHTML={{ __html: formatText(props.data.implementation) }} className="text-sm md:leading-10 text-dark-secondary">

                    </p>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div className="text-xl font-medium text-black-primary">Внедрение ISO {props.data.title} позволит вам</div>
                    <hr className='w-full md:w-[30%] border-yellow-primary' />
                    <p dangerouslySetInnerHTML={{ __html: formatText(props.data.effect) }} className="text-sm md:leading-10 text-dark-secondary">
                    </p>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div className="text-xl font-medium text-black-primary">Этапы внедрения системы менеджмента качества</div>
                    <hr className='w-full md:w-[30%] border-yellow-primary' />
                    <p dangerouslySetInnerHTML={{ __html: formatText(props.data.stages) }} className="text-sm md:leading-10 text-dark-secondary">
                    </p>
                </div>

            </div>
            <Negotiation />
        </div>

    )
}
