"use client"

import DefaultFooter from "@/components/footer/footer"
import Header from "@/components/header/header"
import VeicleCard from "@/components/veicleCard/product";
import { AuthContext } from "@/contexts/authContext";
import UserVeicle from "@/services/APIs/userVeicle";
import { useContext, useEffect, useState } from "react";

const Garage = () => {
    const [cars, setCars] = useState([])
    const { user } = useContext(AuthContext)
    // console.log(user?.id)
    useEffect(() => {
      const fetchCar = async () => {
        const userCars = await UserVeicle(user?.id);
        setCars(userCars);
      };
      fetchCar()
    }, []);

return (
    <div className="min-h-min">
        <div>
            <Header></Header>
        </div>
        <div className="mt-10">
            <div className="flex justify-center">
                {cars.length > 0
                ? cars.map((car, index) => <VeicleCard key={index} vehicle={car}/>)
            :<p>voce não possui carros anunciados</p>}
        
            </div>
        </div>
        <div>
            <DefaultFooter></DefaultFooter>
        </div>
    </div>
    );
}

export default Garage