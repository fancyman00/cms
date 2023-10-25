import { DataConstructor } from "../../pages/data-constructor";
import { BaseLayout } from "../ui/layouts/base";
import {Outlet, createBrowserRouter } from 'react-router-dom';

export const Router = () =>
    createBrowserRouter(
        [
            {
                path: '/',
                element: (
                    <BaseLayout><Outlet/></BaseLayout>
                ),
                children: [
                    {
                        path: '/',
                        element: <div>/</div>
                    },
                    {
                        path: '/1',
                        element: <div>1</div>
                    },
                    {
                        path: '/2',
                        element: <div>2</div>
                    },
                    {
                        path: '/data-constructor',
                        element: <DataConstructor/>
                    },
                ]
            },
        ],
        {
            basename: '/',
        },
    );
