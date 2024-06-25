import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Button, buttonVariants } from "../ui/button";
import { CalendarDays, CarFrontIcon, Gauge, Pencil, Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

type Car = {
  ano:string,
  descricao:string,
  nomeDoAutomovel:string,
  imagemUrl:string,
  marca:string,
  modelo:string,
  preco:string,
  tempoDeUso:string,
  user:any
}

const VehicleCard = ({vehicle, buttontitle}:{vehicle:Car, buttontitle:string}) => {
  const url = usePathname().split('/').pop() as string
  const garagem = "minhagaragem"

  return (
    <main>
      <Card className=" border-none">
        <CardContent className=" rounded-lg overflow-hidden flex justify-center p-0">
          <div className="">
            <div className="">
              <Image
                className=""
                src={"https://placehold.co/500x500/png"}
                alt="ImagemAutoral"
                width={340}
                height={340}
                priority={true}
              />
            </div>
            <div className="bg-[#64BCED] h-1 "></div>
            <div className="font-sans text-sm p-6 pt-2 flex justify-between">
              <div>
                <div>{vehicle.nomeDoAutomovel} </div>
                <div className="mb-2 text-zinc-400">{vehicle.marca}</div>
                <div className="flex text-[12px]">
                  <div className="flex items-center mr-2">
                    <Gauge className="h-3 w-3 mr-1" />
                    <div>57.150 km</div>
                  </div>
                  <div className="flex items-center">
                    <CalendarDays className="h-3 w-3 mr-1" />
                    <div>{vehicle.ano}</div>
                  </div>
                </div>
              </div>
              <div className="items-center flex flex-col justify-between">
                <div>Por R${vehicle.preco}</div>
                {url === garagem ? (
                  <Button 
                  className="bg-[#64BCED] w-32"
                  
                  >Visualizar anúncio</Button>
                
                ) : (
                  <Button className="bg-[#64BCED] w-32">Ver mais</Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default VehicleCard