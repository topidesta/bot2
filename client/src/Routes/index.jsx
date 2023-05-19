import { createBrowserRouter} from 'react-router-dom'
import FormLogin from '../components/FormLogin';
import NotFound from '../components/NotFound';
import Register from '../components/Register';
import Layout from '../layouts/Layout';
import LayoutPanel from '../layouts/LayoutPanel';
import AddCarrito from '../screens/AddCarrito';
import Home from '../screens/Home';
import AdministrarProductos from '../screens/AdminPanel/Pizzas';
import AdministrarUsuarios from '../screens/AdminPanel/AdministrarUsuarios';
import AdminPanel from '../screens/AdminPanel/AdminPanel';
import PizzasAdd from '../screens/AdminPanel/pizzas/PizzasAdd';
import PizzaEditar from '../screens/AdminPanel/pizzas/PizzasEditar';
import PizzaDetalle from '../screens/AdminPanel/pizzas/PizzaDetalle';
import UsuarioEditar from '../screens/AdminPanel/users/UsuarioEditar';



export const  router =  createBrowserRouter([
    {
        path:'register',
        element: <Register />
    },
    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path:'/',
                index: true,
                element: <Home />
            },
            {
                path:'add',
                element: <AddCarrito />
            },
            {
                path:'login',
                element: <FormLogin />
            },
        ]
    },

    {
        path: '/cpanel',
        element: <LayoutPanel />,
        errorElement: <NotFound />,
        children: [
            {
                path:'adm',
                element: <AdminPanel />
            },
            {
                path:'adm/users',
                element: <AdministrarUsuarios />
            },
            {
                path:'adm/products',
                element: <AdministrarProductos />
            },
            {
                path:'adm/products/pizza/:id',
                element: <PizzaDetalle />
            },
            {
                path:'adm/agregar',
                element: <PizzasAdd />
            },
            {
                path:'adm/products/editar/:id',
                element: <PizzaEditar />
            },
            {
                path:'adm/users/editar/:id',
                element: <UsuarioEditar />
            },
        ]
    }
]);

