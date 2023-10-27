import {FaUserAlt, FaServer, FaTh} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import {Types} from "../../pages/data-constructor/types";

export const routes= [
    {
        key: '1',
        path: '1',
        icon: <FaUserAlt/>,
        label: 'Profile',
        element: <div>1</div>
    },
    {
        key: '2',
        path: '2',
        icon: <FaServer/>,
        label: <NavLink to={'2'}>Sites</NavLink>,
        element: <div>2</div>
    },
    {
        key: 'data-constructor',
        path: 'data-constructor',
        icon: <FaTh/>,
        label: 'Data Constructor',
        children: [
            {
                key: 'types',
                path: 'types',
                label: <NavLink key={'types'} to={'data-constructor/types'}>Types</NavLink>,
                element: <Types/>
            },
            {
                key: 'components',
                path: 'components',
                element: <Types/>,
                label: <NavLink key={'components'} to={'data-constructor/components'}>Components</NavLink>,
            },
            {
                key: 'raw-data',
                path: 'raw-data',
                element: <Types/>,
                label: <NavLink key={'raw-data'} to={'data-constructor/raw-data'}>Raw data</NavLink>,
            },
        ]
    }
]