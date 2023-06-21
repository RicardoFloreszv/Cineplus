import { useState, createContext, useEffect } from 'react'

import { categoriasdata } from "../data/categorias"

//Evento del Toast
import { toast } from 'react-toastify';


const CineContext = createContext()

const CineProvider = ({children}) => {

    const [categorias, setCategorias] = useState(categoriasdata)
    const [categoriaActual, setCategoriaActual] = useState(categoriasdata[0])

    //Modal
    const [modal, setModal] = useState(false)
    const [productoAlModal, setProductoAlModal] = useState({})

    //Resumen
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
                           //Parametro total y producto instanceado. por cada producto multiplica su precio * su cantidad y sumala al total. El 0 es en cuanto inicia total.
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
        
    }, [pedido])
    


    const handleCategoriaActual = (categoriaActual) => {

        setCategoriaActual(categoriaActual)
    }

    const handleModal = () => {
        setModal(!modal)        //Lo contrario de modal
    }

    const handleProductoAlModal = (producto)  => {
        setProductoAlModal(producto)
        handleModal()
    }

    const handlePedido = (producto) => {

        //Es normal pensar que con un .push le agregamos "producto" al arreglo.
        //Pero eso modificaria el arreglo inical y esto no podemos hacerlo en React.
        //Lo que haremos es tomar una copia del arreglo actual y agregar el nuevo producto.


        //Evitar que se repitan productos en el pedido.
        //Comprobar si el pedido que viene ya esta en pedidos con un some y luego un map
        if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
            //Usaremos map en esta ocasion porque map crea un nuevo arreglo y no modifica el original.
            //Entonces el que coincida debera actualizar la cantidad                                     Producto es el nuevo que viene como prop y el pedidoState es lo que ya esta en pedido. 
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === productoAlModal.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')

        }else{
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido')            
        }
    }

    const eliminarPedido = (id) => {

        const pedidoActualizadoEliminar = pedido.filter(pedido => pedido.id !== id )
        setPedido(pedidoActualizadoEliminar)
        toast.success('Pedido Eliminado')     
    }



    return(
        <CineContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleCategoriaActual,
                modal,
                handleModal,
                productoAlModal,
                handleProductoAlModal,
                pedido,
                handlePedido,
                eliminarPedido,
                total

                
            }}

        >{children}</CineContext.Provider>
    )
}

export { 
    CineProvider
}
export default CineContext