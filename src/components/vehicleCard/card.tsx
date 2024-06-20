import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button";

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

const VehicleCard = ({vehicle, buttontitle}:{vehicle:Car, buttontitle:string}) => {

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
            <div className="font-sans text-sm p-10 pt-2 flex justify-between">
              <div>
                <div>{vehicle.nome} </div>
                <div className="mb-2 text-zinc-400">{vehicle.marca}</div>
                <div className="flex">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="items-center flex flex-col">
                <div>Por R${vehicle.preco}</div>
                <Button className="bg-[#64BCED] w-24">{buttontitle}</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default VehicleCard