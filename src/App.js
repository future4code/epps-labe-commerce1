import React from 'react';
import './App.css';
import styled from 'styled-components'

const TelaInicio = styled.div`
display: grid;
width: 100vw;
height:100vh;
text-align:center;
justify-content: center;
align-items: center;
`
const Botaoabrir = styled.button`
background-color: white;
border: 8px solid #304C89;
border-radius: 50%;
width: 60px;
height: 60px;
position: absolute;
outline: none;
margin: -50vh 48vw ;
&:hover {
  background-color: #E8E5DA;
};
`

const ContainerPrincipal = styled.div`
display: grid;
grid-template-columns: 25% 50% 25%;
grid-template-rows: 5% 90% 5%;
position: relative; 
height:100vh;
width: 100vw;
`
const Filtro = styled.section`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
background-color: #E8E5DA;
position: relative; 
max-height:100vh;
max-width: 100vw;
grid-row: 2;
grid-column: 1;
`
const Produtos = styled.section`
display: grid;
grid-template-columns: repeat( 3,33%);
grid-template-rows:repeat( 2,50%);
justify-content: center;
align-items: center;
background-color: #304C89;
position: relative; 
max-height:100vh;
max-width: 100vw;
grid-row:  2;
grid-column: 2;
`

const Carrinho = styled.section`
display: flex;
justify-content: center;
align-items: center;
background-color: #CDC392;
position: relative; 
max-height:100vh;
max-width: 100vw;
grid-row: 2;
grid-column: 3;
`

const Header = styled.section`
display: flex;
justify-content: center;
align-items: center;
background-color: #9EB7E5;
position: relative; 
max-height:100vh;
max-width: 100vw;
grid-row: 1;
grid-column: 1/4;
`
const Footer = styled.section`
display: flex;
justify-content: center;
align-items: center;
background-color: #9EB7E5;
position: relative; 
max-height:100vh;
max-width: 100vw;
grid-row: 3;
grid-column: 1/4;
`


class App extends React.Component {
  state = {
    VisorAtivo: false,
  }

  
  
  AbrirVisor = () => {
    this.setState({
      VisorAtivo: !this.state.VisorAtivo
    })
  }
  CarregarTela = () => {
    if (this.state.VisorAtivo) {
      return (
        <ContainerPrincipal>
          <Header>
            header
</Header>
          <Filtro>
            filtro
   <input></input>
            <input></input>
            <input></input>
          </Filtro>
          <Produtos>
            <div>
              Produto 1
   </div>
            <div>
              Produto 2
    </div>
            <div>
              Produto 3
     </div>
            <div>
              Produto 4
     </div>
            <div>
              Produto 5
     </div>
            <div>
              Produto 6
     </div>
            <div>
              Produto 7
     </div>
          </Produtos>
          <Carrinho>
            carrinho
</Carrinho>
          <Footer>
            footer
</Footer>

        </ContainerPrincipal>
      )
    } else
      return (
        <div>
          <TelaInicio className='top-bar'>
          <h1>Bem Vindo</h1>
            </TelaInicio>
          <Botaoabrir
            onClick={this.AbrirVisor}>
              Entrar
      </Botaoabrir>
       </div >
      )
  }
  render() {
    return (

      <div>
        {this.CarregarTela()}
      </div>

    );
  }
}
export default App;
