import { Link } from "react-router-dom"

function Login() {



  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <div className=" py-9 px-5 rounded-md w-80 ">
        <h1 className="mb-10 text-white text-center">Login</h1>

        <form action="" className="flex flex-col text-white ">

          <label htmlFor="correo">Correo</label>
          <input type="text" 
                  id="correo"
                  className="border p-2 my-3 rounded-md bg-slate-700 w-full"
                  name="correo"
          />

          <label htmlFor="password">Contraseña</label>
          <input type="password" 
                  id="password"
                  className="border p-2 my-3 rounded-md bg-slate-700"
                  name="password"
          />

          <input type="submit"
              value={"Inicia Sesion"}
              className="border py-3 mt-2 bg-cyan-800 text-white rounded-md"
          />

        </form>        
      </div>

      <div className="absolute top-10 right-10 flex flex-col gap-5 text-center 
                       ">
        <div className="bg-zinc-600 transition  duration-300 ease-in-out hover:-translate-x-4 rounded-md py-2 ">
          <Link to="/auth/registro">
            <button className="text-white ">
              ¿Tienes cuenta?
            </button>               
          </Link>
       
        </div>

        <div className="transition  duration-300 ease-in-out hover:-translate-x-4 bg-zinc-600 rounded-md py-2">
          <Link to="/">
            <button className="text-white mx-3">
              ¿Olvidaste tu Contraseña?
            </button>              
          </Link>
        
        </div>
      </div>

      <div className="absolute top-20 left-40 flex  text-center 
                       ">
          <div className="bg-zinc-500 transition  duration-300 ease-in-out hover:translate-x-4 rounded-md  py-2 px-6">
            <Link to="/auth">
              <button className="text-white ms-3">
                Inicia Sesion
              </button> 
            </Link>         
          </div>

          
        </div> 

        <div className="p-4 flex items-center justify-center absolute top-5 left-10">
            <img 
                className="rounded-full w-32 "
                src="../img/logo.jpg"
                alt="Imagen Logo"
            />
        </div>


    </div>
  )
}

export default Login