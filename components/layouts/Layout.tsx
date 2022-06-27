import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    children: JSX.Element,
    title?: String
}

export const Layout: FC<Props> = ({ children, title } ) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Tonatiuj Sánchez" />
                <meta name="description" content={`Información sobre el pockemon ${ title }`} />
                <meta name="keywords" content={`${title}, Pokemon, Pokedex, Pokeapp`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0 20px',
                marginTop: '20px'
            }}>
                { children }
            </main>
        </>
    )
}
