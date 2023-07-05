import React from 'react'
import { useState, useEffect } from "react"
import { Col, Row, Typography } from 'antd';
const { Title, Text } = Typography;

const names = [
    'Collaborate.', 'Get Feedback.', 'Code.', 'Create Bug Report.', 'Review Bug Report.',
    'Run Live Example.', 'Create Rapid Prototype.', 'Learn New Framework.', ' Teach New Framework.',
    'Present Live Demo.'
]

export default function Home() {
    const [currentName, setCurrentName] = useState(names[0]);

    function setRandomName() {
        const index = Math.floor(Math.random() * names.length);
        let newName = names[index]
        if (newName == currentName) { setRandomName() }
        else { setCurrentName(newName) }
        return
    }

    useEffect(() => {
        setTimeout(() => {
            setRandomName()
        }, 2000);
    }, [currentName])

    return (
        <div style={{ paddingBottom: "7%", backgroundColor: "#1c1f25" }}>
            <Row>
                <Col md={3} sm={1} />
                <Col md={18} sm={20} >
                            <div style={{ fontSize: 100, fontWeight: 700, color: "#fff", marginTop: "5%", }}>Click.</div>
                            <div style={{ fontSize: 100, fontWeight: 700, color: "#fff" }} >{currentName}</div>
                        <div style={{ fontSize: 100, fontWeight: 700, color: "#69f5ff", marginBottom: "52px"}}>Done.</div>
                </Col>
            </Row>

            <Row >
                <Col md={3} sm={1} />
                <Col md={18} sm={17}>
                    <div style={{ fontSize: 18, margin: 10, color: "#bbbcbe" }}>
                        Stay in the flow with instant dev experiences. No more hours stashing/pulling/
                    </div>
                    <div style={{ fontSize: 18, margin: 10, color: "#bbbcbe" }}>
                        installing locally — just click, and start coding.
                    </div>
                </Col>
            </Row>
        </div>
    )
}
