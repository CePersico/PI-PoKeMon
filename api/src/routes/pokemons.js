const router = require('express').Router();
const {Pokemon, Type} = require('../db');
const axios = require('axios');
const { getAllInfo} = require('../controllers/pokemon')

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
        console.log('dataApi 1', dataPokemons);
            if (name) {
                const namePokemon = dataPokemons.filter((e) =>
                e.name.toLowerCase().includes(name.toLowerCase())
                ); 
      //console.log(namePokemon);
                namePokemon.length? res.status(200).send(namePokemon): 
                res.status(404).send("Pokemon with this name not found");
            } else {
      
                const dataPokemons = await getAllInfo();
                console.log('dataApi 2',dataPokemons)
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
          name: dataApiForId.data.name,
          attack: dataApiForId.data.stats[1].base_stat,
          hp: dataApiForId.data.stats[0].base_stat,
          defense: dataApiForId.data.stats[2].base_stat,
          speed: dataApiForId.data.stats[5].base_stat,
          height: dataApiForId.data.height,
          weight: dataApiForId.data.weight,          
          type: dataApiForId.data.types.map((el) => el.type.name),
          image: dataApiForId.data.sprites.other.dream_world.front_default||dataApiForId.data.sprites.other["official-artwork"].front_default,
        };
        res.json(infoPokeForId); 
      }
    } catch (error) {
        next(error)
    }
  });  // verificado buscando de la API, los trae bien. Cuando funcione el POST chequeare los de la DB


// - [ ] __POST /pokemons__:
//   - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
//   - Crea un pokemon en la base de datos

router.post("/", async (req, res, next) => {
    const { 
        name, 
        hp, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
        image, 
        type 
    } = req.body;
    console.log(req.body);  // llega un objeto vacio!!
    if (
      isNaN(hp) || isNaN(attack) || isNaN(defense) || isNaN(speed) || isNaN(height) || isNaN(weight)
    )
      return res.json({ info: "hp, attack, defense, speed, heigth and weigth must be numbers" });
  
    if (!name) return res.json({ info: "The name is required" });
  
    const findPoke = await Pokemon.findOne({ where: { name: name } });
    if (findPoke) return res.json({ info: "This Pokemon already exists" });
  
    try {
      const pokeClone = await Pokemon.create({
        name: name,
        hp: hp||0,
        attack: attack||0,
        defense: defense||0,
        speed: speed||0,
        height: height||0,
        weight: weight||0,
        image: image|| 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/05/pokemon-ft.jpg',
      });
  
      const types = type.map(async (t) => {
        const pokeForType = await Type.findByPk(e); 
        pokeClone.addTypes(pokeForType); 
      });
  
      await Promise.all(types);
  
      res.send("Pokemon created");
    } catch (error) {
         next(error);
    }
  });

  module.exports = router;
