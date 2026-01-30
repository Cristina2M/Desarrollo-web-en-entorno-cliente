
const addCantidad = (carrito, setCarrito, id) => {
    const nuevoCarrito = carrito.items.map(producto => {
        if (producto.id === id) {
            return { ...producto, cantidad: producto.cantidad + 1 }
        }
        return producto
    })
    setCarrito({ items: nuevoCarrito, total: carrito.total + 1 })
}


export default addCantidad;