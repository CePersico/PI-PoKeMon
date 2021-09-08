import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postPokemon, getTypes, getPokemons} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function PokeCreated() {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector(e => e.types)
    const [input, setInput] = useState({
        name:'',
        hp:'',
        attack:'',
        spirit:'',
        types: [], 
        defense: '',
        speed:'',
        height:'',
        weight:''        
    });

    //const type = useSelector(state => state.type)

    useEffect(() => {
        dispatch(getTypes());
    }, [])

function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        }); 
        console.log(input);      
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
        weight:'' 
    });
    history.push('/pokemons')
};

    return (
        <div>
            <Link to = '/home'><button>Back</button></Link>
            <h1>Create the New Pokemon</h1>
            <form onSubmit={e => {handleSubmit(e)}}>
                <div>
                    <label>Name:</label>
                    <input
                        type ='text'
                        value = {input.name}
                        name = 'name'
                        onChange = {handleInputChange}
                    />
                </div>
                <div>
                    <label>hp:</label>
                    <input
                        type ='text'
                        value = {input.hp}
                        name = 'hp'
                        onChange = {handleInputChange}
                    />
                </div>
                <div>
                    <label>Attack:</label>
                    <input
                        type ='text'
                        value = {input.attack}
                        name = 'attack'
                        onChange = {handleInputChange}
                    />
                </div>
                <div>    
                    <label>Image:</label>
                    <input
                        type ='text'
                        value = {input.spirit}
                        name = 'spirit'
                        onChange = {handleInputChange}
                    />
                </div>
                
                <div>
                    <label>Defense:</label>
                    <input
                        type ='text'
                        value = {input.defense}
                        name = 'defense'
                        onChange = {handleInputChange}
                    />
                </div>
                <div>
                    <label>Speed:</label>
                    <input
                        type ='text'
                        value = {input.speed}
                        name = 'speed'
                        onChange = {handleInputChange}
                    />
                </div>
                <div>
                    <label>Height:</label>
                    <input
                        type ='text'
                        value = {input.height}
                        name = 'height'
                        onChange = {handleInputChange}
                    />
                </div>
                <div>
                    <label>Weight:</label>
                    <input
                        type ='text'
                        value = {input.weight}
                        name = 'weight'
                        onChange = {handleInputChange}
                    />
                </div>
                <div>
                    <label>Types:</label>
                    <select onChange={handleSelect} multiple required>
                        <option value="DEFAULT" disabled selected >Choose types</option>
                            {types && types.map(type =>  (
                                    <option key={type.name} value={type.name}>
                                        {type.name}
                                    </option>
                            ))}
                         <ul><li>{input.types.map(e => e.name + ',')}</li></ul>                       
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
        </div>
    )
}