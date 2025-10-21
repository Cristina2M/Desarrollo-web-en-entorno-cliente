import { Albaran } from "./Albaran";


class Albaranes {
    constructor(arAlbaran) {
        this.arAlbaran=[]
    }
    DatosAlbaran(){
        const arAlbaran = []
        for (let i = 0; i < 3; i++) {
            arAlbaran.push (Albaran.crearAlbaran());
        }
        return arAlbaran;
    }
}