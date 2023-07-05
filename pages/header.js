import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Affix, Button, Col, Menu, Row } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../assets/logo.jpg'
// import logoimg from '../assets/logo.jpg'
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
        label: 'Enterprice  ',
        key: 'Enterprice',
    },
    {
        label: 'Code flow  ',
        key: 'Code flow',
    },

];
const HeaderTabs = () => {
    return (
        <Affix>
            <Row style={{ backgroundColor: "#1c1f25" }}>
                <Col md={1}/>
                <Col md={3} sm={3}>
                    <Image src={logo} alt="logo" width={150} style={{ padding:10 }}/>
                </Col>
                <Col md={15} sm={24}>
                    <Row justify={'center'}>
                    <Menu style={{ backgroundColor: "#1c1f25", color:"#7e7f83"}}  mode="horizontal" items={items} />
                    </Row>
                </Col>
                <Col md={3} sm={3}>
                    <Row justify={'end'}>
                    <Button type='text' style={{ color: "white", margin: "5px 0" }}>Sign in</Button>
                    </Row>
                </Col>
                <Col md={1} />
            </Row>
        </Affix>
    )
};
export default HeaderTabs;