import { Affix, Button, Col, Drawer, Menu, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import logo from '../assets/logo.jpg';
import { useState } from 'react';

const items = [
    {
        label: 'Docs',
        key: 'Docs',
    },
    {
        label: 'Price',
        key: 'Price',
    },
    {
        label: 'Enterprise',
        key: 'Enterprise',
    },
    {
        label: 'Code Flow',
        key: 'CodeFlow',
    },
];

const HeaderTabs = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const closeDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    return (
        <Affix>
            <Row style={{ backgroundColor: "#1c1f25" }} align={"middle"}>
                <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1} />
                <Col xxl={3} xl={3} lg={3} md={0} sm={0} xs={0}>
                    <Image src={logo} alt="logo" width={150} style={{ padding: 10 }} />
                </Col>
                <Col xxl={15} xl={15} lg={15} md={0} sm={0} xs={0}>
                    <Row justify="center">
                        <Menu style={{ backgroundColor: "#1c1f25", color: "#7e7f83" }} mode="horizontal" items={items} />
                    </Row>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={0} sm={0} xs={0}>
                    <Row justify="end">
                        <Button type="text" style={{ color: "white", margin: "5px 0" }}>Sign in</Button>
                    </Row>
                </Col>
                <Col xxl={1} xl={1} lg={1} md={0} sm={0} xs={0} />
                <Col xxl={0} xl={0} lg={0} md={24} sm={24} xs={24}  >
                    <Row justify={"space-between"}>
                        <Col>
                            <Row align={"middle"}>
                                <Image src={logo} alt="logo" width={150} style={{ padding: 10 }} />
                                <Button type="text" style={{ color: "white", margin: "5px 0" }} onClick={showDrawer}>
                                    <MenuOutlined />
                                </Button>

                            </Row>
                        </Col>
                        <Col>
                            <Button type="text" style={{ color: "white", margin: "5px 0" }}>Sign in</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Drawer
                title={null}
                placement="right"
                closable={false}
                onClose={closeDrawer}
                visible={drawerVisible}
                bodyStyle={{ padding: 0 }}
            >
                <Row justify="end" style={{ padding: '10px' }}>
                    <Button type="text" style={{ color: '#1c1f25' }} onClick={closeDrawer}>
                        Close
                    </Button>
                </Row>
                <Menu style={{ backgroundColor: '#1c1f25', color: '#7e7f83' }} mode="vertical" items={items} />
            </Drawer>
        </Affix>
    );
};

export default HeaderTabs;
