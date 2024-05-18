import axios from 'axios';

const registrarUsuario = async (
  nome: string,
  email: string,
  senha: string,
  confirmarSenha: string,
) => {
  try {
    const response = await axios.post('http://localhost:8080/User', {
      nome,
      email,
      senha,
      confirmarSenha,
    });

    if (!response.data) {
      throw new Error('Registration failed');
      }

    return response;
  } catch (error) {
    throw error;
  }
};

export default registrarUsuario;