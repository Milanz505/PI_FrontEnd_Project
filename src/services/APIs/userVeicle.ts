import axios from "axios";


const UserVeicle = async (userId:any) => {
    console.log("user", userId)
    try{
    const response = await axios.get("http://localhost:8080/anuncio/id-user/"+userId)
    console.log(response)
    return response.data

    } catch (error) {
        console.log(error)
        return[]
    }
}

export default UserVeicle