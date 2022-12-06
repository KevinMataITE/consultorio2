import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';
import Entrada from '../components/Entrada';

const Comida = () => {
  const [entradasFiltradas,setEntradasFiltradas ] =useState([])
  const form = useForm({
    initialValues: { food: ''},

    // functions will be used to validate values at corresponding key
    validate: {
      food: (value) => (value.length < 1 ? 'El campo esta vacio' : null),
 
    },
  });
  const entrada=async()=>{
    const term=form.values["food"];
    
    const res= await fetch('https://smaedb-comida-default-rtdb.firebaseio.com/SMAE.json')
    const entradas = await res.json();
    const filtrados=entradas.filter(alimento=>
      alimento.Alimento.toLowerCase().includes(term.toLowerCase())
      )
      setEntradasFiltradas(filtrados)
    console.log(entradasFiltradas);
  }

    
  return (
    <Layout>
            <form onSubmit={form.onSubmit(entrada)}>
      <TextInput label="food" placeholder="Name" {...form.getInputProps('food')} />
      
      <Button type="submit" mt="sm">
        Submit
      </Button>
      {
        entradasFiltradas.map((alimento,i)=>(
          <Entrada nombre={alimento.Alimento} key={i} categoria={alimento.Categoría} calorias={alimento.EnergíaKcal} proteina={alimento.Proteína}/>
        ))
      }
     
     
      
    </form>

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


  }
  
  
  {
        entradasFiltradas.map(alimento=>(
          
        ))
      }*/

export default Comida

