import React from 'react';
import style from './Card.module.css';

export default function Card({name, sprite, types}) {  // paso por props, por eso no necesito trearme ningun estado 
    return (
        <div>
            <h3 className = {style.name}>{name}</h3>
            <img src = {sprite} alt = 'Not found' width = "200px" height = "200px"/>
            <h6>{types}</h6>
            
        </div>
    )
}