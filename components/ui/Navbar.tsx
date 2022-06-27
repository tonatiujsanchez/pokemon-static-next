import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"


export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <nav style={{
            display: "flex",
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '7px 30px',
            backgroundColor: theme?.colors.gray50.value
        }}>
            <Link href="/">
                <a style={{display: "flex"}}>
                    <Image
                        width={50} 
                        height={50}
                        src="/pokebola.png"
                        alt="Pokemón" />

                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon</Text>
                </a>
            </Link>
            <Spacer css={{ flex: 1 }} />
            <Text color="white" h3>Favoritos</Text>
        </nav>
    )
}

