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

    <div className='flex flex-col gap-[20px] '>

        <div className='flex flex-col  gap-[4px]'>
            <h1 className='text-2xl font-bold'>Gestion de Contact </h1>
            <h2 className='text-sm'>By Jethro Code</h2>
        </div>

        <form onSubmit = {handleSubmit (onSubmit)} className='flex flex-col justify-center gap-[20px] w-[300px] p-[20px] border border-gray rounded-[10px] shadow-lg '>

            <div className='flex flex-col items-start '>
                <label className="text-lg font-bold ">Nom</label>
                <input placeholder='Taper votre nom ici' type="text" name='name' {...register("name", {required:true})} className='bg-none border rounded-[10px] border-[#1a1a1a] text-lg py-[5px] pl-[20px] hover:border-[#3d3d3d] ' />
                {errors.name && <span className="border-2 border-rose-500">  Saisis de nom obligatoire</span>}
            </div>

            <div className='flex flex-col items-start'>
                <label className="text-lg font-bold ">Téléphone</label>
                <input  placeholder='Taper votre numéro ici' name='Phone' type="text" {...register("Phone", { pattern:/^[0-9]{10}$/i}, {required:true})} className='bg-none border rounded-[10px] border-[#1a1a1a] text-lg py-[5px] pl-[20px] focus:border-[#3d3d3d]'/>
                {errors.name && <span style={{color: 'red'}}>  Saisis de numéro obligatoire</span>}
            </div>

            <div className='flex flex-col items-start'>
                <label className="text-lg font-bold " >Email</label>
                <input  placeholder='Taper votre email ici' name='email' type="email" {...register("email")} className='bg-none border rounded-[10px] border-[#1a1a1a] text-lg py-[5px] pl-[20px] focus:border-[#3d3d3d]' />
            </div>

            <div className='flex flex-col items-start'>
                <label className="text-lg font-bold ">Age</label>
                <input name='age' type="number" {...register("age")} className='bg-none border rounded-[10px] border-[#1a1a1a] text-lg py-[5px] pl-[20px] focus:border-[#3d3d3d]' />
            </div>

            <div className='flex flex-col items-start'>
                <label className="text-lg font-bold ">Genre</label>
                <select {...register("age")} className='bg-none border rounded-[10px] border-[#1a1a1a] text-lg py-[5px] pl-[20px] focus:border-[#3d3d3d]'>
                    <option value="female">Femme</option>
                    <option value="male">Homme</option>
                    <option value="other">Autre</option>
                </select>
            </div>

            <button type='submit' className='bg-[#213547] hover:bg-cyan-600 hover:border-slate-400  text-white'>Enregister</button>

        </form>

    </div>

    )
}
export default App
