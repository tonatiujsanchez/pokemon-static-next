import { useEffect, useState } from "react";

import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti'


import { Layout } from "../../components/layouts"
import { Pokemon } from "../../interfaces"
import { pokeApi } from "../../api"
import { getPokemonInfo, localFavorites } from "../../utils";



interface Props {
    pokemon: Pokemon
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

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
        <Layout title={ pokemon.name } >
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
                                ghost={ !isFavorite }
                                onPress={onToggleFavorite} 
                                color="gradient">
                                { !isFavorite ? 'Guardar en favoritos' : 'Remover de favoritos' }
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



// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes



export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => ({ params: { id: `${index + 1}` } }))

    return {
        paths: pokemons151,
        fallback: false
    }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }

    return {
        props: {
            pokemon: ( await getPokemonInfo(id) )
        }
    }
}



export default PokemonPage