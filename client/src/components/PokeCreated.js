import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postPokemon, getTypes, getPokemons } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './PokeCreated.module.css'

function validate(input) {
    let errors = {};
    if(!input.name) {
        errors.name = 'The name is required!';
    } else if (!input.hp) {
        errors.hp = 'The hp is required!';
    } else if (!input.attack) {
        errors.attack = 'The attack is required!';
    } else if (!input.defense) {
        errors.defense = 'The defense is required!';
    } else if (!input.speed) {
        errors.speed = 'The speed is required!';
    } else if (!input.height) {
        errors.height = 'The height is required!';
    } else if (!input.weight) {
        errors.weight = 'The weight is required!';
    } /* else if (/[0-9]/.test(input.hp)) {
        errors.hp = 'The hp is a number!';
    } else if (/[0-9]/.test(input.attack)) {
        errors.attack = 'The attack is a number';
    } else if (/[0-9]/.test(input.defense)) {
        errors.defense = 'The defense is a number';
    } else if (/[0-9]/.test(input.speed)) {
        errors.speed = 'The speed is a number!';
    } else if (/[0-9]/.test(input.height)) {
        errors.height = 'The height is a number!';
    } else if (/[0-9]/.test(input.weight)) {
        errors.weight = 'The weight is a number!';
    } */
    return errors;
};

export default function PokeCreated() {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector(e => e.types);
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name:'',
        hp:'',
        attack:'',
        spirit:'',
        types: [], 
        defense: '',
        speed:'',
        height:'',
        weight:'',
        disabled : true    // deshabilita el boton      
    });

    //const type = useSelector(state => state.type)

    useEffect(() => {
        dispatch(getTypes());
    }, [])

function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            disabled: errors.name? true : false
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        })); 
        //console.log(input);      
    }
function handleSelect(e) {
    setInput({
        ...input,
        types:[...input.types,  e.target.value]
    })
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    if (Object.values(errors).length !== 0) {
        alert('complete all required data')
    } else {
        dispatch(postPokemon(input))
        alert("Pokemon created!")
        setInput({
            name:'',
            hp:'',
            attack:'',
            spirit:'',
            types: [], 
            defense: '',
            speed:'',
            height:'',
            weight:'',
            disabled : true 
        });
        dispatch(getPokemons())
        history.push('/home')
    }    
};

function handleDeleteType(e) {
    setInput({
        ...input,
        types: input.types.filter(t => t !== e )
    })
}
    return (
        <div>
            <Link to = '/home'><button>Back Home</button></Link>
            <h1>Create the New Pokemon</h1>
            <form onSubmit={e => {handleSubmit(e)}}>
                <div>
                    <label htmlFor = 'name'>Name:</label>
                    <input
                        type ='text'
                        id = 'name'
                        value = {input.name}
                        name = 'name'
                        onChange = {e => {handleInputChange(e)}}
                    />
                    {errors.name && (
                        <p className = {style.error}>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor = 'hp'>hp:</label>
                    <input
                        type ='text'
                        id = 'hp'
                        value = {input.hp}
                        name = 'hp'
                        onChange = {e => {handleInputChange(e)}}
                    />
                    {errors.hp && (
                        <p className = {style.error}>{errors.hp}</p>
                    )}
                </div>
                <div>
                    <label htmlFor = 'attack'>Attack:</label>
                    <input
                        type ='text'
                        id = 'attack'
                        value = {input.attack}
                        name = 'attack'
                        onChange = {e => {handleInputChange(e)}}
                    />
                    {errors.attack && (
                        <p className = {style.error}>{errors.attack}</p>
                    )}
                </div>
                <div>    
                    <label htmlFor = 'img'>Image:</label>
                    <input
                        type ='text'
                        id = 'img'
                        value = {input.spirit}
                        name = 'spirit'
                        onChange = {e => {handleInputChange(e)}}
                    />
                    {/* {errors.name && (
                        <p>{errors.name}</p>
                    )} */}
                </div>
                
                <div>
                    <label htmlFor = 'defense'>Defense:</label>
                    <input
                        type ='text'
                        id = 'defense'
                        value = {input.defense}
                        name = 'defense'
                        onChange = {e => {handleInputChange(e)}}
                    />
                    {errors.defense && (
                        <p className = {style.error}>{errors.defense}</p>
                    )}
                </div>
                <div>
                    <label htmlFor = 'speed'>Speed:</label>
                    <input
                        type ='text'
                        id = 'speed'
                        value = {input.speed}
                        name = 'speed'
                        onChange = {e => {handleInputChange(e)}}
                    />
                    {errors.speed && (
                        <p className = {style.error}>{errors.speed}</p>
                    )}
                </div>
                <div>
                    <label htmlFor = 'height'>Height:</label>
                    <input
                        type ='text'
                        id = 'height'
                        value = {input.height}
                        name = 'height'
                        onChange = {e => {handleInputChange(e)}}
                    />
                    {errors.height && (
                        <p className = {style.error}>{errors.height}</p>
                    )}
                </div>
                <div>
                    <label htmlFor = 'weight'>Weight:</label>
                    <input
                        type ='text'
                        id = 'weight'
                        value = {input.weight}
                        name = 'weight'
                        onChange = {e => {handleInputChange(e)}}
                    />
                    {errors.weight && (
                        <p className = {style.error}>{errors.weight}</p>
                    )}
                </div>
                <div>
                    <label htmlFor = 'types'>Types:</label>
                    <select onChange={e => {handleSelect(e)}}  required>
                        <option value="DEFAULT" disabled selected >Choose types</option>
                            {types && types.map(type =>  (
                                    <option key={type.name} value={type.name}>
                                        {type.name}
                                    </option>
                            ))}
                           
                    </select> 
                   {/*  <select onChange={handleSelect} multiple required>
                   holding down the Ctrl key (control) can select more than one option ... (use CTRL to choose more than one)
                <option value="DEFAULT" disabled selected >Choose types</option>
                <option value ='Normal'>Normal</option>
                <option value ='Fighting'>Fighting</option> 
                <option value ='Flying'>Flying</option>
                <option value ='Poison'>Poison</option>
                <option value ='Ground'>Ground</option>
                <option value ='Bug'>Bug</option> 
                <option value ='Ghost'>Ghost</option>
                <option value ='Fire'>Fire</option>
                <option value ='Ice'>Ice</option>
                <option value ='Rock'>Rock</option> 
                <option value ='Water'>Water</option>
                <option value ='Steel'>Steel</option> 
                <option value ='Grass'>Grass</option>
                <option value ='Electric'>Electric</option>
                <option value ='Psychic'>Psychic</option>
                <option value ='Dragon'>Dragon</option> 
                <option value ='Dark'>Dark</option>
                <option value ='Fairy'>Fairy</option>
                <option value ='Unknow'>Unknow</option>
                <option value ='Shadow'>Shadow</option>
                <ul><li>{input.types.map(e => e.name + ',')}</li></ul>
            </select>  */}
                </div>  
                <button type = 'submit'>Create a New Pokemon</button>         
            </form>
            {input.types.map(e =>
                <div>
                    <p>{e}</p>
                    <button onClick = {e => {handleDeleteType(e)}}>X</button>
                </div>
            )}
        </div>
    )
}