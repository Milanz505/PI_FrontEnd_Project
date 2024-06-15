'use client'

import DefaultFooter from "@/components/footer/footer"
import Header from "@/components/header/header"
import UserCard from "@/components/userCard/userCard"
import UsersReq from "@/services/APIs/allUsers"
import { useEffect, useState } from "react"

const Control = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
      const FetchUsers = async () => {
        const allusers = await UsersReq();
        setUsers(allusers);
      };
      FetchUsers();
    }, []);

    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
            {users.map((object, index)=>(
                <div key={index}>
                    <UserCard user={object}/>
                </div>
            ))}
        </div>
        <div>
          <DefaultFooter />
        </div>
      </div>
    );
}

export default Control