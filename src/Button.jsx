import React from 'react'
import style from './Button.module.css'

export const Button = (props) => {
    console.log(props);

    return (
        <div>
            <button onClick={props.function} className={style.container}>{props.text}</button>
        </div>
    )
}
