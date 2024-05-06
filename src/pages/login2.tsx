
import "../app/globals.css"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation";

import logarUsuario from "@/APIs/userAuthentication";


const Login2 = () => {
    const router = useRouter();
    


    return (
        <div className="min-h-screen bg-[#f3f4f6] flex justify-end">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96 flex items-center">
        <div className="w-full">
            <div className="flex justify-center mb-10">
              <Button className="bg-blue-500 text-white w-24 h-12 rounded-lg">Logo</Button>
            </div>
            <h2 className="text-center text-2xl font-bold mb-5">Acesso</h2>
            <div className="space-y-4">
              <div>
                <Label className="block mb-2" htmlFor="email">
                  E-mail
                </Label>
                <Input id="email" placeholder="Digite seu e-mail" />
              </div>
              <div>
                <Label className="block mb-2" htmlFor="password">
                  Senha
                </Label>
                <Input id="password" placeholder="Digite sua senha" type="password" />
              </div>
              <div className="text-right">
                <Link className="text-sm text-blue-600 hover:underline" href="#">
                  Esqueci minha senha
                </Link>
              </div>
              <Button className="w-full">Entrar</Button>
              <div className="text-center">
                <span className="text-sm">Ainda não tem uma conta? </span>
                <Link className="text-sm text-blue-600 hover:underline" href="#">
                  Crie a sua
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Login2;