const {Pokemon, Type, pokemon_type} = require('../db');
const axios = require('axios');
const {urlGetPokemons} = require ('../urls');
//const { v4: uuidv4 } = require('uuid');

const getInfoApi = async () => {
  const infoApi_1 = await axios.get(urlGetPokemons); 
  const infoApi_2 = await axios.get(infoApi_1.data.next); 
  const infoApi = infoApi_1.data.results.concat(infoApi_2.data.results);
  
  try {
      const result = infoApi.map(e =>  axios.get(e.url))
       let pokemons = Promise.all(result)
          .then(e=> {
              let pokemon = e.map(e=> e.data);
              let pokemonsAlls = [];
              pokemon.map(e => {
                pokemonsAlls.push({
                      id: e.id,
                      name : e.name,
                      hp: e.stats[0].base_stat,
                      attack: e.stats[1].base_stat,
                      defense: e.stats[2].base_stat,
                      speed: e.stats[5].base_stat,
                      height: e.height,
                      weight: e.weight,
                      sprite: e.sprites.other.dream_world.front_default || e.sprites["official-artwork"].front_default,
                      types: e.types.length === 1 ? [{name :e.types[0].type.name}] : [{name :e.types[0].type.name}, {name :e.types[1].type.name}]
                })
              })
              return pokemonsAlls;
          })
      return pokemons;
  } catch (err) {
      next(err);
      console.log(err);
  }
};

  const getInfoDb = async () => {
    return await Pokemon.findAll({      
      incluide: {
        model: Type, 
        attributes: ["name"], 
        through: {
          attributes: [],
        },
      },
    });
  };
  
  const getAllInfo = async () => {
    const apiInfo = await getInfoApi(); 
    const dbInfo = await getInfoDb();
    const infoTotal = dbInfo.concat(apiInfo);
    console.log('infoTotal:', infoTotal);
    return infoTotal; 
  };

  
module.exports = {
	getInfoApi, 
  getAllInfo, 
  getInfoDb, 
};

