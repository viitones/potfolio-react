import { createBrowserRouter } from "react-router-dom"

import { App } from "../app"
import { Home } from "../pages/Home"
import { Formacao } from "../pages/Formacao"
import { Projetos } from "../pages/Projetos"

export const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/formacao',
                element: <Formacao />
            },
            {
                path: '/projetos',
                element: <Projetos />
            },
        ],
    },
])