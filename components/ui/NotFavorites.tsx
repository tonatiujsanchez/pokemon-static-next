import { Container, Image, Text } from "@nextui-org/react"


export const NotFavorites = () => {
    return (
        <Container css={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 100px)",
            alignItems: "center",
            justifyContent: "center",
            opacity: "0.5"
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
                width={150}
                height={150}

            />
            <Text h2>No hay favoritos</Text>
        </Container>
    )
}

 