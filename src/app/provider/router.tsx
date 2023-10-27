import { BaseLayout } from "../ui/layouts/base";
import {Outlet, createBrowserRouter } from 'react-router-dom';
import {routes} from "../../shared/const/routes.tsx";

export const Router = () =>
    createBrowserRouter(
        [
            {
                path: '/',
                element: (
                    <BaseLayout><Outlet/></BaseLayout>
                ),
                children: routes
            },
        ],
        {
            basename: '/',
        },
    );
