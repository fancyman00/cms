import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

type UiKitProviderProps = {
    children?: ReactNode
}
export const UiKitProvider = (props: UiKitProviderProps) => {
    const {children} = props
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#1677FF',
                    borderRadius: 4,
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

