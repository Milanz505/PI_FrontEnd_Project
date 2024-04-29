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


/*const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8080/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, senha: password }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Login sucessful", data);
      router.push("/");
      clearInputs(["email", "password"])
    } else {
      setErrorLogin(data.message);
    }
  } catch (error) {
    console.log("An error ocurred", error);
  }
};*/

export default registrarUsuario;