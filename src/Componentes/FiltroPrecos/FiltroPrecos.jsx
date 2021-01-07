import React from 'react'

export default function FiltroPrecos(props) {
    const ListaFiltrada = props.lista.filter((preco) => {
        if (preco > props.min) {
            return true
        } else {
            return false
        }
    })
    console.log(ListaFiltrada);

    return (
        <div>
            <h2>FiltroPreços</h2>
            <ul>
                {props.lista.map(preco => {
                    return <li>{preco}</li>
                })}
            </ul>
        </div>
    )
}