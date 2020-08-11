import request from 'supertest'
import {app} from '../../app'

describe('POST /api/pokemons (search)', ()=>{
  it('returns status code 400 when missing searchTerm param', async ()=>{
    await request(app)
      .post('/api/pokemons')
      .send({})
      .expect(400)
  })

  it('returns status code 400 when searchTerm is empty string', async ()=>{
    await request(app)
      .post('/api/pokemons')
      .send({
        searchTerm: ""
      })
      .expect(400)
  })

  it('returns status code 400 when searchTerm is not a valid input (length < 4)', async ()=>{
    await request(app)
      .post('/api/pokemons')
      .send({
        searchTerm: "a"
      })
      .expect(400)

    await request(app)
      .post('/api/pokemons')
      .send({
        searchTerm: "ab"
      })
      .expect(400)

    await request(app)
      .post('/api/pokemons')
      .send({
        searchTerm: "abc"
      })
      .expect(400)
  })

  it('returns an empty list when there are no pokemons matching the search term', async ()=>{

    const res = await request(app)
      .post('/api/pokemons')
      .send({
        searchTerm: "kkkkkkkk"
      })
      .expect(200)

      const pokemonsList = res.body
      expect(pokemonsList.length).toEqual(0)
  })


  it('returns a list of pokemons that matches the searchTerm', async ()=>{

    const searchTerm = "pika"
    const res = await request(app)
      .post('/api/pokemons')
      .send({
        searchTerm
      })
      .expect(200)
      
      const pokemonsList = res.body
      expect(pokemonsList.length).toBeGreaterThan(0)

      pokemonsList.forEach((pokemon: {name: string} )=> {
        expect(pokemon.name.includes(searchTerm)).toBeTruthy()
      })
  })

})

