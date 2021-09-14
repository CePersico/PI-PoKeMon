// import React, {useState, useEffect} from 'react';
// import {Link, useHistory} from 'react-router-dom';
// import {postPokemon, getTypes, getPokemons } from '../actions';
// import { useDispatch, useSelector } from 'react-redux';
// import style from './PokeCreated.module.css'

// function validate(input) {
//     let errors = {};
//     if(!input.name) {
//         errors.name = 'The name is required!';
//     } else if (!input.hp) {
//         errors.hp = 'The hp is required!';
//     } else if (!input.attack) {
//         errors.attack = 'The attack is required!';
//     } else if (!input.defense) {
//         errors.defense = 'The defense is required!';
//     } else if (!input.speed) {
//         errors.speed = 'The speed is required!';
//     } else if (!input.height) {
//         errors.height = 'The height is required!';
//     } else if (!input.weight) {
//         errors.weight = 'The weight is required!';
//     } /* else if (/[0-9]/.test(input.hp)) {
//         errors.hp = 'The hp is a number!';
//     } else if (/[0-9]/.test(input.attack)) {
//         errors.attack = 'The attack is a number';
//     } else if (/[0-9]/.test(input.defense)) {
//         errors.defense = 'The defense is a number';
//     } else if (/[0-9]/.test(input.speed)) {
//         errors.speed = 'The speed is a number!';
//     } else if (/[0-9]/.test(input.height)) {
//         errors.height = 'The height is a number!';
//     } else if (/[0-9]/.test(input.weight)) {
//         errors.weight = 'The weight is a number!';
//     } */
//     return errors;
// };

// export default function PokeCreated() {
//     // Solicitado en la ruta del POST del Back: 
//     // const { name, hp, attack, defense, speed, height, weight, sprite, types, createInDb } = req.body

//     const dispatch = useDispatch();
//     const history = useHistory();
//     const types = useSelector(e => e.types);
//     const [errors, setErrors] = useState({});
//     const [input, setInput] = useState({
//         name:'',
//         hp:'',
//         attack:'',
//         defense: '',
//         speed:'',
//         height:'',
//         weight:'',
//         sprite:'',
//         types: [], 
//        disabled : true    // deshabilita el boton  
//     });

//     useEffect(() => {
//         dispatch(getTypes());
//     }, [])

// function handleInputChange(e) {
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value,
//             disabled: errors.name? true : false
//         });
//         setErrors(validate({
//             ...input,
//             [e.target.name]: e.target.value
//         })); 
//         //console.log(input);      
//     }
// function handleSelect(e) {
//     setInput({
//         ...input,
//         types:[...input.types,  e.target.value]
//     })
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     console.log(input);
//     console.log('typeOf:',typeof(input.hp))  // toma un string y en la DB debe ser INTEGER
//     if (Object.values(errors).length !== 0) {
//         alert('complete all required data')
//     } else {
//         dispatch(postPokemon(input))
//         alert("Pokemon created!")
//         setInput({
//             name:'',
//             hp:'',
//             attack:'',
//             defense: '',
//             speed:'',
//             height:'',
//             weight:'',
//             sprite:'',
//             types: [], 
//             disabled : true 
//         });
//         dispatch(getPokemons())
//         history.push('/home')
//     }    
// };

