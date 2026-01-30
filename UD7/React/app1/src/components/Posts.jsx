import React from 'react'
import useGet from '../hooks/useGet';
import PostCard from './PostCard';

export default function Posts({value, funcion}) {
    const { data } = useGet('https://jsonplaceholder.typicode.com/posts');


    const filProductos = data.filter(producto => {
        if (!value) return true;
        return producto.title.toLowerCase().includes(value.toLowerCase());
    });
    

    if (!value){
        const { data } = useGet('https://jsonplaceholder.typicode.com/posts');
    } else {
        const { data } = useGet(`https://jsonplaceholder.typicode.com/posts/${value}`);
    }

    return (
        <>
            <div>Posts</div>

            <form>
                <input type="text" id='inputSearch'/>
                <button onClick={(e)=>{
                    e.preventDefault();
                    const para=document.getElementById('inputSearch').value
                    funcion({search: para})
                }}>Buscar</button>
            </form>

            {filProductos.map((producto) => (
                <PostCard key={producto.id} producto={producto} />
            ))}

        </>
    )
}
