import { TonCoinBlueIcon } from '@/assets';
import { FriendCard } from '@/components/Cards/FriendCard';
import { ListCard } from '@/components/Cards/ListCard';
import { Footer } from '@/components/layout/Footer';
import { DocumentCopy } from 'iconsax-react';
import { type FC } from 'react';
import { Button, Card, Col, Container, Image, Navbar, Row } from 'react-bootstrap';
import { DailyLoginIcon } from '@/assets';

export const FriendPage: FC = () => {

    return (
        <Row className='px-0 mx-0'>
            <Col xs={12} sm={12} md={12} className='mx-auto px-0'>
                <div className='FriendPage page'>
                    <section className='main-section pb-3 bottom-0 mx-auto w-100 mt-4 py-5'>
                        <Container className='mb-1'>
                            <Row className='mb-3'>
                                <Col xs={12} className='text-center'>
                                    <div className='claim-value mb-2 text-white'>Invite Friends</div>
                                    <p className='fs-6 text-white'>You and your friend will receive bonuses</p>
                                    <Card className='bg-transparent border claim-card'>
                                        <Card.Body>
                                            <div className='d-flex align-items-center justify-content-center mb-4 mt-2'>
                                                <Image src={TonCoinBlueIcon} width={32} height={32} className='me-2 ' />
                                                <div className='claim-value text-white'>500</div>
                                            </div>
                                            <Button className='w-100 main-button py-3 rounded-4'>Claim in 07h 46m</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className='mb-2'>
                                    <ListCard
                                        title="Invite a Friend"
                                        reward="+5,000"
                                        description="for you and your friend"
                                        icon={DailyLoginIcon}
                                    />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <ListCard
                                        title="Earn from Friend"
                                        reward="25%"
                                        description="for your friends earnings"
                                        icon={DailyLoginIcon}
                                    />
                                </Col>
                            </Row>
                            <div className='fs-5 my-2 fw-mediume text-white'>10 friends</div>
                            <Row>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                                <Col xs={12} className='mb-2'>
                                    <FriendCard />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <Navbar sticky="bottom" >
                        <Container className='w-100'>
                            <Row className='mb-5 w-100 mx-auto'>
                                <Col xs={9} className='mb-5 px-0'><Button className='w-100 main-button py-3 rounded-4 fw-medium text-uppercase mb-2'>Invite friend</Button></Col>
                                <Col xs={3} className='mb-5 pe-0'><Button className='w-100 main-button py-3 rounded-4 fw-medium text-uppercase mb-2'><DocumentCopy variant="Bold" className='text-white' /></Button></Col>
                            </Row>
                        </Container>
                    </Navbar>
                    <Footer isActive='friends' />
                </div>
            </Col>
        </Row>
    );
};
