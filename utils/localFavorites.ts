
const KEY_STOREGE = 'pokemon-favorites-1656518993391'

const toogleFavorites = ( id: number ) => {    

    let favorites: number[] = JSON.parse( localStorage.getItem(KEY_STOREGE) || '[]' )

    if( favorites.includes(id) ){
        favorites = favorites.filter( pokeId => pokeId !== id  )
    }else{
        favorites = [ ...favorites, id ]
    }

    localStorage.setItem(KEY_STOREGE, JSON.stringify(favorites))
} 


const pokemonIsFavorite = (id: number): boolean => {

    if( typeof window === 'undefined' ) return false

    const favorites: number[] = JSON.parse( localStorage.getItem(KEY_STOREGE) || '[]' )
    
    return favorites.includes( id )
}

const pokemons = ():number[] => {

    return JSON.parse( localStorage.getItem(KEY_STOREGE) || '[]' )
}


export default{
    toogleFavorites,
    pokemonIsFavorite,
    pokemons
}