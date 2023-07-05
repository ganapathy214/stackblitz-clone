import { Col, Row, Typography } from 'antd'
import React from 'react'

export default function Quotes() {
    const { Title, Text } = Typography;
    return (
        <div style={{ margin: "5% 0 ", }}>
            <Row justify={"center"} style={{ margin: "4% 0 ", }}>
                <Col>
                    <Row justify={"center"}>
                        <Text style={{ fontSize: 30, padding: "0 10px" }}>
                            “Being able to instantly open and share
                        </Text>
                    </Row>
                    <Row justify={"center"}>
                        <Text style={{ fontSize: 30, padding: "0 10px" }}>
                            environments has <strong>significantly reduced our team's </strong>
                        </Text>
                    </Row>
                    <Row justify={"center"}>
                        <Text style={{ fontSize: 30, padding: "0 10px" }}>
                            <strong> support burden</strong> for bug reproductions and
                        </Text>
                    </Row>
                    <Row justify={"center"}>
                        <Text style={{ fontSize: 30, padding: "0 10px" }}>
                            enabled rapid innovation.”
                        </Text>
                    </Row>
                </Col>
            </Row>

            <Row justify={"center"} align="middle" gutter={30}>
                <Col>
                    <img alt="avatar" style={{ borderRadius: "50%" }} src="https://c.staticblitz.com/assets/vite/quote-author-stephen_fluin-92c7c87c.png" width={50} />
                </Col>
                <Col>
                    <img alt="Quote author associated organization" class="author-logo-img" src="https://c.staticblitz.com/assets/vite/quote-logo-google-877415c0.svg" />
                </Col>
                <Col>
                    <div>
                        <Text style={{ fontSize: 15}}>
                        <strong>Stephen Fluin</strong>
                        </Text>
                    </div>
                    <div>
                        <Text style={{ fontSize: 15 }}>Developer Relations Lead at Google</Text>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
