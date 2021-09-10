import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKE_BY_NAME = 'GET_POKE_BY_NAME';
export const GET_TYPES = 'GET_TYPES';
export const GET_DETAILS = 'GET_DETAILS';
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK';
export const POST_POKEMON = 'POST_POKEMON';



export function getPokemons() {
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/pokemons', {  // me traigo el get del Back( con la ruta que en el BACK trae todos los Pokemons)
                          // json = [{name: ..., height:..., weight: ..., ...types: [.....]}, {..}, ....]            
        })  // conexion entre BACK y front!! LA MAGIA!!!
        return dispatch({
            type: GET_POKEMONS,
            payload: json.data
        }); 
    };
};

// la misma action pero con promesas!! 
// const getPokemons = () => {
//     return async(dispatch) => {
//         dispatch(setLoading())
//         await axios.get(POKEMON_URL)
//         .then(res => { dispatch
//             ({type: GET_POKEMON, payload: res.data})})
//     }
// };

export function getNamePoke(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)  // ruta por query del back
            return dispatch ({
                type: GET_POKE_BY_NAME,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}  // la ruta funcionaba en el back.. aca tire¿a error!! revisar

export function getTypes() {  // esta accion despacha la ruta del Back que trae los Types
    return async function (dispatch) {
        var typesArr = await axios ("http://localhost:3001/types", {  // llamamos al GET/types del Back

        });
        return dispatch({
            type: GET_TYPES,
            payload: typesArr.data
        });
    }
}

export function getDetails(id) {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/pokemons/' + id);
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}



export function filterPokemonsByType(payload) {
    console.log(payload);  // verificado que funciona esta parte
    return {
        type: FILTER_BY_TYPES,
        payload
    }   
};

export function filterCreated(payload) {
    console.log(payload);  // verificado que funciona esta parte
    return {
        type: FILTER_CREATED,
        payload
    }   
};

export function orderByName(payload) {
    console.log(payload);  // verificado que funciona esta parte
    return {
        type: ORDER_BY_NAME,
        payload
    }   
};

export function orderByAttack(payload) {
    console.log(payload);  // verificado que funciona esta parte
    return {
        type: ORDER_BY_ATTACK,
        payload
    }   
};


export function postPokemon(payload) {
    return async function(dispatch) {
        const res =  await axios.post("http://localhost/3001/pokemons", payload);  // hacemos el post para crear el Pokemon
        console.log(res);
        return res;
    }
};





