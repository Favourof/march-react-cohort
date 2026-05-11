/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import authContext from '../context/authContext';

export const Home = () => {
    const [count, setCount] = useState(1);
    const [monitor, setMonitor] = useState(true);
    const {name, email, setCart, cart}= useContext(authContext)

    useEffect(() => {
        const Timer = setInterval(() => {
            setCount(count + 1)
            console.log("Hello I am runing");

        }, 1000);

        return () => {
            clearInterval(Timer)
        }
    }, [monitor])


    return (
        <div>Home {count}
        <p>name{name}</p>
        <p>Email{email}</p>
            <button onClick={() => setMonitor(prev => !prev)}>Run</button>
             <button onClick={()=> setCart(cart + 1)}>UpdateCart</button>
        </div>
       
    )
}
