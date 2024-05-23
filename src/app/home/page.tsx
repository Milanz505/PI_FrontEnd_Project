"use client"

import Header from "@/components/header/header"
import CarouselSize from "@/components/homeCarousel/carousel"
import DefaultFooter from "@/components/footer/footer"


const Home = () => {

  return (
    <main className="min-h-min">
      <div>
        <Header></Header>
        <div className="bg-[#EEEEEE] flex flex-col justify-center items-center">
          <CarouselSize></CarouselSize>
        </div>
        <div>
          <DefaultFooter></DefaultFooter>
        </div>
      </div>
    </main>
  );
}
  
  export default Home

  