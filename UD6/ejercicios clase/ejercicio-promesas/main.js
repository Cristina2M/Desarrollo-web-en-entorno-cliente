import { get } from './funciones.js'

async function getFetch() {
    let response = await fetch ('https://fakestoreapi.com/products')
    console.log('response: ',response)
    // console.log('response json(): ', response.json())
    console.log('response json() await: ', await response.json())
}


function getFetch2(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>console.log(json))
}

function getFetch_V2(){
    fetch('https://fakestoreapi.com/products/55')
            .then(res=>res.json())            
            .then(json=>console.log(json))
            .catch(error => console.log('Error: ', error))
}

function getFetch_V3(url){
    get(url).then(json=>console.log(json))
}

const mainPromesas = () =>{
    getFetch_V3('https://fakestoreapi.com/products');
}


document.addEventListener('DOMContentLoaded', mainPromesas);