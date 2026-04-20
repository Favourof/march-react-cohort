/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

export const Home = () => {
    const [count, setCount] = useState(1);
    const [monitor, setMonitor] = useState(true);

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
            <button onClick={() => setMonitor(prev => !prev)}>Run</button>
        </div>
    )
}
