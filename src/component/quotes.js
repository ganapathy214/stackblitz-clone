import Typography from 'antd/lib/typography';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';

export default function Quotes() {
    const { Title, Text } = Typography;
    return (
        <div style={{ margin: "5% 0" }}>
            <Row justify="center" style={{ margin: "4% 0" }}>
                <Col span={12}>
                    <Text style={{ fontSize: 30, }}>
                        “Being able to instantly open and share environments has <strong>significantly reduced our team's support burden</strong> for bug reproductions and enabled rapid innovation.”
                    </Text>
                </Col>
            </Row >

            <Row justify="center" align="middle" gutter={30} style={{ margin: 3 }}>
                <Col>
                    <img alt="avatar" style={{ borderRadius: "50%" }} src="https://c.staticblitz.com/assets/vite/quote-author-stephen_fluin-92c7c87c.png" width={50} />
                </Col>
                <Col>
                    <img alt="Quote author associated organization" className="author-logo-img" src="https://c.staticblitz.com/assets/vite/quote-logo-google-877415c0.svg" />
                </Col>
                <Col>
                    <div>
                        <Text style={{ fontSize: 15 }}>
                            <strong>Stephen Fluin</strong>
                        </Text>
                    </div>
                    <div>
                        <Text style={{ fontSize: 15 }}>Developer Relations Lead at Google</Text>
                    </div>
                </Col>
            </Row>
        </div >
    );
}