// function handleDeleteType(e) {
//     setInput({
//         ...input,
//         types: input.types.filter(t => t !== e.name )
//     })
// }
//     return (
//         <div>
//             <Link to = '/home'><button>Back Home</button></Link>
//             <h1>Create the New Pokemon</h1>
//             <form method="post" onSubmit={e => {handleSubmit(e)}}>
//                 <div>
//                     <label htmlFor = 'name'>Name:</label>
//                     <input
//                         type ='text'
//                         id = 'name'
//                         value = {input.name}
//                         name = 'name'
//                         onChange = {e => {handleInputChange(e)}}
//                     />
//                     {errors.name && (
//                         <p className = {style.error}>{errors.name}</p>
//                     )}
//                 </div>
//                 <div>
                //     <label htmlFor = 'hp'>hp:</label>
                //     <input
                //         type ='number'
                //         min = '0'
                //         id = 'hp'
                //         value = {input.hp}
                //         name = 'hp'
                //         onChange = {e => {handleInputChange(e)}}
                //     />
                //     {errors.hp && (
                //         <p className = {style.error}>{errors.hp}</p>
                //     )}
                // </div>
                // <div>
                //     <label htmlFor = 'attack'>Attack:</label>
                //     <input
                //         type ='number'
                //         min = '0'
                //         id = 'attack'
                //         value = {input.attack}
                //         name = 'attack'
                //         onChange = {e => {handleInputChange(e)}}
                //     />
                //     {errors.attack && (
                //         <p className = {style.error}>{errors.attack}</p>
                //     )}
                // </div>
                // <div>    
                //     <label htmlFor = 'img'>Image:</label>
                //     <input
                //         type ='url'
                //         id = 'img'
                //         value = {input.sprite}
                //         name = 'spirit'
                //         onChange = {e => {handleInputChange(e)}}
                //     />
                //     {/* {errors.name && (
                //         <p>{errors.name}</p>
                //     )} */}
                // </div>
                
                // <div>
                //     <label htmlFor = 'defense'>Defense:</label>
                //     <input
                //         type ='number'
                //         min = '0'
                //         id = 'defense'
                //         value = {input.defense}
                //         name = 'defense'
                //         onChange = {e => {handleInputChange(e)}}
                //     />
                //     {errors.defense && (
                //         <p className = {style.error}>{errors.defense}</p>
                //     )}
                // </div>
                // <div>
                //     <label htmlFor = 'speed'>Speed:</label>
                //     <input
                //         type ='number'
                //         min = '0'
                //         id = 'speed'
                //         value = {input.speed}
                //         name = 'speed'
                //         onChange = {e => {handleInputChange(e)}}
                //     />
                //     {errors.speed && (
                //         <p className = {style.error}>{errors.speed}</p>
                //     )}
                // </div>
                // <div>
                //     <label htmlFor = 'height'>Height:</label>
                //     <input
                //         type ='number'
                //         min = '0'
                //         id = 'height'
                //         value = {input.height}
                //         name = 'height'
                //         onChange = {e => {handleInputChange(e)}}
                //     />
                //     {errors.height && (
                //         <p className = {style.error}>{errors.height}</p>
                //     )}
                // </div>
                // <div>
                //     <label htmlFor = 'weight'>Weight:</label>
                //     <input
                //         type ='number'
                //         min = '0'
                //         id = 'weight'
                //         value = {input.weight}
                //         name = 'weight'
                //         onChange = {e => {handleInputChange(e)}}
                //     />
                //     {errors.weight && (
                //         <p className = {style.error}>{errors.weight}</p>
                //     )}
                // </div>
//                 <div>
//                     <label htmlFor = 'types'>Types:</label>
//                     <select onChange={e => {handleSelect(e)}}  required>
//                         <option value="DEFAULT" disabled selected >Choose types</option>
//                             {types && types.map(type =>  (
//                                     <option key={type.name} value={type.name}>
//                                         {type.name}
//                                     </option>
//                             ))}
                           
//                     </select> 
//                    {/*  <select onChange={handleSelect} multiple required>
//                    holding down the Ctrl key (control) can select more than one option ... (use CTRL to choose more than one)
//                 <option value="DEFAULT" disabled selected >Choose types</option>
//                 <option value ='Normal'>Normal</option>
//                 <option value ='Fighting'>Fighting</option> 
//                 <option value ='Flying'>Flying</option>
//                 <option value ='Poison'>Poison</option>
//                 <option value ='Ground'>Ground</option>
//                 <option value ='Bug'>Bug</option> 
//                 <option value ='Ghost'>Ghost</option>
//                 <option value ='Fire'>Fire</option>
//                 <option value ='Ice'>Ice</option>
//                 <option value ='Rock'>Rock</option> 
//                 <option value ='Water'>Water</option>
//                 <option value ='Steel'>Steel</option> 
//                 <option value ='Grass'>Grass</option>
//                 <option value ='Electric'>Electric</option>
//                 <option value ='Psychic'>Psychic</option>
//                 <option value ='Dragon'>Dragon</option> 
//                 <option value ='Dark'>Dark</option>
//                 <option value ='Fairy'>Fairy</option>
//                 <option value ='Unknow'>Unknow</option>
//                 <option value ='Shadow'>Shadow</option>
//                 <ul><li>{input.types.map(e => e.name + ',')}</li></ul>
//             </select>  */}
//                 </div>  
//                 <button type = 'submit' disabled={input.disabled}>Create a New Pokemon</button>         
//             </form>
//             {input.types.map(e =>
//                 <div>
//                     <p>{e}</p>
//                     <button onClick = {e => {handleDeleteType(e)}}>X</button>
//                 </div>
//             )}
//         </div>
//     )
// }

