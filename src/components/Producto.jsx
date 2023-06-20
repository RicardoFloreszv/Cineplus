import { formatearDinero } from "../helpers"
import useCine from "../hooks/useCine"

function Producto({producto}) {
  
    const {categoria_id, id, imagen, nombre, precio} = producto
  
  const {handleModal, handleProductoAlModal} = useCine()
  
    return (
        <div className="border-2 border-black p-3 shadow bg-white rounded-md ">
            <img
                alt={`imagen ${nombre}`}
                className="w-full"
                src={`/img/${imagen}.jpg`}
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-sky-900">
                    {formatearDinero(precio)}
                </p>

                
                    <button
                        type="button"
                        className="bg-sky-800 hover:bg-sky-950 text-white w-full mt-5 p-3 uppercase font-bold"
                        onClick={() => {
                            handleModal();
                            handleProductoAlModal(producto);                            
                        }}
                    >
                        Agregar
                    </button>
            

                
                    {/* <button
                        type="button"
                        className="bg-sky-800 hover:bg-sky-950 text-white w-full mt-5 p-3 uppercase font-bold"
                        
                    >
                        Producto Agotado
                    </button> */}
                

            </div>
        </div>
    )
}

export default Producto