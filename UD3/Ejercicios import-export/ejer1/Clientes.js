import { Cliente } from "./Cliente.js"

class Clientes {
        constructor(arCliente) {
        this.arCliente=[]
    }
    DatosCliente(){
        const arCliente = []
        for (let i = 0; i < 3; i++) {
            arCliente.push (new Cliente (i+1, "Zara", "Granada", "958234567", "zara@email.com"));
        }
        return arCliente;
    }
}


