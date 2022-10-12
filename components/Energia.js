import React from 'react'
import { TextInput, Checkbox, Button, Group, Box, NumberInput, NativeSelect, SimpleGrid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

const Energia = () => {

  

    const [cd, setCD] = useState(0);
  const calculoDietetico=function(){
    
    const pesofinal = form.values['peso']
    const fdfinal = form.values['fd']
    const sexofinal=form.values['sexo']
    const edadfinal=form.values['edad']
    const tallafinal=form.values['talla']
    const formulafinal=form.values['formula']
    const get= ""
    const ter=''
    

   /* Ser hombre es igual a 1*/ 

    switch(formulafinal){
      case '1': 
      if(sexofinal==1){
        get=66.5+(13.75*pesofinal)  + (5*tallafinal) - (6.78*edadfinal)
        
      }else{
        get= 655.1+(9.56 * pesofinal) + (1.85*tallafinal) - (4.68*edadfinal)
      }
       ter = get *0.10
      break;
      case '2': 
      if(sexofinal==1 ){
        get=(11.3*pesofinal)+(16*tallafinal) + 901
      }
      else{
        get= (8.7*pesofinal) - (25*tallafinal) +865
      }
      break;
      case '3': 
      /*owen*/ 
      if(sexofinal==1){
        get= 879+(10.2*pesofinal)
      }
      else{
        795+(7.18*pesofinal)
      }
      break;
      case '4': 
      /*vALENCIA*/ 
    if(sexofinal == 1){
        
        
      if(edadfinal>=18 && edadfinal<=29){
          get=(13.37*pesofinal)+747
      }
      if(edadfinal>=30 && edadfinal<=59){
          get=(13.08*pesofinal)+693
      }
      if(edadfinal>=60){
          get=(14.21*pesofinal)+429
      }
      
      
  }
  else{
      if(edadfinal>=18 && edadfinal<=29){
          get=(11.02*pesofinal)+679
      }
      if(edadfinal>=30 && edadfinal<=59){
          get=(10.92*pesofinal)+677
      }
      if(edadfinal>=60){
          get=(10.98*pesofinal)+520
      }
  }
      break;
      case '5': 
      /*MIFLIN ST-JEOR */
      if(sexofinal==1){
          get= (10*pesofinal)+(6.25*tallafinal) - (5*edadfinal) +5

      }
      else{
        get=(10*pesofinal) + (6.25*tallafinal) -(5*edadfinal) -161
      }
      break;
  }

    /* Ser hombre es igual a 1*/ 



    switch(fdfinal){
        case '1': get=get*1.2
        break;
        case '2': get=get*1.3
        break;
        case '3': get=get*1.5
        break;
        case '4': get=get*1.7
        break;
        case '5': get=get*1.9
        break;
    }

      if(formulafinal == 1 ){
        get=get + ter
      }

    setCD(get)



    



  }
  
  
    const form = useForm({
        initialValues: {
          peso: '',
        
          fd:'',
         sexo:'',
         edad:'',
         talla:'',
         formula:'',
          termsOfService: false,
        },
    
        validate: {
          peso: (value) => (value <=0  ? 'El peso no puede ser negativo' : null),
          altura: (value) => (value <=0  ? 'La altura no puede ser negativa' : null),
          edad: (value) => (value <18  ? 'La formula no funciona con menores de edad' : null)
        },
      });

  return (
    <div>

<Box sx={{ maxWidth: 300 }} mx="auto">
    <h1>Calculo Dietetico</h1>
      <form onSubmit={form.onSubmit(calculoDietetico)}>
        <NumberInput
          withAsterisk
          label="Peso"
          placeholder="Introduzca el peso"
          {...form.getInputProps('peso')}
        />
      
        <NumberInput
          withAsterisk
          label="Edad"
          placeholder="Introduzca su edad"
       
          {...form.getInputProps('edad')}
        />
        <NumberInput
          withAsterisk
          label="Talla"
          placeholder="Introduzca su talla "
            precision={2}
          {...form.getInputProps('talla')}
        />
        
    <NativeSelect
      data={[{ value: '1', label: 'Masculino' }, { value: '2', label: 'Femenino' } ]}
      placeholder="Seleccionar..."
      label="Selecciona tu Sexo"
      size="md"
      {...form.getInputProps('sexo')}
      withAsterisk
    />

    <NativeSelect
      data={[{ value: '1', label: 'Sedentario' }, { value: '2', label: 'Ligero' } , {value:'3',label: 'Moderado'}, {value:'4',label: 'Activo'} , {value:'5',label: 'Vigoroso'}]}
      placeholder="Seleccionar..."
      label="Selecciona tu Factor de Actividad"
      size="md"
      {...form.getInputProps('fd')}
      withAsterisk
    />
    
    <NativeSelect
      data={[{ value: '1', label: 'Harris-Benedict' }, { value: '2', label: 'OMS' },{ value: '3', label: 'OWEN' },{ value: '4', label: 'Valencia' },{ value: '5', label: 'MIFFLIN ST-JEOR' } ]}
      placeholder="Seleccionar..."
      label="Selecciona La formula que quieres usar"
      size="md"
      {...form.getInputProps('formula')}
      withAsterisk
    />
    <SimpleGrid cols={2} spacing="sm" verticalSpacing="sm">
      <p>Las formulas Harris Benedict y MIFFLIN ST-JEOR manejan la talla en CM</p>
      <p>La formula de la  OMS maneja la talla en Metros </p>
      
    </SimpleGrid>
     

        <Group position="right" mt="md">
          <Button type="submit" >Calcular</Button>
        </Group>
        <p >{cd == 0 ? "": "Tu Calculo Dietetico es de " +cd.toPrecision(7)} </p>
      </form>
      
      
    </Box>
    
    </div>
  )
}

export default Energia