import Producto from "../components/Producto"
import useCine from "../hooks/useCine"
import { productos as data } from "../data/productos"

function Inicio() {

  const { categoriaActual, } = useCine()

  const {icono, id, nombre} = categoriaActual


  const productos = data.filter(producto => producto.categoria_id === id)

  return (
    <>
      <div className="mb-7">
        <h1 className="text-white">Menu {nombre}</h1>
      </div>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3' >
            {productos.map(producto => (
                <Producto 
                  key={producto.id}
                  producto={producto}
                />
            ))}          

      </div>
    </>
  )
}

export default Inicio