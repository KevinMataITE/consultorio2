import React from 'react'
import Layout from '../components/Layout'

const Comida = ({entradas}) => {
    console.log(entradas)
  return (
    <Layout>
        <div>Comida</div>

    </Layout>
  )
}
/*

export const getStaticProps = async ()=>{
    const res= await fetch('https://smaedb-comida-default-rtdb.firebaseio.com/SMAE.json')
    const entradas = await res.json();
    console.log(entradas)
    return{
      props: {
        entradas,
      }
    }
  }*/

export default Comida