import { useState } from 'react';



//styles
import './App.css';


const App = () => {
  const [ currentStep, setCurrentStep] = useState(0)
  const [ , setUser] = useState (''); 
 

  const onChangeUser = ( value, index) =>{
    const newForm = form.steps;
    newForm.steps["currentStep"][index]= value;
    setUser(newForm.value)
  }

  const form = {
    title:'Datos de Contacto',
    subtitle:'Formulario de Inscripción',
    steps: [
      {
        inputs: [ 
          { 
            id: 'Nombre',
            name: 'Nombre:',
          },
          { 
            id:'Apellido',
            name: 'Apellido:',
          },
          {
            id:'Dirección',
            name: 'Dirección',
          },
         
        ]
      },
       {
        inputs: [
          {
            id:'Ciudad',
            name: 'Ciudad',
          },
          {
            id:'Tecnologías',
            name: 'Manejo de tecnologías',
          },
          {
            id:'Profesión',
            name: 'Profesión u Oficio',
          }

        ]
      }
    ]
  }
  return (
    <div  className='App'>
      <div className='title'>
        {form.title}
      </div>
      <div className='container'>
          <div className='subtitle'>
           {form.subtitle}
          </div> 
          <div className='form'>
           {form.steps[currentStep].inputs.map(input => <div>
             <label className='label'>{input.name}</label> 
              <input
              className='input'
              placeholder={input.id}
              value={input.value}
              onChange={(e, index) => onChangeUser(e.target.value)}
             />
             </div>)}
            
            {form.steps.map((step,index) => index !== form.steps.length && 
            <button 
             className='button'
             onClick={() => setCurrentStep(index)}>{index +1}
            </button>)}
        </div>
      </div>
    </div>
  )
}

export default App;
