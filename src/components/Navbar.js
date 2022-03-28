import { Popover, Transition } from '@headlessui/react'
import Axios from "axios"

export default function Navbar() {

  function Datos(){   
    Axios.get("http://localhost:3002/getData", {
      params: {ocupacion: "otros"}
    }).then(response => {
      console.log(response.data)
    }).catch(e => {console.error(e)})
  }

  return (
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
                  >
                    Cerrajeros
                  </button>

                  <button className="bg-transparent hover:bg-cyan-600 text-cyan-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Plomeros
                  </button>

                  <button className="bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Carpinteros
                  </button>

                  <button className="bg-transparent hover:bg-violet-500 text-violet-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={Datos}
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
  )
}