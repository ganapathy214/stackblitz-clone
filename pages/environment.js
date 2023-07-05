import { Col, Row, Tabs, Typography } from 'antd';

export default function Environment() {
    const { Title, Text } = Typography;
    const items = [
        {
            key: '1',
            label: 'Popular',
        },
        {
            key: '2',
            label: 'Frontend',
        },
        {
            key: '3',
            label: 'Backend',
        },
        {
            key: '4',
            label: 'Full stack',
        },
        {
            key: '5',
            label: 'Vite',
        },
        {
            key: '6',
            label: 'Doc, blogs & slides',
        },
        {
            key: '7',
            label: 'Creative',
        },
        {
            key: '8',
            label: 'Mobile',
        },
        {
            key: '9',
            label: 'Vanilla',
        },
    ];

    const buttonItems = [
        {
            id: 1,
            logo: "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png",
            Title: " Next js",
            content: " Node js",
        },
        {
            id: 2,
            logo: "https://nuxt.com/assets/design-kit/logo/icon-green.png",
            Title: " Nuxt 3",
            content: " Node js",
        },
        {
            id: 3,
            logo: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            Title: " Node.js",
            content: "Blank project",
        },
        {
            id: 4,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
            Title: " JavaScript",
            content: "Blank project",
        },
        {
            id: 5,
            logo: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-3629713-3030764.png",
            Title: " TypeScript",
            content: "Blank project",
        },
        {
            id: 6,
            logo: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
            Title: " React",
            content: "TypeScript",
        },
        {
            id: 7,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
            Title: " Angular",
            content: "TypeScript",
        },
        {
            id: 8,
            logo: "https://vuejs.org/images/logo.png",
            Title: " Vue3",
            content: "JavaScript",
        },
        {
            id: 9,
            logo: "https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png",
            Title: "Rx Js",
            content: "TypeScript",
        },
        {
            id: 10,
            logo: "https://blog.stackblitz.com/posts/webcontainer-api-is-here/social.png",
            Title: "WebContainer API",
            content: "Node.js",
        },
    ];

    return (
        <div style={{ backgroundColor: '#1c1f25', color: '#fff', padding: '0 0 10% 0' }}>
            <Row justify="center">
                <Col>
                    <div style={{ fontSize: 35, color: '#fff', marginBottom: 30, textAlign: 'center' }}>
                        Boot a fresh environment in <span style={{ fontWeight: 700 }}>milliseconds.</span>
                    </div>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={22} sm={20} md={18} lg={16} xl={14} xxl={12}>
                    <div style={{ fontSize: 30, color: '#fff', textAlign: 'center' }}>
                        <Tabs defaultActiveKey="1" items={items} />
                    </div>
                </Col>
            </Row>
            <div className="btnContainer" >
                {buttonItems.map((btn) => (
                    <button
                        key={btn.id}
                        className="envButton"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 200,
                            margin: '10px',
                            padding: '10px',
                            backgroundColor: '#333',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        <img src={btn.logo} alt="logo" width={50} height={50} style={{ marginBottom: '10px' }} />
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontWeight: 400, fontSize: '85%', color: '#cccccc' }}>{btn.Title}</div>
                            <div style={{ fontWeight: 400, fontSize: '85%', color: '#909193' }}>{btn.content}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
