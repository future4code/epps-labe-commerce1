import React from 'react'

/*
const precos = [189, 348, 390, 673, 998,]

function App() {
    return (
        <div>
            <FiltroPrecos lista={precos} min={300} max={1000} />
        </div>
    )
}*/

export default function FiltroPrecos(props) {
    const ListaFiltrada = props.lista.filter((preco) => {
        if (preco > props.min) {
            return true
        } else {
            return false
        }
    }).filter((preco) => {
        if (preco > props.max) {
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
                {ListaFiltrada.map(preco => {
                    return <li>{preco}</li>
                })}
            </ul>
        </div>
    )
}
