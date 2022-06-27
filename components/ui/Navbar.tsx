import NextLink from "next/link"
import Image from "next/image"
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"


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
            <NextLink href="/" passHref>
                <Link css={{display: "flex", alignItems:"center"}}>
                    <Image
                        width={50}
                        height={50}
                        src="/pokebola.png"
                        alt="Pokemón" />

                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon</Text>
                </Link>
            </NextLink>
            <Spacer css={{ flex: 1 }} />
            <NextLink href="/favorites" passHref>
                <Link>
                    <Text color="white" h3>Favoritos</Text>
                </Link>
            </NextLink>
        </nav>
    )
}

