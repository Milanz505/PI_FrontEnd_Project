import { useState } from 'react';
import Link from 'next/link';

const Login = () => {


  return(
    <main className='bg-gradient-to-r from-white via-zinc-100 to-zinc-600 w-full h-screen'>
      <div id="headerid" className="h-40 w-full  items-center justify-center flex">
        <h1 className="font-bold italic text-7xl">CarsOnCars</h1>
      </div>
      
      <div className="flex justify-center p-7 space-x-3 items-start gap-16 mt-20">

        <form className="flex flex-col">
          <h2 className='text-2xl justify-center flex'>Login</h2>
          <label htmlFor="email" className='mt-2 ml-1'>Email</label>
          <input type="email" name="email" id="email" className='rounded-full p-1 pr-20 border-gray-500 border outline-none'/>
          <label htmlFor="password" className='mt-5 ml-1'>Senha</label>
          <input type="password" name="password" id="password" className='rounded-full p-1 border-gray-500 border outline-none'/>
          <button type="submit" className='mt-5 p-2 bg-[#E1E1E1] rounded-lg border-gray-400 border'>Entrar</button>
        </form>

        <div className="border border-l border-gray-600 h-96"></div>

        <form className="flex flex-col">
          <h2 className='text-2xl justify-center flex'>Registrar</h2>
          <label htmlFor="email" className='mt-2 ml-1'>Email</label>
          <input type="email" name="email" id="email" className='rounded-full p-1 pr-20 border-gray-500 border outline-none'/>
          <label htmlFor="password" className='mt-5 ml-1'>Senha</label>
          <input type="password" name="password" id="password" className='rounded-full p-1 border-gray-500 border outline-none'/>
          <label htmlFor="password" className='mt-5 ml-1'>Confirmar senha</label>
          <input type="password" name="password" id="password" className='rounded-full p-1 border-gray-500 border outline-none'/>
          <button type="submit" className='mt-5 p-2 bg-[#E1E1E1] rounded-lg border-gray-400 border'>Registrar</button>
        </form>
      </div>


    </main>
  );
};

export default Login;