
import Producto from "../components/Producto"
import clienteAxios from "../config/axios"
import useCine from "../hooks/useCine"
import useSWR from "swr"

function Inicio() {

  const { categoriaActual, } = useCine()

  //Consulta SWR
  const fetcher = () => clienteAxios('/api/productos').then(data => data.data)

  const {data, error, isLoading} = useSWR('/api/productos', fetcher, {    //El refreshintereval es para refrescar la pagina cada cierto tiempo y de esta manera se mantendra actualizada siempre segun la base de datos. Ya que en la base de datos le especificamos que nos traiga solo los productos que estan DISPONIBLES desde el controlador de Producto
    refreshInterval: 1000
  })


  //data es la respuesta de la peticion.
  //error es si hay un error.
  //isLoading se utiliza para generar algun spinner.
  if(isLoading) return "Cargando..."

  const {icono, id, nombre} = categoriaActual

  const productos = data.data.filter(producto => producto.categoria_id === id)

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