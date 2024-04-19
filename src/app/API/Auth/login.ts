export const userdata = async (email: string, password: string) => {
    const response = await fetch("localhost:8080/User", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const logindata = await response.json();
    return logindata;
  }
//   const logindata = async (email: string, password: string) => {
//     const response = await fetch("localhost:8080/User", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ email, password })
//     });
//     const logindata = await response.json();
//     return logindata;
//   }