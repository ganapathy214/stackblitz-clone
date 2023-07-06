import Typography from 'antd/lib/typography';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';

export default function Instant() {
    const { Title, Text } = Typography;
    return (
        <div style={{ background: "#f1f4f8" }}>
            <div style={{ margin: "0% 2% 0% 8%" }}>
                <div style={{ paddingTop: 60 }}>
                    <img src="https://c.staticblitz.com/assets/vite/wand-magic-light-3ffc6e1f.svg" alt="img" width={40} height={40} style={{ color: "#1b82bc" }} />
                </div>
                <Text style={{ fontSize: 20, color: "#1b82bc" }}>Instant dev experiences</Text>
                <div style={{ padding: "20px 0 40px 0" }}>
                    <Text style={{ fontSize: 65, fontWeight: 700 }}>Wait, I can enjoy web dev again?</Text>
                </div>
                <Row>
                    <Col xs={24} md={12}>
                        <div style={{ fontSize: 22, padding: 10 }}>
                            Significantly reduce time to market with <strong>matchlessly secure, instantly reproducible,</strong>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <div style={{ fontSize: 22, padding: 10 }}>
                            fullstack dev environments which <strong>boot in milliseconds.</strong>
                        </div>
                    </Col>
                </Row>

                <Row align="middle">
                    <Col xs={24} md={12}>
                        <div style={{ fontSize: 35, padding: "10px 10px 30px 10px" }}>Instant Bug Reports</div>
                        <div style={{ padding: "10px" }}>
                            <Text style={{ fontSize: 18, padding: "0 10px" }}>Create <strong>zero-overhead, live templates</strong> for your users to reliably submit</Text>
                            <Text style={{ fontSize: 18 }}>bugs against, <strong>filtering out true issues</strong> from everything else.</Text>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <Text style={{ fontSize: 18, padding: "0 10px" }}>
                                <a href="https://developer.stackblitz.com/guides/integration/bug-reproductions">Share complete environments with only a URL,</a> and never spin up heavy
                            </Text>
                            <Text style={{ fontSize: 18 }}>
                                local installations for a simple bug report <strong>ever again.</strong>
                            </Text>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <img alt="img" src="https://c.staticblitz.com/assets/vite/bug_reports-62f54590.png" width={650} />
                    </Col>
                </Row>

                <Row align="middle">
                    <Col xs={24} md={12}>
                        <img alt="img" src="https://c.staticblitz.com/assets/vite/interactive_documentation-0fa61953.png" width={650} />
                    </Col>
                    <Col xs={24} md={12}>
                        <div style={{ fontSize: 35, padding: "10px 10px 30px 10px" }}>Interactive Documentation</div>
                        <div style={{ padding: "10px" }}>
                            <Text style={{ fontSize: 18, padding: "0 10px" }}><a href="https://developer.stackblitz.com/platform/api/javascript-sdk">Use the StackBlitz SDK</a></Text>
                            <Text style={{ fontSize: 18 }}>to embed and interact with, <strong>actual code</strong> in your <strong>actual docs,</strong> blog or website.</Text>
                        </div>
                    </Col>
                </Row>

                <Row align="middle" style={{ paddingBottom: 50 }}>
                    <Col xs={24} md={12}>
                        <div style={{ fontSize: 35, padding: "10px 10px 30px 10px" }}>Rapid Prototyping</div>
                        <div style={{ padding: "10px" }}>
                            <Text style={{ fontSize: 18, padding: "0 10px" }}>Speed up your entire development process with<strong> real-time hot-reloading in the</strong> fastest dev environment ever made.</Text>
                            <Text style={{ fontSize: 18, padding: "0 10px" }}>
                                <a href="https://blog.stackblitz.com/posts/introducing-webcontainers/#today-we're-excited-to-announce-webcontainers.">fastest dev environment ever made.</a>
                            </Text>
                            <Text style={{ fontSize: 18 }}>Collaborate remotely on different devices, send and receive instant feedback, and <strong>get to market faster.</strong></Text>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <img alt="img" src="https://c.staticblitz.com/assets/vite/rapid_prototyping-35780526.png" width={650} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
