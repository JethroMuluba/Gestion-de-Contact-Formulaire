import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';


function App() {

      const [formData,setFormData] = useState(
          {
              name:"",
              phone:"",
              email:"",
              age:"18",
              gender:""
          }
      );

      const {register, handleSubmit, formState:{errors}} = useForm({defaultValues:formData});

      const onSubmit = (data) => {
            console.log(data);
            alert(`${data.name} a ete enregistre`);
      }

      return (

      <form onSubmit = {handleSubmit (onSubmit)} className='flex flex-col justify-center gap-[20px] w-[300px] p-[20px] border border-gray rounded-[10px] shadow-lg '>

          <div className='flex flex-col justify-start'>
              <label>Nom</label>
              <input placeholder='Taper votre nom ici' type="text" name='name' {...register("name", {required:true})} className='border rounded-full border-gray' />
              {errors.name && <span className="border-2 border-rose-500">  Saisis de nom obligatoire</span>}
          </div>

          <div className='flex flex-col justify-start'>
              <label>Telephone</label>
              <input name='Phone' type="text" {...register("Phone", { pattern:/^[0-9]{10}$/i}, {required:true})} className='border rounded-full border-gray'/>
              {errors.name && <span style={{color: 'red'}}>  Saisis de numéro obligatoire</span>}

          </div>

          <div className='flex flex-col justify-start'>
              <label>Email</label>
              <input name='email' type="email" {...register("email")} className='border rounded-full border-gray' />
          </div>

          <div className='flex flex-col justify-start'>
              <label>Age</label>
              <input name='age' type="number" {...register("age")} className='border rounded-full border-gray' />
          </div>

          <div className='flex flex-col justify-start'>
              <label>Genre</label>
                <select {...register("age")}>
                  <option value="female">Femme</option>
                  <option value="male">Homme</option>
                  <option value="other">Autre</option>
                </select>
          </div>

          <button type='submit'>Enregister</button>
      </form>
  )
}
export default App
