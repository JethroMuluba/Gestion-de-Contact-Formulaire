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
            alert(`${data.name} a été enregistré avec succès`);
        }

        return (

    <div className='flex flex-col gap-[20px] '>

        <div className='flex flex-col  gap-[4px]'>
            <h1 className='text-2xl font-bold text-[#00dfc4] '>Gestion de Contact </h1>
            <h2 className='text-sm text-[#00dfc4]'>By Jethro Code</h2>
        </div>

        <form onSubmit = {handleSubmit (onSubmit)} className='flex flex-col justify-center gap-[20px] w-[300px] p-[20px] rounded-[10px] shadow-[0_1px_15px_-10px_#00dfc4] '>

            <div className='flex flex-col items-start '>
                <label className="text-lg font-medium text-[#00dfc4] ">Nom</label>
                <input placeholder='ex: Jethro Muluba' type="text" name='name' {...register("name", {required:true})} className='bg-[#213547] rounded-[10px]  text-lg text-[#fff] py-[5px] pl-[20px] outline-[1px] outline-[#213547] caret-[#fff] ' />
                {errors.name && <span style={{color: 'red'}}>  Saisis de nom obligatoire</span>}
            </div>

            <div className='flex flex-col items-start'>
                <label className="text-lg font-medium text-[#00dfc4] ">Téléphone</label>
                <input  placeholder='ex: 0827964420' name='Phone' type="text" {...register("Phone", { pattern:/^[0-9]{10}$/i}, {required:true})} className='bg-[#213547] rounded-[10px]  text-lg text-[#fff] py-[5px] pl-[20px] outline-[1px] outline-[#213547] caret-[#fff] '/>
                {errors.name && <span style={{color: 'red'}}>  Saisis de numéro obligatoire</span>}
            </div>

            <div className='flex flex-col items-start'>
                <label className="text-lg font-medium text-[#00dfc4] " >Email</label>
                <input  placeholder='ex: jethro.muluba@gmail.com' name='email' type="email" {...register("email")} className='bg-[#213547] rounded-[10px]  text-lg text-[#fff] py-[5px] pl-[20px] outline-[1px] outline-[#213547] caret-[#fff] ' />
            </div>

            <div className='flex flex-col items-start'>
                <label className="text-lg font-medium text-[#00dfc4] ">Age</label>
                <input placeholder='ex: 18' name='age' type="number" {...register("age")} className='bg-[#213547] rounded-[10px]  text-lg text-[#fff] py-[5px] pl-[20px] outline-[1px] outline-[#213547] caret-[#fff] '/>
            </div>

            <div className='flex flex-col items-start'>
                <label className="text-lg font-medium text-[#00dfc4] ">Genre</label>
                <select {...register("age")} className='bg-[#213547] rounded-[10px]  text-lg text-[#fff] py-[5px] pl-[20px] outline-[1px] outline-[#213547] caret-[#fff] '>
                    <option value="female" className='text-sm text-[#fff] '>Femme</option>
                    <option value="male" className='text-sm text-[#fff] '>Homme</option>
                    <option value="other" className='text-sm text-[#fff] '>Autre</option>
                </select>
            </div>

            <button type='submit' className='bg-[#213547] hover:bg-[#00dfc4] text-lg font-medium  text-[#00dfc4] hover:text-[#213547] '>Enregister</button>

        </form>

    </div>

    )
}
export default App
