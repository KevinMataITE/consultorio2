import React from 'react'

const Entrada = ({nombre,categoria,calorias,proteina}) => {
    
    
  return (
    
    <div>
       <ul>
        <li>
          Nombre: {nombre}
        </li>
        <li>
          Categoria: {categoria}
        </li>
        <li>
          Calorias: {calorias}
        </li>
        <li>
          Proteina: {proteina}
        </li>
       </ul>
    </div>
  )
}

export default Entrada