import { Col, Row, Typography } from 'antd';
import Image from 'next/image';
import background from '../../assets/Image_01.png';
import logo_two from '../../assets/image_04.png';
import logo_three from '../../assets/image_05.png';
import logo_one from '../../assets/image_06.png';

const { Title, Text } = Typography;

export default function BeforeFooter() {
    return (
        <div className="mainholder">
            <div
                className="public-section__content_1"
                style={{
                    backgroundImage: `url(${background.src})`,
                    width: '100%',
                    height: '100%',
                }}
            >
                <div>
                    <Image alt="image" className="public-section-icon" src={logo_one} />
                </div>
                <Text
                    style={{
                        marginBottom: '36px',
                        color: '#ff2e9f',
                        textTransform: 'uppercase',
                        fontFamily: 'Gilroy,sans-serif',
                        fontWeight: 800,
                        fontSize: '14px',
                        letterSpacing: '1px',
                        textAlign: 'start',
                    }}
                >
                    Invested in the Future
                </Text>
                <Text className="public-page-h2">This is just the beginning.</Text>
                <p
                    style={{
                        color: '#ffff',
                        textAlign: 'start',
                        marginBottom: '20px',
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: 1.2,
                    }}
                >
                    We're working with and{' '}
                    <strong>invested in the fastest growing open source projects</strong>
                    <br />
                    to make instant, secure-by-default{' '}
                    <strong>browser-based computing</strong> accessible to
                    <br /> everyone.
                </p>
                <div className="logo_content">
                    <Image alt="image" className="section-logo" src={logo_two} />
                    <Image alt="image" className="section-logo" src={logo_three} />
                </div>
            </div>

            <Row justify="center" style={{ margin: '4% 0 ' }}>
                <Col span={24} lg={12}>
                    <Text
                        style={{
                            fontSize: 30,
                            textAlign: 'center',
                        }}
                    >
                        <strong>
                            "StackBlitz unlocks a true one-click startup experience with the
                            full stack running in the browser — it's a game-changer.”
                        </strong>
                    </Text>
                </Col>
            </Row>

            <Row
                justify="center"
                align="middle"
                gutter={30}
                style={{ margin: '5% 0' }}
            >
                <Col>
                    <img
                        alt="avatar"
                        style={{ borderRadius: '50%' }}
                        src="https://c.staticblitz.com/assets/vite/quote-author-ilya_grigorik-8bcb1b06.jpg"
                        width={50}
                    />
                </Col>
                <Col>
                    <img
                        alt="Quote author associated organization"
                        className="author-logo-img"
                        src="https://c.staticblitz.com/assets/vite/quote-logo-shopify-9ad0badd.svg"
                    />
                </Col>
                <Col>
                    <div>
                        <Text style={{ fontSize: 15 }}>
                            <strong>Ilya Grigorik</strong>
                        </Text>
                    </div>
                    <div>
                        <Text style={{ fontSize: 15 }}>Principal Engineer at Shopify</Text>
                    </div>
                </Col>
            </Row>

            <div
                className="mainContainer"
                style={{
                    backgroundImage: `url(${background.src})`,
                    width: '100%',
                    height: '100%',
                }}
            >
                <div>
                    <Text style={{ fontSize: 36, color: '#ffff' }}>
                        <strong>See for yourself.</strong>
                    </Text>
                </div>

                <div>
                    <Text style={{ fontSize: 36, color: '#ffff' }}>
                        Boot a fresh environment in <strong>milliseconds.</strong>
                    </Text>
                </div>
                <div>
                    <a className="btn41-43 btn-41">Create a new project</a>
                </div>
            </div>

            <footer className="public-section public-footer">
                <div className="public-section__content">
                    <ul>
                        <li>
                            <h4>WORKSPACES</h4>
                            <ul>
                                <li>
                                    <a>Popular</a>
                                </li>
                                <li>
                                    <a>Frontend</a>
                                </li>
                                <li>
                                    <a>Backend</a>
                                </li>
                                <li>
                                    <a>Fullstack</a>
                                </li>
                                <li>
                                    <a>Vite</a>
                                </li>
                                <li>
                                    <a>Docs, Blogs & Slides</a>
                                </li>
                                <li>
                                    <a>Vanilla</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4>START A NEW PROJECT</h4>
                            <ul>
                                <li>
                                    <a>From a Workspaces</a>
                                </li>
                                <li>
                                    <a>From a GitHub Repo</a>
                                </li>
                                <li>
                                    <a>From your computer</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4>PRODUCT</h4>
                            <ul>
                                <li>
                                    <a>Docs</a>
                                </li>
                                <li>
                                    <a>Enterprise</a>
                                </li>
                                <li>
                                    <a>Pricing</a>
                                </li>
                                <li>
                                    <a>Case Studies</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4>COMPANY</h4>
                            <ul>
                                <li>
                                    <a>Blog</a>
                                </li>
                                <li>
                                    <a>Careers</a>
                                </li>
                                <li>
                                    <a>Community</a>
                                </li>
                                <li>
                                    <a>Enterprise Sales</a>
                                </li>
                                <li>
                                    <a>Privacy</a>
                                </li>
                                <li>
                                    <a>Terms of Service</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h4>CONNECT</h4>
                            <ul>
                                <li>
                                    <a>Github</a>
                                </li>
                                <li>
                                    <a>Twitter</a>
                                </li>
                                <li>
                                    <a>Discord</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="public-footer__copyright">
                    <p>© 2023 StackBlitz, Inc.</p>
                    <p className="secondary">
                        StackBlitz Codeflow and the Infinite Pull Request logo are
                        trademarks of StackBlitz, Inc.
                    </p>
                </div>
            </footer>
        </div>
    );
}
