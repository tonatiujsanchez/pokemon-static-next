import { useEffect, useState } from 'react';

import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';

import confetti from 'canvas-confetti'

import { Layout } from '../../components/layouts';

import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';
import { pokeApi } from '../../api';
import { PokemonListResponse } from '../../interfaces/pokemon-list';


interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {    
    

    const [isFavorite, setIsFavorite] = useState<boolean>( false )
    
    useEffect(()=>{
        setIsFavorite(localFavorites.pokemonIsFavorite( pokemon.id ))
    },[])
    
    
    const onToggleFavorite = () => {
        localFavorites.toogleFavorites ( pokemon.id )
        setIsFavorite(!isFavorite)

        if(!isFavorite){
            confetti({
                zIndex: 999,
                spread: 127,
                angle: -150,
                particleCount: Math.floor(200 * 3),
                origin:{
                    x: 1,
                    y: 0
                },
                decay: 0.92,
                scalar: 1
            })
        }
    }


    return (
        <Layout title={pokemon.name} >
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            >

                            </Card.Image>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform="capitalize">{pokemon.name}</Text>
                            <Button
                                ghost={!isFavorite}
                                onPress={onToggleFavorite}
                                color="gradient">
                                {!isFavorite ? 'Guardar en favoritos' : 'Remover de favoritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container display="flex" direction="row" gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100} />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100} />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100} />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100} />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`)    
    const pokemonsNames = data.results.map( pokemon => ({ params: { name: `${ pokemon.name }` } }))

    return {
        paths: pokemonsNames,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { name } = params as { name: string }

    return {
        props: {
            pokemon: ( await getPokemonInfo( name ) )
        }
    }
}

export default PokemonByNamePage