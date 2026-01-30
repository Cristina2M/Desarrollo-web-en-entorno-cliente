import React from 'react'
import style from './PostCard.module.css'


export default function PostCard({ producto }) {
    return (
        <>
            <div className={style.div}>
                <h3>{producto.title}</h3>
                <p>{producto.body}</p>
            </div>

        </>
    )
}
