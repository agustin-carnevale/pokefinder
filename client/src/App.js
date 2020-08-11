import React from 'react';
import styled from 'styled-components'
import SearchForm from './components/SearchForm';

const PageContainer = styled.div`
  padding: 30px;

  @media (max-width: 450px) {
    padding: 30px 10px;
  }
`

const Header = styled.header`
  background-color: #282c34;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left:0;
  z-index: 10;

  & > h4{
    font-size: calc(12px + 2vmin);
  }
`

const BallImage = ()=>{
  return <img
    alt="master-ball"
    style={{width: '40px', marginRight:'10px'}}
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png" />
}

const App = () => {
  return (
    <div >
      <Header>
        <BallImage /> 
        <h4>Poke Finder</h4>
      </Header>
      <PageContainer>
        <SearchForm />
      </PageContainer>
    </div>
  );
}

export default App;
