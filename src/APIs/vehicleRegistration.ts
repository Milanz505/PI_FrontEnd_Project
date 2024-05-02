import axios from 'axios';

const registrarVeiculo = async (
    nomeautomovel: string,
    modelo: string,
    marca: string,
    tempouso: string,
    ano: string,
    preco: string,
    descricao: string,
    idUsuario: string,
) => {
    try {
      const response = await axios.post('http://localhost:8080/anuncio', {
        nomeDoAutomovel: nomeautomovel,
        modelo,
        marca,
        tempoDeUso: tempouso,
        ano,
        preco,
        descricao,
        user: { id: idUsuario },
      });
      if (!response.data) {
        throw new Error('Registration failed');
      }
      return response;

    } catch (error) {
        throw error;
    }
  };


  export default registrarVeiculo;