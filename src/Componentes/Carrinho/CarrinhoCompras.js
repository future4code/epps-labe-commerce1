import React from 'react'
import styled from 'styled-components'


const Carrinho = styled.section`
display: grid;
background-color: #CDC392;
width: 30%;
height:40%;
text-align:center;
justify-content: center;
align-items: center;
grid-row: 2;
position: absolute;
border-radius: 0% 0% 10% 10%;
margin: 0% 0% 0% 70%;
z-index:1000;
`
const ProdutoList = styled.ul`
  padding: 0;
  width: 100%;
`
const ProdutoItem = styled.li`
text-align: center;
width: 100%;
height:40%;
 `


function CarrinhoCompras(props) {

  
    return (
   
        <Carrinho>
            <ProdutoList> nome preço quantidade 
            {props.lista.map(item => {
                    return (
                        <ProdutoItem>
                            <p>{item.nome} {item.preco} {item.quantidade}</p>
                        </ProdutoItem>
                    )
                })}
            </ProdutoList>
        </Carrinho>
        
    )

}

export default CarrinhoCompras