import React from 'react'

const Entrada = ({entrada}) => {
    const {Alimento , Fibra} = entrada
    
  return (
    
    <div>
        <h1>{Alimento}</h1>
        <h1>{Fibra}</h1>

    </div>
  )
}

export default Entrada