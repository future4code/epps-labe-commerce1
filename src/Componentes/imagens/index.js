import './index.css'
import ReactDom from 'react-dom'
import React from 'react'
import FiltroPrecos from './components/basicos/FiltroPrecos'
import FiltroProdutos from './components/basicos/FiltroProdutos'

const produtos = [
    {  
        id: 1,
        nome:'Blue',
        preco:390,
        foto:'src= blabla'
    },
    {
        id: 2,
        nome:'Cartier',
        preco:189,
        foto: 'src= bleble'
    },
    {   
        id: 3,
        nome:'Rojo Parfum',
        preco:998,
        foto: 'src= blibli'
    },
    {
        id: 4,
        nome:'Christian Dior',
        preco:673,
        foto: 'scr= bloblo'
    },
    {
       id: 5,
        nome:'Poison',
        preco:348,
        foto: 'src= blublu'
    },
    {
        id: 6,
        nome:'Paco Rabane',
        preco:1020,
        foto: 'src= chachacha'
    },
]



const precos = [189, 348, 390, 673, 998, 1020]

function App() {
    return (
        <div>
            <FiltroPrecos lista={precos} min={100} max={1000} />
            <FiltroProdutos lista={produtos} nome={'Paco'} />
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement)
