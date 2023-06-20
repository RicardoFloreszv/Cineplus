import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//Router
import { RouterProvider } from 'react-router-dom'
import router from './router'

//Context
import { CineProvider } from './context/cineProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

      <CineProvider>
          <RouterProvider router={router} />      
      </CineProvider>

)
