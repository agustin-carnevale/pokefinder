import React, {useState} from 'react';
import styled from 'styled-components';
import SearchResult from './SearchResult';
import useRequest from '../hooks/useRequest'

const Container = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Title = styled.h1`
  margin: 4px 4px 4px 0;
  font-size: 40px;
`

const Subtitle = styled.h4`
  margin: 2px 2px 2px 0;
  font-weight: 600;
  color: grey;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
`

const Input = styled.input`
  margin: 15px 15px 15px 0;
  width: 60%;
  font-size: 20px;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`

const SubmitButton = styled.button`
  background-color: #282c34;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`

const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 450px) {
    align-items: center;
  }
`

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [doRequest, errors] = useRequest({
    url: '/api/pokemons',
    method:'post',
    body:{
      searchTerm
    },
    onSuccess: (data) => {
      setSearchResults(data)
      setSearchTerm('')
    }
  })

  const onSubmit = async (event)=>{
    event.preventDefault()
    doRequest()
  }

 return (
    <Container>
      <Title>Pokemon</Title>
      <Subtitle>El que quiere pokemons, que los busque..</Subtitle>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Ingrese nombre a buscar"
          name="search" 
          value={searchTerm} 
          onChange={(event)=> setSearchTerm(event.target.value)}
        />
        <SubmitButton type="submit">Buscar</SubmitButton>
      </Form>
      {errors}
      {
        searchResults.length > 0 &&
        <ResultsContainer>
          <h3>Resultados de la búsqueda:</h3>
          {searchResults.map(result => <SearchResult key={result.name} pokemon={result}/>)}
        </ResultsContainer>
      }
    </Container>
  )
}

export default SearchForm