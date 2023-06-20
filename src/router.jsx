import { createBrowserRouter } from 'react-router-dom'
import Productos from './views/Productos'
import Ordenes from './views/Ordenes'
import AdminLayout from './layouts/AdminLayout'
import Registro from './views/Registro'
import Login from './views/Login'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Layout from './layouts/Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [{
            index: true,
            element: <Inicio />
        }]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Ordenes />
            },
            {
                path: '/admin/productos',
                element: <Productos />
            }
        ]
    }
])

export default router