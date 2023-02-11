import React, { useState } from "react";
import axios from 'axios';

function Poke(){
    const [persPokemon, setPersPokemon] = useState([]);
    const obtenerPokemon = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then( 
            response =>{
                setPersPokemon(response.data.results.map(item =>item.name));
            }
            )
    }
    return(
        <>
            <h1>Lista de Pokemones</h1>
            <button className="submit" onClick={obtenerPokemon}>Listar</button>
            <ul>{
                persPokemon.map((item,id)=><li key={id}>{item}</li>)
                }
            </ul>
        </>
    )
}
export default Poke
