import React from 'react';
import style from './Card.module.css';

export default function Card({name, sprite, attack, types}) {  // paso por props, por eso no necesito trearme ningun estado 
    return (
        <div className={style.efectolupa } >
            <h2 className = {style.name}>{name}</h2>
            <img className={style.efectolupa }src = {sprite} alt = 'Not found' width = "200px" height = "200px"/>
            <h6>{attack}</h6>
            <h6>{types}</h6>            
        </div>
    )
}