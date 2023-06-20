import useCine from "../hooks/useCine"
import { formatearDinero } from "../helpers"
import { useState, useEffect } from "react"

function ModalProducto() {

    const {handleModal, productoAlModal, handlePedido, pedido} = useCine()
    const {id, imagen, nombre, precio} = productoAlModal


    //State
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    //useEffect     La intencion es ver si el producto que vamos a agregar ya se encuentra en el pedido.
    useEffect(() => {

        //Comprobar si el nuevo producto seleccionado se encuentra en pedido. Para eso usamos Some y nos devolvera true o false.
        if (pedido.some( pedidoState => pedidoState.id === productoAlModal.id)) {
            const productoEdicion = pedido.filter( pedidoState => pedidoState.id === productoAlModal.id)[0]
            setCantidad(productoEdicion.cantidad)
            setEdicion(true)                        //En resumen si encuentra la coincidencia del filter es que si existe ya ese producto en pedido. entonces estamos editando
        }
    }, [pedido])
    

  return (
<div className="md:flex items-center gap-10">
            <div className="md:w-1/3">
                <img
                    alt={`Imagen producto ${nombre}`}
                    src={`/img/${imagen}.jpg`}
                />
            </div>

            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                <h1 className="text-3xl font-bold mt-5">
                    {nombre}
                </h1>
                <p className="mt-5 font-black text-5xl text-sky-900">
                    { formatearDinero(precio)}
                </p>

                <div className='flex gap-4 mt-5'>

                    <button
                        type='button'
                        onClick={() => {
                            if(cantidad <= 1) return
                            setCantidad(cantidad - 1);
                        }}  
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <p className='text-3xl'>{cantidad}</p>

                    <button
                        type='button'
                        onClick={() => {
                            if(cantidad >= 5) return
                            setCantidad(cantidad + 1);
                        }}  
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                    //Le pasamos una copia del producto y se agrega la cantidad al mismo objeto.
                    onClick={() => {
                        handlePedido({...productoAlModal, cantidad})
                        handleModal()
                    }}
                >
                    {edicion ? 'Guardar Cambios' : 'Agregar al pedido'}
                </button>
            </div>
        </div>
  )
}

export default ModalProducto