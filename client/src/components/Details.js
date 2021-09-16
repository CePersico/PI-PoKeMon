    import React, { useEffect, useState } from "react";
    import {Link, useParams} from 'react-router-dom'
    import { useDispatch, useSelector } from "react-redux";
    import { getDetails } from "../actions";
    import style from './Details.module.css'
    
    export default function Details(props) {
        const {id} = useParams();
        console.log('id:',id);
        const dispatch = useDispatch();
        const pokeDetail = useSelector((state) => state.details)

    useEffect (() => {
        dispatch(getDetails(id))
    }, [id, dispatch])
        
        console.log('pokeDetail:',pokeDetail);
        console.log('long array:',pokeDetail.length)
        //console.log('name:',pokeDetail[0].name)
    return (
        <div className = {style.container}>
            <Link to = '/home'>
                <button className = {style.btn}>Back</button>
            </Link>
                <div className = {style.pokedetail}>
                    <h2>Name: {pokeDetail?.name}</h2>
                    <img src = {pokeDetail?.sprite} alt = 'Not found' width='300px' height='500px'/>
                    <h4>Id: {pokeDetail?.id}</h4>
                    <h4>Hp: {pokeDetail?.hp}</h4>
                    <h4>Speed: {pokeDetail?.speed}</h4>
                    <h4>Weight: {pokeDetail?.weight}</h4>
                    <h4>Height: {pokeDetail?.height}</h4>
                    <h4>Attack: {pokeDetail?.attack}</h4>
                    <h4>Defense: {pokeDetail?.defense}</h4>
                    <h4>Type/s: {pokeDetail.type?.map(e => e + ' - ')}</h4>
                    {/* 
                    <h4>{!pokeDetail.createdInDb ?
                           pokeDetail.types.map(e => e + (' ')) :
                           pokeDetail.type.map(e => e.name + (' '))
                        }
                    </h4>   */}
                </div>             
            <Link to = '/home'>
                <button className = {style.btn}>Back</button>
            </Link>
         </div>
    )
}
    
    
    
    /*     console.log(props);
        const [loading, setLoading] = useState(false)
        const details = useSelector(state => state.details);
        const dispatch = useDispatch();
        const id = props.match.params.id;
    
        useEffect(() => {
            dispatch(getDetails(id))
                setLoading(true)
        }, [id, dispatch]);
    
        return (
            <div>
                {loading? 
                <div >
                <h2 >{details.name}</h2>
                <div>
                    <img src={details.image} alt="Not found"/>
                    <h5>{details.hp}</h5>
                    <h3>Hp</h3>
                    <h4>{details.speed}</h4>
                    <h4>{details.weight}</h4>
                    <h4>{details.height}</h4>
                    <h4>{details.attack}</h4>
                    <h4>{details.defense}</h4>
                    <h4>{details.height}</h4>
                    <h4>Types</h4>
                    {details.type?.map(i => (
                        <h5>{i}</h5>
                    ))}
                </div>
            </div> : 
            <div>Loading</div>
            } 
            </div>
        )
    }; */
    
    