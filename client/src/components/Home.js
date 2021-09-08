import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons, filterPokemonsByType, filterCreated, orderByName, orderByAttack } from '../actions';
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
//import style from './Home.module.css';


export default function Home() {

const dispatch = useDispatch();  // para ir despachand las acciones
const allPokemons = useSelector ((state) => state.pokemons);  // allPokemons: arreglo del estado, me trae del reducer el estado pokemons(me trae todos los pokemons)
// Es equivalente al mapStatetoProps
const types = useSelector(state => state.types)

// definiendo estados locales (useState). 

const [order, setOrder] = useState(' ');
const [currentPage, setCurrentPage] = useState(1); // la pag arranca en 1 ( currentPage: pagina actual, setCurrentPage: para setear la pag. actual)
const [pokesForPage, setPokesForPage] = useState(10); //cada pag. mostrara 9 pokemons
const lastPokeForPage = currentPage*pokesForPage;  // 9---18---27---36 (numero del ultimo pokemon de la pag.)
// pag. 1: 1 -----9  pag. 2: 10----18   ---
const firstPokeForPage = lastPokeForPage - pokesForPage + 1;   // 9 - 9 + 1 = 1  numero del primer poke de la pag.
const currentPokes = allPokemons.slice(firstPokeForPage, lastPokeForPage)  // distribuye pokes por pagina del primero al ultimo
// currentPokes: pokemons que estan en la pag. actual; con el .slice() tomo una porcion del array allPokemons.
// son los pokemons que se renderizaran segun la pagina en la que estoy

const paginado = (numberPage) => {  // la usare en el renderizado
     setCurrentPage(numberPage);  // seteamos la pag. en ese num de pag
}


useEffect(() => {   // traer del state los dogs cuandso el componente se monta..
    dispatch(getPokemons())   // es equivalente al mapDispatchtoProps
}, [dispatch])  // 2° parametro para evitar loop infinito

function handleClick(e) {  // funcion para  que se ejecute cuando se presiona el boton
    e.preventDefault();
    dispatch(getPokemons());
}  // resetea la pantalla

function handleFilterType (e) {
    dispatch(filterPokemonsByType(e.target.value))  // accedo a los value de cada option que esta en el select
}

function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value))  // accedo a los value de cada option que esta en el select
} // e.target.value en la action es el payload

function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value))  // accedo a los value de cada option que esta en el select
    setCurrentPage(1);  // setea la pag. ppal ( cuando hago el ordenamiento.. set¿eala en la primera)
    setOrder(`Ordenado ${e.target.value}`)  // clave para que me renderice el nuevo orden. Estadlo local donde el renderizado es la lista ordenada
}  // me indica en que orden renderizar

function handleOrderAttack (e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value))  // accedo a los value de cada option que esta en el select
    setCurrentPage(1);  // setea la pag. ppal 
    setOrder(`Ordenado ${e.target.value}`)  // clave para que me renderice el nuevo orden.
}  // me indica en que orden renderizar

    return (        
    <div>
        <Link to = '/pokemons'>Create a new PoKemon</Link>
        <h1>API Pokemon</h1>
        <button onClick = {e => {handleClick (e)}}>Repeat load</button>
        <SearchBar/>        
           <div>       
            <select onChange= { e=> handleOrderName(e) } >
                <option value="DEFAULT" disabled selected>Choose Order Name</option>
                <option value ='asc'>Ascending</option>
                <option value ='desc'>Descending</option>
            </select>
            <select  onChange= { e=> handleOrderAttack(e) }>
                <option value="DEFAULT" disabled selected>Choose Order Attack</option>
                <option value ='asc'>Ascending</option>
                <option value ='desc'>Descending</option>
            </select>
            <select onChange = {e => handleFilterCreated(e)} >
                <option value="DEFAULT" disabled selected>Choose Origin Data</option>
                <option value ='All'>All</option>
                <option value ='Created'>Created</option>
                <option value ='Existent'>Existent</option>
            </select>
            <select className="form-select" name='select' onChange= {e => handleFilterType(e)}>
                    <option value="DEFAULT" disabled selected>Choose Types</option>
                   {types && types.map(t =>  (
                       <option key={t.name} value={t.name}>{t.name}</option>
                   ))}
            </select>  
            {/* <select onChange = {e => handleFilterType(e)}> 
                <option value="DEFAULT" disabled selected>Choose Types</option>
                <option value ='All'>All</option>
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
            </select> */}
            {/* <input type="reset" value="Restaurar"/> */}
            <div >
            <Paginado 
                    pokesForPage = {pokesForPage} 
                    allPokemons = {allPokemons.length} 
                    paginado = {paginado}
                />
                { currentPokes?.map((e) => {
                return (
                    <fragment >
                         <Link to ={'/home'+ e.id}>
                            <Card id={e.id} name = {e.name} sprite = {e.sprite} types={e.types.map(t => <h3 key={t.id}>{t.name}</h3>)} />
                        </Link>
                    </fragment>
                    
                    );
                })}
            </div>    
                <Paginado 
                    pokesForPage = {pokesForPage} 
                    allPokemons = {allPokemons.length} 
                    paginado = {paginado}
                />
            </div>
    </div> 
    )
};

