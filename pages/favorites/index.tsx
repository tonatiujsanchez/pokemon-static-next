import { useState, useEffect } from 'react';

import { Layout } from "../../components/layouts"
import { NotFavorites } from '../../components/ui';
import { FavoritesPokemons } from "../../components/pokemon";

import { localFavorites } from "../../utils";



const FavoritesPage = () => {

    const [pokemons, setPokemons] = useState<number[]>([])

    useEffect(()=>{
        setPokemons(localFavorites.pokemons)
    },[])
    

    return (
        <Layout title="Pokémons | Favoritos">
            { pokemons.length === 0
                ? ( <NotFavorites /> )
                : ( <FavoritesPokemons pokemons={ pokemons } /> )    
            }
        </Layout>
    )
}

export default FavoritesPage