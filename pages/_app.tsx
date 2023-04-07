import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ["cyrillic", "latin", "latin-ext", "cyrillic-ext"] });

export default function App({ Component, pageProps }: AppProps) {
  return <div className={montserrat.className}>


    <ChakraProvider>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </div>
}
