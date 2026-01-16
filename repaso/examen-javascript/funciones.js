export function datosApi(url){
    return fetch(url).then((datos)=>datos.json());
}