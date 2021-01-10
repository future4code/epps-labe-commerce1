import React from 'react';
import ListaDeProdutos from '../Produto/ListaDeProdutos'
import selectTarefa from '../../App'

function FiltroPodutos(props) {

      const ListaFiltrada = props.lista.filter((produtos) => {
        if (produtos.preco >= props.min) {
            return true
        } else {
            return false
        }
    }).filter((produtos) => {
        if (produtos.preco <= props.max) {
            return true
        } else {
            return false
        }
    })
 
     return (<ListaDeProdutos  produtos={ListaFiltrada} />)
}

export default FiltroPodutos