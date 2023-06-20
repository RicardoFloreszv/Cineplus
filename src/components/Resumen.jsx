import useCine from "../hooks/useCine"
import PedidoInstancia from "./PedidoInstancia"

function Resumen() {

  const {pedido} = useCine()


  return (
    <aside className=" w-80 h-screen overflow-y-scroll p-5 bg-zinc-900 no-scrollbar text-white">
            <h1 className="text-4xl font-black">
                Mi Pedido
            </h1>
            <p className="text-lg my-5">
                Aquí podrás ver el resumen y totales de tu pedido
            </p>

            {pedido.length === 0 
              ? "No hay pedidos" 
              : pedido.map(pedido => (
                <PedidoInstancia 
                  key={pedido.id}
                  pedido={pedido}
                />
              )) 
            }

            <form className="w-full" >
              <div className="mt-5 p-4">
                <input type="submit" 
                      className=" bg-zinc-700 hover:bg-slate-800 w-full p-2 cursor-pointer "
                      value="Confirmar Pedido"
                      

                />
              </div>
            </form>


    </aside>
  )
}

export default Resumen