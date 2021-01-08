import React from 'react'

export default function FiltroPrecos(props) {
    const ListaFiltrada = props.lista.filter((preco) => {
        if (preco > props.min) {
            return true
        } else {
            return false
        }
    }).filter((preco) => {
        if (preco < props.max) {
            return true
        } else {
            return false
        }
    })

    console.log(ListaFiltrada);

    return (
        <div>
            <h2>Filtro por Preços</h2>
            <ul>
                {ListaFiltrada.map(preco => {
                    return <li><p>{preco}</p></li>
                })}
            </ul>
        </div>
    )
}