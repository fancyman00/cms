import {FaUserAlt, FaServer, FaTh} from 'react-icons/fa';

export const routes = [
    {
        path: '/1',
        icon: <FaUserAlt/>,
        label: 'Profile',
    },
    {
        path: '/2',
        icon: <FaServer/>,
        label: 'Sites',
    },
    {
        path: '/data-constructor',
        icon: <FaTh/>,
        label: 'Data Constructor',
        children: [
            {
                path: 'types',
                label: 'Types',
            },
            {
                path: 'components',
                label: 'Components',
            },
            {
                path: 'raw-data',
                label: 'Raw data',
            },
        ]
    }
]