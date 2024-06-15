import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button";

const VehicleCard = ({vehicle}:{vehicle: any}) => {

    // console.log('vehicle card', vehicle)
    return (
      <main>
        <Card className=" border-none">
          <CardContent className=" rounded-lg overflow-hidden flex justify-center p-0">
            <div className="">
              <div className="">
                <Image
                  className=""
                  src={"https://placehold.co/200x200/png"}
                  alt="Josuke"
                  width={152}
                  height={152}
                  priority={true}
                />
              </div>
                  <div className="bg-[#64BCED] h-[1px]"></div>
              <div className="font-sans text-sm mr-2 ml-2 mb-2 w-28">
                  <div>{vehicle.nomeDoAutomovel} </div>
                  <div className="mb-2 text-zinc-400">{vehicle.marca}</div>
                  <div>R${vehicle.preco}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    );
}

export default VehicleCard