import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface ILayout {
    children: ReactNode
}

export default function Layout(props: ILayout) {
    return (
        <>
            <Header />

            {props.children}
            <Footer />
        </>
    )
}
