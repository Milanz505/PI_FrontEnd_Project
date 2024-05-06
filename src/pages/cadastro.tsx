
import "../app/globals.css"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"



const Cadastro = () => {
    return (
        <div className="min-h-screen bg-[#f3f4f6] flex justify-end">
            <div className="bg-white p-10 rounded-lg shadow-lg w-96 flex items-center">
                <div className="w-full">
                        <div className="flex justify-center mb-10">
                            <Button className="bg-blue-500 text-white w-24 h-12 rounded-lg"></Button>
                        </div>
                        <h2 className="text-center text-2xl font-bold mb-5">Acesso</h2>
                        <div className="space-y-4">
                        <div>
                                <Label className="block mb-2" htmlFor="user">
                                    Nome de usuário
                                </Label>
                                <Input id="user" placeholder="Ex: jonasBrothers" />
                            </div>
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
                                <Input id="password" placeholder="Digite sua senha" />
                            </div>
                            <div>
                                <Label className="block mb-2" htmlFor="passwordconfirm">
                                    Confirmar senha
                                </Label>
                                <Input id="passwordconfirm" placeholder="Confirme sua senha " type="password" />
                            </div>
                            <div className="text-right">
                                <Link className="text-sm text-blue-600 hover:underline" href="#">
                                    Esqueci minha senha
                                </Link>
                            </div>
                            <div className="justify-center flex">
                                <Button className="w-40 bg-blue-500">Entrar</Button>
                            </div>
                            <div className="text-center">
                                <span className="text-sm">Ja tem sua conta? </span>
                                <Link className="text-sm text-blue-600 hover:underline" href="/login">
                                    Entrar
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro