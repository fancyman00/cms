import { ReactNode } from 'react';
import 'normalize.css';
import { BaseStyle } from '../ui/style/base';

type StyleProviderProps = {
    children?: ReactNode;
};
export const StyleProvider = (props: StyleProviderProps) => {
    const { children } = props;
    return (
        <>
            <BaseStyle/>
            {children}
        </>
    );
};
