import {  CheckBanner, TonCoinBlueIcon } from '@/assets';
import { type FC } from 'react';
import { Button, Card, Col, Container, Image, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const DailyCheckPage: FC = () => {

    return (
        <Row className='px-0 mx-0'>
            <Col xs={12} sm={12} md={12} className='mx-auto px-0'>
                <div className='DailyCheckPage page'>
                    <section className='main-section pt-3 bottom-0 mx-auto w-100 mt-4'>
                        <Navbar sticky="top" >
                            <Container className='w-100'>
                                <Row className='w-100 mx-auto'>
                                    <Col xs={12} className='px-0 text-end'> <Link to="/home"><Button className='btn-close bg-gray' aria-label="Close"></Button></Link></Col>
                                </Row>
                            </Container>
                        </Navbar>
                        <Container>
                            <Row>
                                <Col xs={12} className='text-center'>
                                    <div className='complete-steps mb-2 d-flex align-items-center justify-content-center'>
                                        <span className='completed'>1</span>
                                        <span className='incompleted'> / 7</span>
                                    </div>
                                    <div className='title text-center'>
                                        day check-in
                                    </div>
                                    <Image src={CheckBanner} width="55%" />
                                    <Card className='mb-2 inactive'>
                                        <Card.Body className='d-flex align-items-center justify-content-between'>
                                            <div className='left-section'>
                                                <div className='mb-1'>TonCoins</div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={TonCoinBlueIcon} width={20} height={20} className='me-2'/>
                                                    <span>+ 200</span>
                                                </div>
                                            </div>
                                            <div className='right-section'>Tomorrow</div>
                                        </Card.Body>
                                    </Card>
                                    <Card className='mb-4'>
                                        <Card.Body className='d-flex align-items-center justify-content-between'>
                                            <div className='left-section'>
                                                <div className='mb-1'>TonCoins</div>
                                                <div className='d-flex align-items-center'>
                                                    <Image src={TonCoinBlueIcon} width={20} height={20} className='me-2'/>
                                                    <span>+ 200</span>
                                                </div>
                                            </div>
                                            <div className='right-section'>Today</div>
                                        </Card.Body>
                                    </Card>
                                    <Button className='w-100 main-button py-3 rounded-4 fw-bold'>CLAIM</Button>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </Col>
        </Row>
    );
};
