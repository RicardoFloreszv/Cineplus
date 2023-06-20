import { Outlet } from 'react-router-dom'
//Modal
import Modal from 'react-modal'

//Toast
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

//Componentes
import Resumen from "../components/Resumen"
import Sidebar from "../components/Sidebar"
import ModalProducto from '../components/ModalProducto'

//Hook de provider.
import useCine from '../hooks/useCine'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')

function Layout() {

  const {modal} = useCine()


  return (
    <>
        <div className='md:flex'>
          <Sidebar />

          <main className='flex-1 h-screen overflow-y-scroll bg-zinc-800 p-10 no-scrollbar' >
          <Outlet />
          </main>
          
          <Resumen />
        </div>

        <Modal isOpen={modal} style={customStyles}>
            <ModalProducto />
        </Modal>

        <ToastContainer />

    </>
  )
}

export default Layout