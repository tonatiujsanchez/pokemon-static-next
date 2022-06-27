import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";

import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '../themes';

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <NextUIProvider theme={darkTheme}>
            <NextNProgress color="#FA1D1C" height={3} />
            <Component {...pageProps} />
        </NextUIProvider>
    )
}

export default MyApp
