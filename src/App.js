import React from 'react';
import './App.css';
import styled from 'styled-components'
import ListaDeProdutos from './Componentes/Produto/ListaDeProdutos'
import CarrinhoCompras from './Componentes/Carrinho/CarrinhoCompras'
import FiltroPodutos from './Componentes/FiltroPrecos/FiltroPodutos'
import img1 from './Componentes/Img/creme-1.png'
import img2 from './Componentes/Img/creme-2.png'
import img3 from './Componentes/Img/creme-3.png'
import img4 from './Componentes/Img/creme-4.png'
import img5 from './Componentes/Img/creme-5.png'
import img6 from './Componentes/Img/creme-6.png'


const Botaoabrir = styled.button`
width: 45px;
height:40px;
position: fixed;
outline: none;
margin: 0% 0% 0% 94.5%;
z-index:1000;
&:hover {
  background-color: #E8E5DA;
};
`;
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
const ContainerPrincipal = styled.div`
display: grid;
grid-template-columns: 17% 83%;
grid-template-rows: 5% 90% 5%;
position: relative; 
height:100vh;
width: 100vw;
`;
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
`;
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
`;

const produtosLista = [
  {
    id: 1,
    nome: 'Channel',
    preco: 390,
    imagem: img1,
    quantidade: 1,
  },
  {
    id: 2,
    nome: 'Cartier',
    preco: 189,
    imagem: img2,
    quantidade: 1,
  },
  {
    id: 3,
    nome: 'Roja Parfum',
    preco: 998,
    imagem: img3,
    quantidade: 1,
  },
  {
    id: 4,
    nome: 'Christian Dior',
    preco: 673,
    imagem: img4,
    quantidade: 1,
  },
  {
    id: 5,
    nome: 'Eau du Soir',
    preco: 348,
    imagem: img5,
    quantidade: 1,
  },
  {
    id: 6,
    nome: 'Paco Rabanne',
    preco: 1020,
    imagem: img6,
    quantidade: 1,
  },
  {
    id: 7,
    nome: 'Paco Rabanne',
    preco: 880,
    imagem: img2,
    quantidade: 1,
  },
  {
    id: 8,
    nome: 'Paco Rabanne',
    preco: 599,
    imagem: img4,
    quantidade: 1,
  },
  {
    id: 9,
    nome: 'Paco Rabanne',
    preco: 1210,
    imagem: img1,
    quantidade: 1,
  },
];

class App extends React.Component {
  state = {
    VisorAtivo: false,
    ValorMin: 0,
    ValorMax: 0,
    NomeProduto: '',
  }

  AbrirVisor = () => {
    this.setState({
      VisorAtivo: !this.state.VisorAtivo
    })
  }
  CarregarTela = () => {
    if (this.state.VisorAtivo) {
      return (
        <CarrinhoCompras>

        </CarrinhoCompras>
      )
    } else
      return (
        null

      )
  }

  onChangemin = (e) => {
    this.setState({
      ValorMin: e.target.value
    });
  }
  onChangemax = (e) => {
    this.setState({
      ValorMax: e.target.value
    });
  }
  onChangename = (e) => {
    this.setState({
      NomeProduto: e.target.value
    });
  }



  render() {
    return (
      <ContainerPrincipal>
        <Botaoabrir className='carrinho'
          onClick={this.AbrirVisor}>
        </Botaoabrir>
        {this.CarregarTela()}
        <Header>
          header
        </Header>
        <FiltroPodutos lista={produtosLista} min={this.state.ValorMin} max={this.state.ValorMax} nome={this.state.NomeProduto} />
        <Filtro>
          <h2>FiltroPreços</h2>
          <ul>
            <input type='number'  placeholder="Valor Min" onChange={this.onChangemin}></input>
            <input type='number'  placeholder='Valor Max' onChange={this.onChangemax}></input>
            <input type='string'  placeholder='Nome' onChange={this.onChangename}></input>
          </ul>

        </Filtro>
        <Footer>
          footer
        </Footer>
      </ContainerPrincipal>
    );
  }
}
export default App;
