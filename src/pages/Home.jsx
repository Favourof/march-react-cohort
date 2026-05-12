import { useContext } from "react";
import authContext from "../context/authContext";

export const Home = () => {
    const {user} = useContext(authContext)
 


    return (
        <div>
            {
                user?<div>
                    
         <h1>Hi {user.name} welcome</h1>
        <p>your Age {user.age}</p>
        <p>Email: {user.email}</p>

                </div>: <p>User not Found, Login to enjoy our service</p>
            }
        
        </div>
       
    )
}
