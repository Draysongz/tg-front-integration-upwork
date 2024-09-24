import { Col, Navbar, Row } from "react-bootstrap";
import { Link } from "../Link/Link";
import { DollarCircle, EmptyWallet, Home, Profile2User } from "iconsax-react";

export const Footer = ({isActive}: {isActive: string}) => {
    return (
        <Navbar expand="sm" fixed="bottom" className="mb-3 footer-nav">
            {/* <Container> */}
                <div className="Footer w-100 rounded-4 px-3 py-2">
                    <Row className="d-flex">
                        <Col xs={3} className="text-center">
                            <Link to="/home" className={`${isActive === 'home' && 'active'}`}>
                                <div className="footer-nav">
                                    <Home variant="Bold"/>
                                    <div>Home</div>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={3} className="text-center">
                            <Link to="/friends" className={`${isActive === 'friends' && 'active'}`}>
                                <div className="footer-nav">
                                    <Profile2User variant="Bold"/>
                                    <div>Friends</div>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={3} className="text-center">
                            <Link to="/earn" className={`${isActive === 'earn' && 'active'}`}>
                                <div className="footer-nav">
                                    <DollarCircle variant="Bold"/>
                                    <div>Earn</div>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={3} className="text-center">
                            <Link to="/wallet" className={`${isActive === 'wallet' && 'active'}`}>
                                <div className="footer-nav">
                                    <EmptyWallet variant="Bold"/>
                                    <div>Wallet</div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
            {/* </Container> */}
        </Navbar>
    )
}