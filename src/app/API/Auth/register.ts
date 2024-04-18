export const register = async (email: string, password: string, passwordconfirm: string) => {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, passwordconfirm })
    });
    const data = await response.json();
    return data;
  }