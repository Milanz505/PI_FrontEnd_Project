'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const CadastroProdutos = () => {

  return(
    <main className='bg-gradient-to-r from-zinc-200 via-zinc-400 to-[#898888] w-full h-screen flex items-center justify-center'>
        <div className="bg-white p-10 rounded-lg shadow-lg "> 
            <div id="headerid" className="h-40 w-full  items-center justify-center flex">
                <h1 className="font-bold italic text-7xl">Cadastro de Veículo</h1>
            </div>
            <div className="flex pl-48 p-7 space-x-3 gap-16 mt-15">
                <form className="grid grid-cols-5 gap-10">
                    <div className="flex flex-col">

                        <label htmlFor="titulo" className='mt-2 ml-1'>Título do anúncio</label>
                        <Input type="text"  id="titulo" className='rounded-full p-1 pr-20 border-[#898888] border outline-none'/>

                        <label htmlFor="nomeautomovel" className='mt-5 ml-1'>Nome do automóvel</label>
                        <Input type="text" id="nomeautomovel" className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="modelo" className='mt-5 ml-1'>Modelo</label>
                        <Input type="text" id="modelo" className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="marca" className='mt-5 ml-1'>Marca</label>
                        <Input type="text" id="marca" className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="tempouso" className='mt-5 ml-1'>Tempo de uso</label>
                        <Input type="text" id="tempouso" className='rounded-full p-1 border-[#898888] border outline-none'/>

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="ano" className='mt-2 ml-1'>Ano</label>
                        <Input type="number" min="1900" max={new Date().getFullYear()} id="ano" className='rounded-full p-1 pr-20 border-[#898888] border outline-none'/>

                        <label htmlFor="preço" className='mt-5 ml-1'>Preço (R$)</label>
                        <Input type="number" step="0.01"id="preço" className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="descricao" className='mt-5 ml-1'>Descrição</label>
                        <Input type="text" id="descricao" className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="imagem" className='mt-5 ml-1'>Imagem do carro</label>
                        <Input type="file" id="imagem" className='rounded-full p-1 border-[#898888] border outline-none' onChange={(event) => {
                            const file = event.target.files?.[0];
                            console.log(file);
                        }}/>
                        <Button type="submit" className='mt-11 p-2 bg-zinc-500 rounded-lg border-[#898888] text-base'>Registrar</Button>
                    </div>

                </form>
            </div>
        </div>


    </main>
  );
};

export default CadastroProdutos;