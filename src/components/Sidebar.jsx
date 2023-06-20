
import useCine from "../hooks/useCine"

//Componentes
import Categoria from "./Categoria"


function Sidebar() {

  const {categorias} = useCine()

  return (
    <aside className="md:w-72 bg-zinc-900">
            <div className="p-4 flex items-center justify-center">
                <img 
                    className="w-40"
                    src="img/logo.jpg"
                    alt="Imagen Logo"
                />
            </div>

            <p className="my-10 text-xl text-center text-white">Hola:</p>

            <div className="mt-10">
                  {categorias.map(categoria => (
                    <Categoria 
                      key={categoria.id}
                      categoria={categoria}
                    />
                  ))}
            </div>

            <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    
                >
                    Cancelar Orden
                </button>
            </div>
        </aside>
  )
}

export default Sidebar