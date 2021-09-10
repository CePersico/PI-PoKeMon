    import React, { useEffect, useState } from "react";
    import {Link, useParams} from 'react-router-dom'
    import { useDispatch, useSelector } from "react-redux";
    import { getDetails } from "../actions";
    
    export default function Details(props) {
        const {id} = useParams();
        console.log(id);
        const dispatch = useDispatch();
    useEffect (() => {
        dispatch(getDetails(id))
    }, [dispatch])
        const pokeDetail = useSelector((state) => state.details)

    return (
        <div>
            { pokeDetail.length > 0 ?
                <div>
                    <h1>{pokeDetail.name}</h1>
                    <img src = {pokeDetail.image} alt = 'Not found' width='500px' height='700px'/>
                    <h5>{pokeDetail.hp}</h5>
                    <h4>{pokeDetail.speed}</h4>
                    <h4>{pokeDetail.weight}</h4>
                    <h4>{pokeDetail.height}</h4>
                    <h4>{pokeDetail.attack}</h4>
                    <h4>{pokeDetail.defense}</h4>
                    <h4>{pokeDetail.height}</h4>
                    <h4>Types: </h4>
                    
                    <h4>{!pokeDetail.createdInDb ?
                           pokeDetail.types + ' ' :
                           pokeDetail.type.map(e => e.name + (' '))
                        }
                    </h4> 

                </div> :
                <p>Loading...</p>
            }
            <Link to = '/home'>
                <button>Back</button>
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
    
    