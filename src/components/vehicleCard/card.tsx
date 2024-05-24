import Image from "next/image"
import { Card, CardContent } from "../ui/card"

const VehicleCard = ({vehicle}:{vehicle: any}) => {

    console.log('vehicle card', vehicle)
    return (
        <main>
            <Card className="w-48 border-none">
                <CardContent className=" rounded-xl overflow-hidden flex justify-center">
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
                        <div>{vehicle.marca} {vehicle.modelo}</div>
                    </div>
                
                </CardContent>
            </Card>
            
        </main>
    )
}

export default VehicleCard