import { Albaran } from "./Albaran.js"
import { Articulo } from "./Articulo.js"
import { Cliente } from "./Cliente.js"
import { Albaranes } from "./Albaranes.js"


(function () {
    const cliente1 = new Cliente(1234, "Zara", "Granada", "958234567", "zara@email.com")
    const articulo1 = new Articulo(1, "pantalón", 15)
    const articulo2 = new Articulo(2, "camiseta", 10)
    const lineas = [articulo1, articulo2]
    const numeroAlb = 876;
    const fecha= "2025/10/20"
    const alb = new Albaran(cliente1, numeroAlb, fecha, lineas)
    
    return alb.show();
})();




