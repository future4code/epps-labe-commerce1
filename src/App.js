import React from 'react';
import './App.css';
import styled from 'styled-components'
import FiltroPrecos from './Componentes/FiltroPrecos/FiltroPrecos'
import ListaDeProdutos from './Componentes/Produto/ListaDeProdutos'
const testimg = 'https://p7.hiclipart.com/preview/744/464/14/rocket-launch-spacecraft-buran-stock-photography-rockets.jpg'


const Botaoabrir = styled.button`
background-color: white;
border: 8px solid #304C89;
border-radius: 40%;
width: 80px;
height: 40px;
position: absolute;
outline: none;
margin: 0% 0% 95vh 85%;
&:hover {
  background-color: #E8E5DA;
};
`
const ContainerPrincipal = styled.div`
display: grid;
grid-template-columns: 17% 83%;
grid-template-rows: 5% 90% 5%;
position: relative; 
height:100vh;
width: 100vw;
`
const Filtro = styled.section`
display: flex;
margin: 0% 2% 0% 1%;
flex-direction:column;
justify-content: center;
align-items: center;
background-color: #E8E5DA;
position: relative; 
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
display: grid;
background-color: #CDC392;
width: 100%;
height:100%;
text-align:center;
justify-content: center;
align-items: center;
grid-row: 1;
grid-column: 3;
border-radius: 0% 0% 10% 10%;
z-index:1000;
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
  state = { VisorAtivo: false }

  AbrirVisor = () => {
    this.setState({
      VisorAtivo: !this.state.VisorAtivo
    })
  }
  CarregarTela = () => {
    if (this.state.VisorAtivo) {
      return (
        <Carrinho>
          carrinho
          <Botaoabrir
            onClick={this.AbrirVisor}>
            Carrinho
        </Botaoabrir>
        </Carrinho>
      )
    } else
      return (
        <Botaoabrir
          onClick={this.AbrirVisor}>
          Carrinho
        </Botaoabrir>

      )
  }
  render() {
    return (
      <ContainerPrincipal>
        <Header>
          header
       </Header>
        <Filtro>
          filtro
      </Filtro>
        <Produtos>
          <div>
            <p>Produto 1</p>
            <div>
              <img src={testimg} />
            </div>
          </div>
          {this.CarregarTela()}
        </Produtos>
        <Footer>
          footer
</Footer>
      </ContainerPrincipal>
    );
  }
}
export default App;
