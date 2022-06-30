import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
    idPoke: number
}

export const FavoritesPokemonsCard: FC<Props> = ({ idPoke }) => {

    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${idPoke}`)
    }

    return (
        <Grid 
            xs={6} 
            sm={3} 
            md={2} 
            xl={1}
            onClick={onFavoriteClicked}>
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPoke}.svg`}
                    width={'100%'}
                    height={120}
                />
            </Card>
        </Grid>
    )
}

