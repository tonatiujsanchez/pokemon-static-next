import { FC } from "react"

import Head from "next/head"
import { useRouter } from 'next/router';

import { Navbar } from '../ui';

interface Props {
    children: JSX.Element,
    title?: String
}

export const Layout: FC<Props> = ({ children, title }) => {

    const router= useRouter()
    
    const origin = (typeof window === 'undefined') ? '' : window.location.origin
        
    
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Tonatiuj Sánchez" />
                <meta name="description" content={`Información sobre el pockemon ${title}`} />
                <meta name="keywords" content={`${title}, Pokemon, Pokedex, Pokeapp`} />


                <meta property="og:url"         content={`${origin}${router.asPath}`} />
                <meta property="og:type"        content="article" />
                <meta property="og:title"       content={`Pokémon ${title}`} />
                <meta property="og:description" content={`Información sobre el pokémon ${title}`} />
                <meta property="og:image"       content={`${origin}/img/pokemon-banner.jpg`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0 20px',
                marginTop: '20px'
            }}>
                {children}
            </main>
        </>
    )
}
