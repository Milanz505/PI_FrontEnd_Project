import axios from 'axios';

const logarUsuario = async (
    email: string, 
    senha: string,
) => {
  try {
    const response = await axios.post("http://localhost:8080/auth", {
      email,
      senha,
    });
    
    if (!response.data) {
        throw new Error('Login failed');
      }
  
      return response;
    } catch (error) {
      throw error;
    }
};

export default logarUsuario;