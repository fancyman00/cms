import { Space, Table, Layout, theme, Button, Divider } from 'antd';
const {Content} = Layout
import {AppstoreAddOutlined} from '@ant-design/icons';
import {ColumnsType} from "antd/es/table";

type DataType = object

interface DataConstructorProps<DataType> {
    columns: ColumnsType<DataType>,
    data: DataType[]
}

export const DataConstructor = <T extends DataType>(props: DataConstructorProps<T>) => {
    const {columns, data} = props
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return(
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
            }}
        >
            <Space>
                <Button type="primary" icon={<AppstoreAddOutlined />}>
                    Add
                </Button>
            </Space>
            <Divider />
            <Table columns={columns} dataSource={data} />
        </Content>
    )
}