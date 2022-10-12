import React from 'react'
import Layout from '../components/Layout'
import { TextInput, Checkbox, Button, Group, Box, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';


const bmi = () => {
  const [bmi, setbmi] = useState(0);
  const calculobmi=function(){
    
    const pesofinal = form.values['peso']
    const alturafinal = form.values['altura']
    const salida = pesofinal /(alturafinal * alturafinal)
    setbmi(salida)


  }
  const form = useForm({
    initialValues: {
      peso: '',
      altura:'',
     
      termsOfService: false,
    },

    validate: {
      peso: (value) => (value <=0  ? 'El peso no puede ser negativo' : null),
      altura: (value) => (value <=0  ? 'La altura no puede ser negativa' : null)
    },
  });
  return (
    <div>
      <Layout>
      <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit(calculobmi)}>
        <NumberInput
          withAsterisk
          label="Peso"
          placeholder="Introdusca el peso"
          {...form.getInputProps('peso')}
        />
        <NumberInput
          withAsterisk
          label="Altura"
          placeholder="Introdusca la atura"
        precision={2}
          {...form.getInputProps('altura')}
        />
    
        <p >{bmi == 0? "": bmi} </p>
     

        <Group position="right" mt="md">
          <Button type="submit" >Submit</Button>
        </Group>
      </form>
    </Box>
      </Layout>
    </div>
  )
}

export default bmi