import express, {Request, Response} from 'express'
import {body} from 'express-validator'
import {validateRequest} from '../middlewares'
import pokeapi from '../services/pokeapi'
import axios from 'axios'

interface result {
  name: string; 
  url: string;
}

const router = express.Router()

router.post(
  '/api/pokemons', 
  [
    body('searchTerm') 
    .trim()
    .isLength({min: 4})
    .withMessage('El nombre debe tener al menos 4 letras'),
  ],
  validateRequest, 
  async (req: Request, res: Response) => {
    const {searchTerm} = req.body

    try {
      const {data} = await pokeapi.get('/pokemon?limit=1000')
      const results = data.results.filter((result: result) => result.name.includes(searchTerm))

      const pokemons: any = []
      await Promise.all(
        results.map(async (result: result) => {
          let {data} = await axios.get(result.url)
          pokemons.push(data)
        })
      )
      res.send(pokemons)

    } catch (err) {
      console.log(err)
      res.status(500).send({})
    }
  }
)

export { router as pokemonRouter}