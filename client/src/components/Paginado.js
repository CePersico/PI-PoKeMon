import React from 'react';
import style from './Paginado.module.css';


export default function Paginado ({pokesForPage, allPokemons, paginado}) {
    const numbersPage = [];
    for (let i = 1; Math.ceil(allPokemons/pokesForPage) +1 > i; i++ ) {   // si allPokemons.length = 181 y pokesForPage = 9 ----+ math.ceil(181/9) =21
        numbersPage.push(i);   // genero un array con los numeros de las paginas
    }
    // numbersPage = [ 1, 2, ....., 20, 21]
    return (
        <nav>
            <ul className={style.pagination}>
                {numbersPage && numbersPage.map(number => (
                    <li className ={style.lista}  key = {number}>
                        <a className={style.button} 
                            onClick ={() => paginado(number)
                            }>
                                {number}
                        </a>  
                    </li> 
                ))}
            </ul>
        </nav>
    )
}



