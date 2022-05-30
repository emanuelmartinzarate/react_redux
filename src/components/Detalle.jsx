import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { unPokeDetalleAccion } from '../redux/pokesDucks'

const Detalle = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      const fetchData = () => {
        dispatch(unPokeDetalleAccion())
      }

      fetchData()
    }, [dispatch])
    
    const pokemon = useSelector( store => store.pokemones.unPokemon)



  return pokemon ? (
    <div className="card mt-4 text-center">
        <div className="card-body">
            <img src={pokemon.foto} className="img-fluid" alt=""></img>
            <div className="car-title">{pokemon.nombre}</div>
            <div className="card-text">Alto: {pokemon.alto} | Ancho: {pokemon.ancho}</div>
        </div>
    </div>
  ): null
}

export default Detalle