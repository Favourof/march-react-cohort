/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button } from "./Button";


export const UsestateComponent = () => {
    const [name, setName] = useState('favour')
    const [number, setNumber] = useState(0);
    // let name = 'favour'



    const handleChangeName = () => {
        console.log('hello');
        // name = 'bayo'
        // console.log(name);

        if (name === "favour") {
            setName('Bayo')
        } else {
            setName('favour')
        }


    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{number}</h1>
            <button>+</button>
            {/* <h1>{name.gender}</h1> */}
            {/* <button onClick={handleChangeName}>change</button> */}
            <Button function={handleChangeName} text={"change"} />
        </div>
    )
}
