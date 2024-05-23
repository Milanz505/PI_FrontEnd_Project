import Image from "next/image"
import { Card, CardContent } from "../ui/card"

const cadastroProd = {
    id: "4d0897ac-106a-4b39-96f1-f004d3421613",
    marca: "",
    modelo: "",
    nomeDoAutomovel: "Gol",
    tempoDeUso: "",
    ano: "2002",
    preco: 22000.0,
    descricao: "golzão filé não negocio preço",
    imageUrl: "https://github.com/MateusLyoshka.png",
    

}

const ProductCard = () => {
    return (
        <main>
            <Card className="border-none">
                <CardContent className="p-0 rounded-sm overflow-hidden">
                    <div className="">
                        <Image
                        className=" "
                        src={"https://placehold.co/700x700/png"}
                        alt="Josuke"
                        width={1000}
                        height={1000}
                        />
                    </div>
                    {cadastroProd.nomeDoAutomovel}
                </CardContent>
            </Card>
        </main>
    )
}

export default ProductCard