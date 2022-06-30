import { Card, Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoritesPokemonsCard } from './';


interface Props {
    pokemons: number[]
}

export const FavoritesPokemons: FC<Props> = ({ pokemons }) => {



    return (
        <Grid.Container 
            gap={2} 
            direction="row" 
            justify="flex-start" >
            {
                pokemons.map(idPoke => (
                    <FavoritesPokemonsCard key={idPoke} idPoke={idPoke} />
                ))
            }
        </Grid.Container>
    )
}