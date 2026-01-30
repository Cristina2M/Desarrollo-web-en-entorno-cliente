const quitarCantidad = (carrito, setCarrito, id) => {
    const productoRestar = carrito.items.find(p => p.id === id);
    if (productoRestar && productoRestar.cantidad > 0) {
        const nuevoCarrito = carrito.items.map(producto => {
            if (producto.id === id && producto.cantidad > 0) {
                return { ...producto, cantidad: producto.cantidad - 1 }
            }
            return producto
        })
        setCarrito({ items: nuevoCarrito, total: carrito.total - 1 })
    }
}


export default quitarCantidad;