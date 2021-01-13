import React from 'react'
import styled from 'styled-components'

const ProdutoList = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows:repeat( 3,1fr);
justify-content: space-around;
align-items: center;
height:200%;
width: 100%;
grid-row: 2;
grid-column: 2;
`
const ProdutoItem = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
flex-direction:column;
align-items: center;
background-color: #f2f2f2;
height:90%;
width: 90%;
margin-left:5%;
border-radius: 10%;
 `

function ListaDeProdutos (props) {
        
        return (
            <div>
                <ProdutoList>
                    {props.produtos.map(item => {
                        return (
                            <ProdutoItem>
                                <p>{item.nome}</p>
                                <img src={item.imagem} />
                                <p> {item.preco}</p>
                            </ProdutoItem>
                        )
                    })}
                </ProdutoList>
             </div>
        )
 
}

export default ListaDeProdutos
