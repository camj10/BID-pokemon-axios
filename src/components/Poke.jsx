import React, { useState } from "react";
import axios from 'axios'

function Poke(){
    const [pokemon, setPokemon] = useState([]);
    const obtener = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon').then( 
            response =>{
                setPokemon(response.data.results.map(item =>item.name));
            })
    }
    return(
        <div>
            <h1>Pokemon</h1>
            <button className="submit" onClick={obtener}>Add</button>
            <ul>{
                pokemon.map((item,idx)=><li key={idx}>{item}</li>)
                }
            </ul>
        </div>
    )
}
export default Poke