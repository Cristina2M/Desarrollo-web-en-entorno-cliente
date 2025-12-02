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

const mainPromesas = () =>{
    getFetch_V2();
}


document.addEventListener('DOMContentLoaded', mainPromesas);