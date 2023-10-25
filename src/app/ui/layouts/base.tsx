import {ReactNode, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Flex } from 'antd';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../shared/const/routes';
import { Typography } from 'antd';
import {FireTwoTone} from '@ant-design/icons';

const { Text } = Typography;
const { Header, Sider } = Layout;

type BaseLayoutProps = {
    children: ReactNode
}
export const BaseLayout = (props: BaseLayoutProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const {children} = props
    return (
        <Layout>
            <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
                <Flex style={{width:'100%', padding: '12px 0'}} gap="small" justify={'center'} align={'center'}>
                    <FireTwoTone />
                    {!collapsed && <Text strong={true}>Ant Design</Text>}
                </Flex>
                <Menu
                    mode="inline"
                    items={routes.map(route => (
                        {
                            key: route.path,
                            label: route.label,
                            icon:  <NavLink key={route.path} to={route.path}>{route.icon}</NavLink>,
                            children: route?.children
                        }
                    ))}  // TODO: CODE SPLITTING
                />
            </Sider>
            <Layout  style={{minHeight: '100vh'}} >
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                {children}
            </Layout>
        </Layout>
    );
};

