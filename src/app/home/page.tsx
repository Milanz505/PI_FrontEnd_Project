"use client"

import { Button } from "@/components/ui/button"
import Carousel from "@/components/homeCarousel/carousel"
import { Fragment, JSX, SVGProps, Suspense, use, useContext, useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/contexts/authContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { LogOut, User } from "lucide-react"
import { destroySession } from "@/contexts/authFunctions"


const navigation = ['Comprar', 'Vender', 'FIPE', 'Sobre']


const Home = () => {
  const ctxfunc = useContext(AuthContext)
  const user = ctxfunc.user
  const router = useRouter()

  return (
    <main className="min-h-min">
      <div>
        <div className="bg-[#FFFFFF] h-20 flex flex-row items-center justify-between">
          <div className="">
            <MountainIcon className="h-6 w-28 mr-2" />
          </div>
          {/* Gera os botões nomeados no array */}
          <div className="">
            {navigation.map((item, index) => (
              <Fragment key={index}>
                <Button className="p-10" variant={"ghost"}>
                  {item}
                </Button>
              </Fragment>
            ))}
          </div>
          <Suspense fallback={<p>Loading</p>}>
            <div className="text-sm font-medium w-28 ">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="rounded-full flex items-center justify-center"
                      variant={"link"}
                    >
                      <Image
                        className="h-8 w-8 mr-2 rounded-full"
                        src={"https://github.com/MateusLyoshka.png"}
                        alt="Workflow"
                        width={460}
                        height={460}
                      />
                      <div>{user?.nome}</div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuItem className="flex">
                      <Button asChild variant={"ghost"}>
                        <Link href={"/"}>
                          <User className="mr-2 h-4 w-4" />
                          <span>Perfil </span>
                        </Link>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex">
                      <Button
                      asChild
                        variant={"ghost"}
                        onClick={() => destroySession()}
                      >
                        <Link href={'/home'}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sair </span>
                        
                        </Link>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex flex-row">
                  <Button className="p-10" asChild variant={"ghost"}>
                    <Link href="/home/login">Entrar</Link>
                  </Button>
                </div>
              )}
            </div>
          </Suspense>
        </div>
        <div className="bg-[#EEEEEE] h-96 flex flex-col justify-center items-center">
          <Carousel></Carousel>
        </div>
        <div>
          <div className="bg-[#64BCED] h-10"></div>
          <div className="bg-[#254354] h-72"></div>
          <div className="bg-[#64BCED] h-10"></div>
        </div>
      </div>
    </main>
  );
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#64BCED"
        stroke="#254354"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }
  
  export default Home

  