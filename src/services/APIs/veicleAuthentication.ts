import axios from "axios";

const registrarVeiculo = async (
    nome:string,
    modelo:string,
    marca:string,
    ano:string,
    tempo:string,
    preco:string,
    descricao:string,
    imagem:string,
    user:any
) => {
    try {
        console.log(user)
        const response = await axios.post('http://localhost:8080/anuncio',{
            marca:marca,
            modelo:modelo,
            nomeDoAutomovel:nome,
            tempoDeUso:tempo,
            ano:ano,
            preco:preco,
            descricao:descricao,
            imagemUrl:imagem,
            user:{
                id: user.id
             }
        });

        if(!response.data) {
            throw new Error('Veicle registration failed')
        }
        console.log('response.data',response.data)
        console.log('response', response)
        return response

    } catch(error) {
        throw error;
    }
}

export default registrarVeiculo