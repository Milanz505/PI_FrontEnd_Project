'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const CadastroProdutos = () => {
    const router = useRouter();

    const [errorLogin, setErrorLogin] = useState("");
    const [errorCadastro, setErrorCadastro] = useState("");
    const [successCadastro, setSuccessCadastro] = useState("");
    
    const [nomeautomovel, setNomeautomovel] = useState("");
    const [modelo, setModelo] = useState("");
    const [marca, setMarca] = useState("");
    const [tempouso, setTempouso] = useState("");
    const [ano, setAno] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const idUsuario = "00335dd7-33b7-4cc6-b18d-53140e1074ee";

     const clearInputs = (inputIds: string[]) => {
         console.log("Clearing inputs", inputIds);
         inputIds.forEach((inputId) => {
            const input = document.getElementById(inputId) as HTMLInputElement;
            input.value = "";
      });
    };
  
    const handleRegisterProduct = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:8080/anuncio", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            nomeDoAutomovel: nomeautomovel,
            modelo: modelo,
            marca: marca,
            tempoDeUso: tempouso,
            ano: ano,
            preco: preco,
            descricao: descricao,
            user:{id: idUsuario},
          }),
        });
        const data = await response.json();
        if (response.ok) {
              console.log("Register successful", data);
              setSuccessCadastro("Anúncio realizado com sucesso!");
              clearInputs(["nomeautomovel", "modelo", "marca", "tempouso", "ano", "preco", "descricao"]);
        } else {
          setErrorCadastro(data.message);
        }
      } catch (registerError) {
        console.log("An error ocurred", registerError);
      }
    };
  

  return(
    <main className='bg-gradient-to-r from-white via-zinc-100 to-[#898888] w-full h-screen flex items-center justify-center'>
        <div className="bg-white p-10 rounded-lg shadow-lg "> 
        <Button className="fixed p-6 bg-[#D9D9D9] rounded-xl border-[#898888]" onClick={() => (router.push("/"))}>
              Voltar
            </Button>
            <div id="headerid" className="h-40 w-full  items-center justify-center flex">
                <h1 className="font-bold italic text-7xl">Cadastro de Veículo</h1>
            </div>
            <div className="flex pl-48 p-7 space-x-3 gap-16 mt-15">
                <form className="grid grid-cols-5 gap-10" onSubmit={handleRegisterProduct}>
                    <div className="flex flex-col">

                        <label htmlFor="titulo" className='mt-2 ml-1'>Título do anúncio</label>
                        <Input type="text"  id="titulo" className='rounded-full p-1 pr-20 border-[#898888] border outline-none'/>

                        <label htmlFor="nomeautomovel" className='mt-5 ml-1'>Nome do automóvel</label>
                        <Input type="text" id="nomeautomovel" onChange={(e) => setNomeautomovel(e.target.value)} className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="modelo" className='mt-5 ml-1'>Modelo</label>
                        <Input type="text" id="modelo" onChange={(e) => setModelo(e.target.value)} className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="marca" className='mt-5 ml-1'>Marca</label>
                        <Input type="text" id="marca" onChange={(e) => setMarca(e.target.value)} className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="tempouso" className='mt-5 ml-1'>Tempo de uso</label>
                        <Input type="text" id="tempouso" onChange={(e) => setTempouso(e.target.value)} className='rounded-full p-1 border-[#898888] border outline-none'/>

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="ano" className='mt-2 ml-1'>Ano</label>
                        <Input type="number" min="1900" max={new Date().getFullYear()} onChange={(e) => setAno(e.target.value)} id="ano" className='rounded-full p-1 pr-20 border-[#898888] border outline-none'/>

                        <label htmlFor="preco" className='mt-5 ml-1'>Preço (R$)</label>
                        <Input type="number" min="0.01" step="0.01"id="preco" onChange={(e) => setPreco(e.target.value)} className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="descricao" className='mt-5 ml-1'>Descrição</label>
                        <Input type="text" id="descricao" onChange={(e) => setDescricao(e.target.value)} className='rounded-full p-1 border-[#898888] border outline-none'/>

                        <label htmlFor="imagem" className='mt-5 ml-1'>Imagem do carro</label>
                        <Input type="file" id="imagem" className='rounded-full p-1 border-[#898888] border outline-none' onChange={(event) => {
                            const file = event.target.files?.[0];
                            console.log(file);
                        }}/>
                        <Button type="submit" className='mt-11 p-2 bg-[#D9D9D9] rounded-lg border-[#898888] text-base'>Registrar</Button>
                        {successCadastro && <p className="text-green-500">{successCadastro}</p>}
                    </div>

                </form>
            </div>
        </div>


    </main>
  );
};

export default CadastroProdutos;