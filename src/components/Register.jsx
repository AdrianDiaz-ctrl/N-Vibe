import React, { useState, useEffect } from "react";
import { useApi } from "../api/useApi";
import Axios from "axios"

export default function Register() {

  const [name, setName] = useState('')
  const [edad, setEdad] = useState('')
  const [ocupacion, setOcupacion] = useState('')
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')

  // useEffect(() => {
  //   register()
  // }, [])
  

  const register = () => {
   Axios.post('http://localhost:3002/register',{
    nombre: name,
    edad: edad,
    ocupacion: ocupacion,
    correo: correo,
    password: password
  }).then((response) =>{
     console.log(response)
   })
  }

  return (
    <>
    <div className="flex justify-center my-8 mx-8">
      <img
          className="  h-8 w-auto sm:h-10 space-y-4 "
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt=""
        />
    </div>
    <div className="flex w-full justify-center my-10">
      <form className="w-full max-w-sm" action="/register" method="POST">
        <div className="md:flex md:items-center mb-6 px-4">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Full Name
            </label>
          </div>
          <div className="md:w-2/3 ">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="nombre"
              type="text"
              placeholder="Name..."
              onChange={(e) =>{setName(e.target.value);}}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 px-4">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Edad
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="edad"
              type="number"
              placeholder="..."
              onChange={(e) =>{setEdad(e.target.value);}}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 px-4">
          <div className="md:w-1/3 sm: w-3/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Ocupacion
            </label>
          </div>
          <div className="md:w-2/3">
            {/* <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="ocupacion"
              type="text"
              placeholder="..."
              onChange={(e) =>{setOcupacion(e.target.value);}}
              required
            /> */}
            <select className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={ocupacion} name="ocupaciones" id="ocupacion" onChange={(e) =>{setOcupacion(e.target.value);}}
            
            >
              <option value="carpintero">Carpintero</option>
              <option value="cerrajero">Cerrajero</option>
              <option value="plomero">Plomero</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 px-4">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Correo
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="correo"
              type="email"
              placeholder="..."
              onChange={(e) =>{setCorreo(e.target.value);}}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 px-4">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="pass"
              type="password"              
              placeholder="******************"
              onChange={(e) =>{setPassword(e.target.value);}}
              required
            />
          </div>
        </div>

        {/* <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Send me your newsletter!</span>
          </label>
        </div> */}
        <div className="md:flex md:items-center px-4">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              name="send"
              onClick={register}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}