import {useState, useEffect} from 'react'
import axios from 'axios'
import style from './PokeCreated.module.css'

function validate(pokemon) {
    let errors = {};
    if(!pokemon.name) {
        errors.name = 'The name is required!';
    } else if (!pokemon.hp) {
        errors.hp = 'The hp is required!';
    } else if (!pokemon.attack) {
        errors.attack = 'The attack is required!';
    } else if (!pokemon.defense) {
        errors.defense = 'The defense is required!';
    } else if (!pokemon.speed) {
        errors.speed = 'The speed is required!';
    } else if (!pokemon.height) {
        errors.height = 'The height is required!';
    } else if (!pokemon.weight) {
        errors.weight = 'The weight is required!';
    } 
    return errors;
};


export default function PokeCreated(){
   // const { name, hp, attack, defense, speed, height, weight, sprite, types, createInDb } = req.body
    const [pokemon, setPokemon] = useState({
        name:'',
        hp: '',
        attack:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',
        sprite:'',
        types: [],
    })
    
    const [types, setTypes] = useState([])
    const [errors, setErrors] = useState({});

    function getTypes() {
        axios.get('http://localhost:3001/types/')
        .then(response => {
            setTypes(response.data)
        })
    }

    useEffect(() => {
        getTypes()
    }, [])

    function onInputChange(e) {
        setPokemon((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
        setErrors(validate({
            ...pokemon,
            [e.target.name]: e.target.value
        })); 
    }
    

    function agregarTypesAlPokemon(id) {
        setPokemon({
            ...pokemon,
            types: [...pokemon.types, id]
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post('http://localhost:3001/pokemons/', pokemon)
        alert('The new Pokemon is created')
    }
    return <form onSubmit={handleSubmit}>
        <p>
        <label htmlFor="">Name:  </label>
        <input
            type="text"
            name="name"
            value={pokemon.name}
            onChange={onInputChange}/>
             {errors.name && (
                         <p className = {style.error}>{errors.name}</p>
                    )}
        </p>
        <p> 
        <label htmlFor="">Image:  </label>
        <input
            type="text"
            name="sprite"
            value={pokemon.sprite}
            onChange={onInputChange}/>
        </p>
        <p> 
        <label htmlFor="">Hp:  </label>
        <input
            type="text"
            name="hp"
            value={pokemon.hp}
            onChange={onInputChange}/>
        </p>
        <p> 
        <label htmlFor="">Attack:  </label>
        <input
            type="text"
            name="attack"
            value={pokemon.attack}
            onChange={onInputChange}/>
        </p>
        <p> 
        <label htmlFor="">Defense:  </label>
        <input
            type="text"
            name="defense"
            value={pokemon.defense}
            onChange={onInputChange}/>
        </p>
        <p> 
        <label htmlFor="">Speed:  </label>
        <input
            type="text"
            name="speed"
            value={pokemon.speed}
            onChange={onInputChange}/>
        </p>
        <p> 
        <label htmlFor="">Height:  </label>
        <input
            type="text"
            name="height"
            value={pokemon.height}
            onChange={onInputChange}/>
        </p>
        <p> 
        <label htmlFor="">Weight:  </label>
        <input
            type="text"
            name="weight"
            value={pokemon.weight}
            onChange={onInputChange}/>
        </p>
        <div>
            <p> 
                <label htmlFor="">Types:  </label>
            </p>

            {types.map(type => {
                return <div>
                    {type.name}
                    <button 
                        onClick={() => agregarTypesAlPokemon(type.id)}>
                            Agregar al personaje
                    </button>
                </div>
            })}
        </div>
        <input type="submit"/>
    </form>
}