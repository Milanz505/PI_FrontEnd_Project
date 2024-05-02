"use client";

import "../app/globals.css"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import registrarUsuario from "@/APIs/userRegistration";
import logarUsuario from "@/APIs/userAuthentication";


const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [errorCadastro, setErrorCadastro] = useState("");
  const [successCadastro, setSuccessCadastro] = useState("");

  const [nome, setNome] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

   const clearInputs = (inputIds: string[]) => {
       console.log("Clearing inputs", inputIds);
       inputIds.forEach((inputId) => {
          const input = document.getElementById(inputId) as HTMLInputElement;
          input.value = "";
    });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await registrarUsuario(nome, emailRegister, passwordRegister, passwordConfirm);
      console.log("Register sucessful",response);
      setSuccessCadastro("Cadastro realizado com sucesso!");
      clearInputs(["usuario", "emailcadastro", "passwordcadastro", "passwordconfirm"]);
    } catch (error) {
      console.error(error);
      setErrorCadastro("Erro no cadastro, verifique seus dados");
    }
  
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await logarUsuario(email, password);
      console.log("Login sucessful", response);
      router.push("/");
      clearInputs(["email", "password"])

    } catch (error) {
      console.error(error);
      setErrorLogin("Erro no login, verifique seus dados");
    }
  
  };

  return (
    <main className="bg-gradient-to-r from-white via-zinc-100 to-[#898888] w-full h-screen">
      <div className="p-10 fixed">
          <Button className="fixed p-6 bg-[#D9D9D9] rounded-xl border-[#898888]" onClick={() => (router.push("/"))}>
              Voltar
            </Button>

        <div
          id="headerid"
          className="h-40 w-full  items-center justify-center flex"
        >
          <h1 className="font-bold italic text-7xl">CarsOnCars</h1>
        </div>
        <div className="flex pl-48 p-7 space-x-3 items-start gap-16 mt-20">
          <form className="flex flex-col" onSubmit={handleLogin}>
            <h2 className="text-2xl justify-center flex font-semibold">
              Login
            </h2>
            <label htmlFor="email" className="mt-2 ml-1">
              Email
            </label>
            <Input
              type="email"
              id="email"
              className="rounded-full p-1 pr-20 border-[#898888] border outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="mt-5 ml-1">
              Senha
            </label>
            <Input
              type="password"
              id="password"
              className="rounded-full p-1 border-[#898888] border outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorLogin && <p className="text-red-500">{errorLogin}</p>}
            <Button
              type="submit"
              className="mt-5 p-2 bg-[#D9D9D9] rounded-lg border-[#898888]"
            >
              Entrar
            </Button>
          </form>
          <div className="border border-l border-black h-96"></div>
          <form className="flex flex-col" onSubmit={handleRegister}>
            <h2 className="text-2xl justify-center flex font-semibold">
              Registrar
            </h2>
            <label htmlFor="usuario" className="mt-2 ml-1">
              Nome de usuário
            </label>
            <Input
              type="text"
              id="usuario"
              className="rounded-full p-1 pr-20 border-[#898888] border outline-none"
              onChange={(e) => setNome(e.target.value)}
            />
            <label htmlFor="emailcadastro" className="mt-5 ml-1">
              Email
            </label>
            <Input
              type="email"
              id="emailcadastro"
              className="rounded-full p-1 pr-20 border-[#898888] border outline-none"
              onChange={(e) => setEmailRegister(e.target.value)}
            />
            <label htmlFor="passwordcadastro" className="mt-5 ml-1">
              Senha
            </label>
            <Input
              type="password"
              id="passwordcadastro"
              className="rounded-full p-1 border-[#898888] border outline-none"
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
            <label htmlFor="passwordconfirm" className="mt-5 ml-1">
              Confirmar senha
            </label>
            <Input
              type="password"
              id="passwordconfirm"
              className="rounded-full p-1 border-[#898888] border outline-none"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            {errorCadastro && <p className="text-red-500">{errorCadastro}</p>}
            {successCadastro && <p className="text-green-500">{successCadastro}</p>}
            <Button
              type="submit"
              className="mt-5 p-2 bg-[#D9D9D9] rounded-lg border-[#898888]"
            >
              Registrar
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default Login;
