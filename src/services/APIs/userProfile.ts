import axios from "axios";

const UserProfile = async (id:any) => {
    try{
        const infos = await axios.get("http://localhost:8080/User/"+id);
        return infos.data
    }
    catch(error){
        console.log(error);
        throw(error);
    }
}

export default UserProfile