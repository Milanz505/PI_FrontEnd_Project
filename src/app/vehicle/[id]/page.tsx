'use client'

import DefaultFooter from "@/components/footer/footer"
import Header from "@/components/header/header"
import VehicleReq from "@/services/APIs/vehicle"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type Car = {
    ano:string,
    descricao:string,
    nome:string,
    imagem:string,
    marca:string,
    modelo:string,
    preco:string,
    tempo:string,
    user:any
}

const BuyCar = () => {
    const id = usePathname().split('/').pop() as string
    const [Car, setCar] = useState<Car>()
    useEffect(() => {
            const fetchCar = async() => {
                const car = await VehicleReq(id);
            setCar(car);
            }
            fetchCar()
        },[id])
    
        return (
          <div className="bg-[#EEEEEE]">
            <div>
              <Header></Header>
            </div>
            <div className="p-10">
              <div className="bg-white p-10 flex justify-between">
                <div className="static">
                  <Image
                    className="h-full"
                    src={"https://placehold.co/540x540/png"}
                    alt="Workflow"
                    width={520}
                    height={540}
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col items-center">
                    <div>{Car?.nome}</div>
                    <div>{Car?.marca}</div>
                    <div className="w-48 text-sm text-start">
                      {Car?.descricao}
                    </div>
                    <div>{Car?.ano}</div>
                    <div>{Car?.tempo}</div>
                    <div>{Car?.preco}</div>
                  </div>
                  <div className="mb-10 flex justify-end">
                    <Button className=" bg-[#64BCED]" type="submit">
                      Tenho interesse!
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <DefaultFooter></DefaultFooter>
            </div>
          </div>
        );
}
    
export default BuyCar