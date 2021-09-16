import { 
    GET_POKEMONS, 
    FILTER_BY_TYPES, 
    FILTER_CREATED, 
    ORDER_BY_NAME, 
    ORDER_BY_ATTACK, 
    GET_POKE_BY_NAME, 
    GET_TYPES, 
    POST_POKEMON, 
    GET_DETAILS 
} from "../actions";

//primero, seteamos nuestro estado inicial
    const initialState = {
        pokemons : [],  // aca van los pokemons filtrados
        allPokemons : [],  // copia del estado que tenga los pokemons 'todos' ( para evitar que cuando haga un filter, y luego otro-- filtre sobre lo filtrado)
        types : [],
        details : []
    }
//Esta funcion rootReducer va a llamarse con el initialState como valor predeterminado, y segundo parametro
//las acciones, cuando despachemos una accion, se va a ejecutar nuevamente con el estado de ese momento, 
//mas la accion
   

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                 ...state,
                 pokemons: action.payload,
                 allPokemons: action.payload
        }
        case FILTER_BY_TYPES:
            let allPokemons = state.allPokemons;
                                         
            const filterPoke = action.payload === "All" ? 
                                allPokemons : 
                                allPokemons.filter(e => {
                    return e.types?.map(e => e.name).includes(action.payload);
                });            
            return {
                ...state,
                pokemons: filterPoke,
        };                       
        case FILTER_CREATED:
        const createdFilter = action.payload === 'Created' ? 
                                    state.allPokemons.filter(e => e.createdInDb) : 
                                    state.allPokemons.filter( e => ! e.createdInDb)
        return {
            ...state,
            pokemons: action.payload === 'All'? 
                      state.allPokemons : createdFilter                                        
        }
        case ORDER_BY_NAME:
            let arrOrder = action.payload === 'asc' ?
            state.pokemons.sort(function(x, y) {
                if (x.name > y.name) {
                    return 1;                    
                }
            if (y.name > x.name) {
                return -1;                    
            }
            return 0;
            }) :
            state.pokemons.sort(function(x, y) {
                if (x.name > y.name) {
                    return -1;                    
                }
            if (y.name > x.name) {
                return 1;                    
            }
            return 0;
            })
            console.log(arrOrder);   
        return {
            ...state,
            pokemons: [...arrOrder]  // cambio la posicion de mem
        }   
        case ORDER_BY_ATTACK:
            let arrOrderAt = action.payload === 'asc' ?
            state.pokemons.sort(function(x, y) {
                if (x.attack > y.attack) {
                    return 1;                    
                }
            if (y.attack > x.attack) {
                return -1;                    
            }
            return 0;
            }) :
            state.pokemons.sort(function(x, y) {
                if (x.attack > y.attack) {
                    return -1;                    
                }
            if (y.attack > x.attack) {
                return 1;                    
            }
            return 0;
            })
            console.log(arrOrderAt);   
            // revisar, consologuea bien pero no me lo muestra desc--
        return {
            ...state,
            pokemons: arrOrderAt
        } 
        case GET_TYPES:
            return {
                ...state, 
                types: action.payload
        } 
        case POST_POKEMON:
            return {
                ...state, 
        }
        case GET_POKE_BY_NAME:
            return {
                ...state,
                pokemons: action.payload
        }  
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
        } 
        default:
               return state; 
    }
}