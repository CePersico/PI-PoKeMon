const router = require('express').Router();
const {Pokemon, Type} = require('../db');
const axios = require('axios');
const { getAllInfo, clonePoke} = require('../controllers/pokemon');
const { v4: uuidv4 } = require('uuid');

//   - [ ] __GET /pokemons__:
//   - Obtener un listado de los pokemons desde pokeapi.
//   - Debe devolver solo los datos necesarios para la ruta principal
// - [ ] __GET /pokemons?name="..."__:
//   - Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
//   - Si no existe ningún pokemon mostrar un mensaje adecuado

router.get("/", async (req, res, next) => { 
    const name  = req.query.name; 
    try {
        const dataPokemons = await getAllInfo(); 
        //console.log('dataApi 1', dataPokemons);
            if (name) {
                const namePokemon = dataPokemons.filter((e) =>
                e.name.toLowerCase().includes(name.toLowerCase())
                ); 
      //console.log(namePokemon);
                namePokemon.length? res.status(200).send(namePokemon): 
                res.status(404).send("Pokemon with this name not found");
            } else {
      
                const dataPokemons = await getAllInfo();
                //console.log('dataApi 2',dataPokemons)
                res.status(200).json(dataPokemons);
            }
    } catch(err) {
        next(err);
    }
});  // verificada: FUNCIONA
  

// - [ ] __GET /pokemons/{idPokemon}__:
//   - Obtener el detalle de un pokemon en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
//   - Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

router.get("/:id", async (req, res, next) => {
    const id = req.params.id; 
    try {
      if (id.length > 10) { 
        const pokemonId = await Pokemon.findOne({
          where: { id: id }, 
            include: {
            model: Type, 
            attributes: ["name"], 
            through: { 
                attributes: [] 
            }, 
          },
        });
      
        return res.status(200).send(pokemonId); 
      } else {  
        const dataApiForId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); 
  
        const infoPokeForId = {
          id: dataApiForId.data.id,
          name: dataApiForId.data.name,
          attack: dataApiForId.data.stats[1].base_stat,
          hp: dataApiForId.data.stats[0].base_stat,
          defense: dataApiForId.data.stats[2].base_stat,
          speed: dataApiForId.data.stats[5].base_stat,
          height: dataApiForId.data.height,
          weight: dataApiForId.data.weight,          
          type: dataApiForId.data.types.map((el) => el.type.name),
          sprite: dataApiForId.data.sprites.other.dream_world.front_default||dataApiForId.data.sprites.other["official-artwork"].front_default,
        };
        res.json(infoPokeForId); 
      }
    } catch (error) {
        next(error)
    }
  });  // Funcionando con los ID de la API y DB

// - [ ] __POST /pokemons__:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
//   - Crea un pokemon en la base de datos
/* router.post('/', (req, res) => {
  const {name, image, episodes} = req.body

  Character.create({
      id: uuidv4(),
      name,
      image
  })
  .then(createdCharacter => {
      return createdCharacter.setEpisodes(episodes)
  })
  .then((characterWithEpisodes) => {
      res.json(characterWithEpisodes)
  })
  .catch(error => next(error))
}) */
 router.post("/", async (req, res, next) => {
        
    const {
        name, 
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
        sprite, 
        types,
        createInDb
    } = req.body

    Pokemon.create({
      id: uuidv4(),
      name, 
      hp, 
      attack, 
      defense, 
      speed, 
      height, 
      weight, 
      sprite,
      createInDb
    })
    .then(createdPoke => {
        return createdPoke.setTypes(types)   // cuando se agrega un array la tabla va en PLURAL!!
    })
    .then((pokeWithTypes) => {
        res.json(pokeWithTypes)
    })
    .catch(error => next(error))
})
    
/* router.post("/", async (req, res, next) => {
  const {
    name,
    attack,
    hp,    
    defense,
    speed,
    height,
    weight,
    sprite,
    types,
    createInDb
  } = req.body;

  try {
    const cloneP = await Pokemon.create({
      name,
      attack,
      hp,    
      defense,
      speed,
      height,
      weight,
      sprite,
      types,
      createInDb
    });
    console.log( 'poke creado:',cloneP)
    res.status(200).send('PoKemon clonated');
    } catch (err) {
    next(err);
  }
});
 */

  module.exports = router;
