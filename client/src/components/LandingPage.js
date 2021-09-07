import  React from 'react';
import { Link } from 'react-router-dom';
import style from '../components/LandingPage.module.css'


export default function LandingPage() {
    return (
        <div className = {style.container}>
            <h1>Welcome to Poket Monster</h1> 
            <Link to = '/home'>
                <button>Start</button>
            </Link>
            <div>
                <img className = { style.sep } src ='https://www.fondoswiki.com/Uploads/fondoswiki.com/ImagenesGrandes/criaturas-pokemon.jpg' alt =' img not found' width='650px' height='auto' />
            </div>            
        </div>
    )
}