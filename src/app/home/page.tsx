"use client"

import { Button } from "@/components/ui/button"
import { Fragment, JSX, SVGProps, Suspense, use, useContext, useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/contexts/authContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { LogOut, MountainIcon, User } from "lucide-react"
import { destroySession } from "@/contexts/authFunctions"
import Header from "@/components/header/header"
import CarouselSize from "@/components/homeCarousel/carousel"


const Home = () => {

  return (
    <main className="min-h-min">
      <div>
        <Header></Header>
        <div className="bg-[#EEEEEE] flex flex-col justify-center items-center">
          <CarouselSize></CarouselSize>
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
  
  export default Home

  