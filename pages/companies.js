import { Col, Row } from 'antd'
import React from 'react'
import background from '../assets/Image_01.png';


export default function Companies() {
    return (
        <div style={{ color: "#fff", padding: "90px 0", backgroundImage: `url(${background.src})`, width: '100%', height: '100%', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Row justify={"center"} >
                <Col span={20}>
                    <Row justify={"center"} >
                        <Col>
                            <div style={{ fontSize: 30, fontWeight: 300, color: "#bbbcbe" }}>
                                Loved by millions of developers every month

                            </div>
                        </Col>
                    </Row>
                    <Row justify={"center"} >
                        <Col>
                            <div style={{ fontSize: 28, fontWeight: 700, color: "#bbbcbe" }}>
                                at the world's largest companies
                            </div>
                        </Col>
                    </Row>



                    <div className='btnlogoContainer'>
                        <img className='btnLogo' alt="Google logo" src="https://c.staticblitz.com/assets/vite/google-2f23d1a2.svg" />
                        <img className='btnLogo' alt="Meta logo" src="https://c.staticblitz.com/assets/vite/meta-3ec95da4.svg" />
                        <img className='btnLogo' alt="Shopify logo" src="https://c.staticblitz.com/assets/vite/shopify-0fd4beeb.svg" />
                        <img className='btnLogo' alt="Salesforce logo" src="https://c.staticblitz.com/assets/vite/salesforce-7c74d880.svg" />
                        <img className='btnLogo' alt="Intel logo" src="https://c.staticblitz.com/assets/vite/intel-bbaa52f8.svg" />
                        <img className='btnLogo' alt="Mozilla logo" src="https://c.staticblitz.com/assets/vite/mozilla-1c86a309.svg" />
                        <img className='btnLogo' alt="Cloudflare logo" src="https://c.staticblitz.com/assets/vite/cloudflare-2e0cc54d.svg" />
                        <img className='btnLogo' alt="Stripe logo" src="https://c.staticblitz.com/assets/vite/stripe-222e3f8f.svg" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
