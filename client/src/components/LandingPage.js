import  React from 'react';
import { Link } from 'react-router-dom';
import style from '../components/LandingPage.module.css'


export default function LandingPage() {
    return (
        <div className = {style.container}>
            <h1 className = {style.title}>Welcome to Poket Monster</h1> 
            <Link to = '/home' className= {style.text}> 
                <button className = {style.btn} >Enter</button>
            </Link>
            <div>
                <img className = { style.sep } src ='https://i.pinimg.com/originals/d2/51/65/d25165bb6827b0fa5a25e0584e4b6816.gif' alt =' img not found' width='900px' height='auto' />
            </div>            
        </div> 
    )
}

// 'https://www.fondoswiki.com/Uploads/fondoswiki.com/ImagenesGrandes/criaturas-pokemon.jpg'