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

  /*const handleRegisterProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/anuncio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          nomeDoAutomovel: nomeautomovel,
          modelo: modelo,
          marca: marca,
          tempoDeUso: tempouso,
          ano: ano,
          preco: preco,
          descricao: descricao,
          user:{id: idUsuario},
        }),
      });
      const data = await response.json();
      if (response.ok) {
            console.log("Register successful", data);
            setSuccessCadastro("Anúncio realizado com sucesso!");
            clearInputs(["nomeautomovel", "modelo", "marca", "tempouso", "ano", "preco", "descricao"]);
      } else {
        setErrorCadastro(data.message);
      }
    } catch (registerError) {
      console.log("An error ocurred", registerError);
    }
  };
  */
  export default registrarVeiculo;