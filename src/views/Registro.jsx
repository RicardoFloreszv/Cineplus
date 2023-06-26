import { Link } from "react-router-dom"
import { useState, createRef } from "react"
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";

function Registro() {

  const [errores, setErrores] = useState([])

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Creamos un objeto para colocar los datos que ingreso el usuario en el form
    const datos = {

      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      password_confirmation:passwordConfirmationRef.current.value
    }

    //Enviar los datos al backend
    try {
      const respuesta = await clienteAxios.post('/api/registro', datos)
      console.log(respuesta);

    } catch (error) {
      setErrores(Object.values(error.response.data.errors) );
    }
  }



  return (
    <div className="flex justify-end">
      <div className="flex flex-col items-center justify-center min-h-screen w-2/6 ">

        <h1 className="mb-10 text-white">Registro</h1>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col px-60 w-full  text-white">

        {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>)  : null }

        <label htmlFor="nombre">Nombre</label>
          <input type="text" 
                  id="nombre"
                  className="border p-2 my-3 rounded-md bg-slate-700 "
                  name="nombre"
                  placeholder="Escribe tu nombre"
                  ref={nameRef}
          />

          <label htmlFor="correo">Correo</label>
          <input type="email" 
                  id="correo"
                  className="border p-2 my-3 rounded-md bg-slate-700 "
                  name="correo"
                  placeholder="Escribe tu correo"
                  ref={emailRef}
          />

          <label htmlFor="password">Contraseña</label>
          <input type="password" 
                  id="password"
                  className="border p-2 my-3 rounded-md bg-slate-700 "
                  name="password"
                  placeholder="Escribe tu contraseña"
                  ref={passwordRef}
          />
          
          <label htmlFor="password_confirmation">Repetir contraseña</label>
          <input type="password" 
                  id="password_confirmation"
                  className="border p-2 my-3 rounded-md bg-slate-700 "
                  name="password_confirmation"
                  placeholder="Confirma tu contraseña"
                  ref={passwordConfirmationRef}
          />

          <input type="submit"
            value={"Registrarse"}
            className="border py-3 mt-2 bg-cyan-800 rounded-md cursor-pointer"
          />


        </form>
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

export default Registro