import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';

const phoneRegExp = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  fullname: yup.string().required('Please enter your full name'),
  phone: yup.string()
    .required('Phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(7, 'Too short')
    .max(15, 'Too long'),
  email: yup.string().email().required('Email is required')
});

function Contact() {
    const [ user, setUser] = useState({ fullname: '', phone: '', email: '' })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    setUser({ fullname: '', phone: '', email: '' }); // Reset the state to clear the input fields
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: 'easeIn' }}>
      <div className='px-7 contact flex flex-col justify-center items-center  h-screen bg-white '>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='shadow-md shadow-blue-500 p-5 rounded-md w-full mt-16 md:w-3/5 lg:w-2/5'>
          <h1 className='flex flex-row items-center justify-center'> <img src={Logo} className='w-36 h-24' alt='My logo' /></h1>
          <div className="input">
            <input type="text" placeholder='Full name' className='capitalize' {...register('fullname')} value={user.fullname} onChange={e => setUser({...user,fullname:e.target.value})}/><br />
            <p>{errors.fullname?.message}</p>
          </div>
          <div className="input">
            <input type="text" placeholder='Phone' {...register('phone')} value={user.phone} onChange={e => setUser({...user,phone:e.target.value})}/><br />
            <p>{errors.phone?.message}</p>
          </div>
          <div className="input">
            <input type="email" placeholder='Email' {...register('email')} value={user.email} onChange={e => setUser({...user,email:e.target.value})}/><br />
            <p>{errors.email?.message}</p>
          </div>
          <div className='flex flex-row justify-center '>
            <button className='bg-blue-500 text-white px-6 py-1 rounded-sm' type="submit">Submit</button>
          </div>
          <p className='text-center py-5'>Send me a direct email through <a href="https://mail.google.com" className='italic text-blue-600'>akintanfemi100@gmail.com</a></p>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
