import useCine from "../hooks/useCine"

export default function Categoria({categoria}) {

    const {icono, id, nombre} = categoria

    const {handleCategoriaActual, categoriaActual} = useCine() 

    

    return (
        <div className={`${categoriaActual.id === id ? "bg-sky-950" : 'bg-sky-800'} flex items-center gap-4 border w-full  hover:bg-sky-900 cursor-pointer`}>

            <button 
                className="text-lg font-bold cursor-pointer truncate w-full  flex gap-4 items-center p-3"
                type="button"
                onClick={() => handleCategoriaActual(categoria)}
            >
                <img 
                    alt="Imagen Icono"
                    src={`/img/icono_${icono}.svg`}
                    className="w-12"
                />
                {nombre}
            </button>
        </div>
    )
}

