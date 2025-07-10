import React from 'react';
import './ConsultationForm.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';
// import bg1 from '../../../public/BG1.webp'

const ConsultationForm = () => {
 
  const {register,handleSubmit,reset,formState:{errors}} = useForm();

   const submitForm = async(data)=>{
     try {
        const res = await axios.post('http://localhost:3000/api/client/form',data);
        console.log(res.data);
        alert("Data Send Successfully")
        reset();
     } catch (error) {
        console.log(error)
     }
   }

  return (
    <div className="consultation-card">
    {/* <img src={bg1} alt="" /> */}
      <h2>Get a Free<br />Consultation</h2>
      <form onSubmit={handleSubmit(submitForm)}>
         <input 
            type="text" 
            placeholder='Full Name' 
            {...register('fullname',{required:true,
            pattern: {
            value: /^[A-Za-z ]+$/,
            message: "Only alphabets and spaces allowed"
        }})}/>
        {errors.fullname && <p className="error-msg">{errors.fullname.message || "Name is Required"}</p>}
        <input
            type="email" 
            placeholder='Email'
            {...register('email',{required:true,
            pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address"
        }})} />  
        {errors.email && <p className="error-msg">{errors.email.message || "Email is Required"}</p>} 
       <input 
            type="number" 
            placeholder='Contact'  
            {...register('contact',{required:true,minLength:{value:10,message:"Please enter valid contact number"}})} />
            {errors.contact && <p className="error-msg">{errors.contact.message||"Contact is Required"}</p>} 
        <input 
            type="text" 
            placeholder='Address'  
            {...register('address',{required:true,
            pattern: {
                   value: /^[A-Za-z ]+$/,
                   message: "Only alphabets and spaces allowed"
               }})}/>
            {errors.address && <p className="error-msg">{errors.address.message ||"Address is Required"}</p>}
        <button type="submit">Get Quick Quote</button>
      </form>
    </div>
  );
};

export default ConsultationForm;
