import { 
    GET_POKEMONS, 
    FILTER_BY_TYPES, 
    FILTER_CREATED, 
    ORDER_BY_NAME, 
    ORDER_BY_ATTACK, 
    // GET_POKE_BY_NAME, 
    // GET_TYPES, 
    // POST_POKEMON, 
    // GET_DETAILS 
} from "../actions";

    const initialState = {
        pokemons : [],  // aca van los pokemons filtrados
        allPokemons : [],  // copia del estado que tenga los pokemons 'todos' ( para evitar que cuando haga un filter, y luego otro-- filtre sobre lo filtrado)
        types : [],
        details : []
    }
    

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                 ...state,
                 pokemons: action.payload,
                 allPokemons: action.payload
            } 
        case FILTER_BY_TYPES:
            const allPokemons = state.allPokemons
            const pokeWithTypes = allPokemons.map(p => {
                return {...p, types: p.types.map(e => e.name.toLowerCase())}  // ver como accado al type!!
            })
            console.log('pokeWithTypes:', pokeWithTypes);   // types es un array que tiene los tipos
            // const pokesFilter =  pokeWithTypes.filter((e) => {
            //     return e.types?.includes(action.payload)
            //   }); 

              const pokesFilterFirst = action.payload === 'All' ? allPokemons :
                                    state.allPokemons.filter(i => i.types[0] === action.payload.toLowerCase() )
              const pokesFilterSecond = action.payload === 'All' ? allPokemons :
                                    state.allPokemons.filter(i => i.types[1] === action.payload.toLowerCase() )

            console.log('pokesFilterFirst:', pokesFilterFirst)
            console.log('pokesFilterSecond:', pokesFilterSecond)
            return {
                ...state,
                pokemons: pokesFilterFirst || pokesFilterSecond
            }
            // la logica en el reducer va antes de return!!
        //     const allPokemons = state.allPokemons;  // para acceder a los pokemons en el reducer==) usar STATE
        //     const typeFiltered = allPokemons.filter(e => e.types === action.payload)  // en payload llega el value de cada option
        //  return {
        //         ...state,
        //         pokemons: typeFiltered 
        //     }
        case FILTER_CREATED:
        const createdFilter = action.payload === 'Created' ? 
                                    state.allPokemons.filter(e => e.createdInDb) : 
                                    state.allPokemons.filter( e => ! e.createdInDb)
        return {
            ...state,
            pokemons: action.payload === 'All'? 
                                        state.allPokemons : 
                                        createdFilter
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
            pokemons: arrOrder
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
//         case GET_TEMP:
//             return {
//                 ...state, 
//                 temperaments: action.payload
//             } 
//         case POST_DOG:
//             return {
//                 ...state, 
//             }
//         case GET_DOG_BY_NAME:
//             return {
//                 ...state,
//                 dogs: action.payload
//             }  
//         case GET_DETAILS:
//             return {
//                 ...state,
//                 details: action.payload
//             } 
        default:
               return state; 
    }
}