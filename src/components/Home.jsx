import React, {useEffect, useState} from 'react';
import Axios from "axios"
import { useApi } from '../api/useApi'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { Popover } from '@headlessui/react'

// import Navbar from '@components/Navbar'

export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(users)
  }, [])

  const getUsers = async(o) => {
    const resp = await useApi.get('http://localhost:3002/getData')
      if(o == "otro"){
        const filtrado = resp.data.filter(inf => inf.ocupacion == "otro")
        console.log(filtrado)
        setUsers(filtrado)
      }else if(o == "cerrajero"){
        const filtrado = resp.data.filter(inf => inf.ocupacion == "cerrajero")
        console.log(filtrado)
        setUsers(filtrado)
      }else if(o == "carpintero"){
        const filtrado = resp.data.filter(inf => inf.ocupacion == "carpintero")
        console.log(filtrado)
        setUsers(filtrado)
      }else if(o == "plomero"){
        const filtrado = resp.data.filter(inf => inf.ocupacion == "plomero")
        console.log(filtrado)
        setUsers(filtrado)
      }
    // setUsers(resp.data)
  }

  // function Datos(o){   
  //   Axios.get("http://localhost:3002/getData",{
  //   }).then(response => {
  //     if(o == "otro"){
  //       const filtrado = response.data.filter(inf => inf.ocupacion == "otro")
  //       console.log(filtrado)
  //     }else if(o == "cerrajero"){
  //       const filtrado = response.data.filter(inf => inf.ocupacion == "cerrajero")
  //       console.log(filtrado)
  //     }else if(o == "carpintero"){
  //       const filtrado = response.data.filter(inf => inf.ocupacion == "carpintero")
  //       console.log(filtrado)
  //     }else if(o == "plomero"){
  //       const filtrado = response.data.filter(inf => inf.ocupacion == "plomero")
  //       console.log(filtrado)
  //     }
  //     // console.log(response)
  //     // return response.data
  //   }).catch(e => {console.error(e)})    
  // }
  
  // function otros(){
  //   const filtrado = .filter(inf => inf.ocupacion == "otro")
  //   console.log(filtrado)
  // }

  return (
  <>
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          
          <div className="flex justify-between md:flex items-center md:flex-1 lg:w-0">

            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>

              <div className="flex justify-between md:flex items-center md:flex-1 lg:w-0">
                  <button className="bg-transparent hover:bg-orange-700 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => getUsers("cerrajero")}
                  >
                    Cerrajeros
                  </button>

                  <button className="bg-transparent hover:bg-cyan-600 text-cyan-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => getUsers("cerrajero")}
                  >
                    Plomeros
                  </button>

                  <button className="bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => getUsers("cerrajero")}
                  >
                    Carpinteros
                  </button>

                  <button className="bg-transparent hover:bg-violet-500 text-violet-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => getUsers("otro")}
                  >
                    Otros
                  </button>
              </div>

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-slate-900">
                  Sign out
                </a>
                <a
                  href="#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-400"
                >
                  Destacado
                </a>
              </div>
          </div>

        </div>
      </div>         
    </Popover>
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
            >
              8
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              9
            </a>
            <a
              href="#"
              className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
    <section className="flex ">

    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {users.map((user) => (
            <div key={user.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  // src={user.imageSrc}
                  // alt={user.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {user.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{user.nombre}</p>
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* {
        users.map( user => (
          <div key={user.id}>
          <div className="w-full flex items-center justify-center">
              <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
                  <div className="w-full flex items-center justify-center">
                      <div className="flex flex-col items-center">
                          <img src="https://cdn.tuk.dev/assets/templates/olympus/profile.png" alt="profile" />
                          <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">
                            {user.nombre}
                          </p>
                      </div>
                  </div>
                  <div className="flex items-center mt-7">
                      <div className>
                          <p className="text-xs text-gray-300">{user.ocupacion}</p>
                          <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">28</p>
                      </div>
                      <div className="ml-12">
                          <p className="text-xs text-gray-300">Revenue</p>
                          <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">$2890</p>
                      </div>
                      <div className="ml-12">
                          <p className="text-xs text-gray-300">Average</p>
                          <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">$169</p>
                      </div>
                  </div>
              </div>
          </div>
          </div>
        ))
      } */}
         
    </section>
  </>
  )
}