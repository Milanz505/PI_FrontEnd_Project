'use client'

import Link from "next/link";
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    const header = document.getElementById("headerid");
    const sticky = header?.offsetTop;

    const scrollFunction = () => {
      if (window.scrollY > (sticky ?? 0)) {
        header?.classList.add("sticky");
      } else {
        header?.classList.remove("sticky");
      }
    };

    window.onscroll = () => {
      scrollFunction();
    };

    return () => {
      window.onscroll = null;
    };
  }, []);
  return (
    <main className="">
      <div id="headerid" className="h-24 w-full bg-[#898888] items-center justify-between flex pl-10 pr-10">
        {/* Logo */}
        <h1 className="">CarsOnCars.svg</h1>
        
        {/* Botões */}
        <div className="flex space-x-10">
          <Link href="/cadastroprodutos" className="">Cadastrar Produto</Link>
          <Link href="/" className="">Comprar</Link>
          <Link href="/" className="">FIPE</Link>
          <Link href="/" className="">Sobre</Link>
        </div>
      </div>
      {/* Botão de login */}
      <div className="flex justify-end p-7 space-x-3 items-center mb-96">
        <div className="h-7 w-7 bg-[#D9D9D9] rounded-full"></div>
        <Link href="/login" className="">Entrar</Link>
      </div>
    
      <div>
        {/* Footer */}
        <div className="h-96 w-full bg-[#898888] items-center justify-center flex">
          <p>© 2021 CarsOnCars</p>
        </div>
      </div>


    </main>
  );
}

export default Home;
