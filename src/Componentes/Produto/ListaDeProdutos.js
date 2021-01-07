import React from 'react'


class ListaDeProdutos extends React.Component{
    state = {
        produtos: [
          {
              id:1,
              nome:'Channel',
              preco:390,
              imagem:'shorturl.at/joHST',
              quantidade: 1,
          },
          {
              id:2,
              nome:'Cartier',
              preco:189,
              imagem:'shorturl.at/wxFGM',
              quantidade: 1,
          },
          {
              id:3,
              nome:'Roja Parfum',
              preco:998,
              imagem:'shorturl.at/ozUWY',
              quantidade: 1,
          },
          {
              id:4,
              nome:'Christian Dior',
              preco:673,
              imagem:'shorturl.at/glzNT',
              quantidade: 1,
          },
          {
              id:5,
              nome:'Eau du Soir',
              preco:348,
              imagem:'shorturl.at/iorP2',
              quantidade: 1,
          },
          {
              id:6,
              nome:'Paco Rabanne',
              preco:1020,
              imagem:'shorturl.at/gvGL7',
              quantidade: 1,
          },
      ]
       
      }
    

    render(){                  
                            
            
        return(
        <div>
            <span></span>
            <span></span>                    
        </div>
        )
        
    }

}

export default ListaDeProdutos