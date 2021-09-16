const router = require('express').Router();
const {Type} = require('../db');
const axios = require('axios');
const {urlGetTypes} = require('../urls');
const { v4: uuidv4 } = require('uuid');

//   - [ ] __GET /types__:
//   - Obtener todos los tipos de pokemons posibles
//   - En una primera instancia deberán traerlos desde pokeapi y 
//     guardarlos en su propia base de datos y luego ya utilizarlos desde allí


router.get('/', async (req, res, next) => {
    try {
        const {data} = await axios.get(urlGetTypes)  // "https://pokeapi.co/api/v2/type"
    const typesPoke = data.results.map(t => t)
    typesPoke.forEach(i => {
        Type.findOrCreate({
            where: {
                name: i.name,
                id: uuidv4()
            }
        })
    })
    const allTypes = await Type.findAll();
    
    return res.status(200).send(allTypes)
    } catch(err) {
        next(err);
    }
    
})  // funcionando!!


module.exports = router;
