import React from 'react'


export default function FiltroProdutos(props) {
    const listaFiltrada = props.lista.filter((produto) => {
        if(produto.nome.includes('b')) {
            return true
        } else {
            return false
        }
    })
    return (
        <div>
            <h2>Filtro Produtos por Nome</h2>
            <ul>
                {listaFiltrada.map(produto => {
                    return (
                        <li>
                            <p>Nome: { produto.nome} __ Preço:{ produto.preco} __ Id:{ produto.id} __ Foto: { produto.foto}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

