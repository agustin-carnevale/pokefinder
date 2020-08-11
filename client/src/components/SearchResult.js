import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 260px;  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  border: 2px solid #282c34;
  border-radius: 20px;
  margin-bottom: 25px;
  background: #f2f0e4;
`

const Name = styled.h1`
  margin: 4px 4px 4px 0;
  font-size: 20px;
`

const Image = styled.img`
  width: 150px;
  self-align: center;
`

const SearchResult = ({pokemon}) => {
 return <Card>
   <Name>{pokemon.name}</Name>
   {pokemon?.sprites?.front_default &&
   <Image src={pokemon.sprites.front_default}/>}
 </Card> 
}

export default SearchResult