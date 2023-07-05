import { Col, Row, Typography } from 'antd';
import { useEffect, useState } from "react";
const { Title, Text } = Typography;

const names = [
    'Collaborate.', 'Get Feedback.', 'Code.', 'Create Bug Report.', 'Review Bug Report.',
    'Run Live Example.', 'Create Rapid Prototype.', 'Learn New Framework.', 'Teach New Framework.',
    'Present Live Demo.'
]

export default function Home() {
    const [currentName, setCurrentName] = useState(names[0]);

    function setRandomName() {
        const index = Math.floor(Math.random() * names.length);
        let newName = names[index]
        if (newName === currentName) {
            setRandomName();
        } else {
            setCurrentName(newName);
        }
        return;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setRandomName();
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentName]);

    return (
        <div style={{ paddingBottom: "7%", backgroundColor: "#1c1f25" }}>
            <Row>
                {/* <Col xs={0} sm={0} md={3} lg={3} xl={3} xxl={3} /> */}
                <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18} style={{ margin: "5%" }}>
                    <div style={{ fontSize: 100, fontWeight: 700, color: "#fff", marginTop: "5%" }}>Click.</div>
                    <div style={{ fontSize: 100, fontWeight: 700, color: "#fff" }}>{currentName}</div>
                    <div style={{ fontSize: 100, fontWeight: 700, color: "#69f5ff", marginBottom: "52px" }}>Done.</div>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} xxl={3} />
            </Row>

            <Row>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} xxl={3} />
                <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
                    <div style={{ fontSize: 18, margin: 10, color: "#bbbcbe" }}>
                        Stay in the flow with instant dev experiences. No more hours stashing/pulling/
                    </div>
                    <div style={{ fontSize: 18, margin: 10, color: "#bbbcbe" }}>
                        installing locally — just click, and start coding.
                    </div>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} xxl={3} />
            </Row>
        </div>
    )
}
