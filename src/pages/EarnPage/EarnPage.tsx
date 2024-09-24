import { AppIcon1, ClockBanner, TelegramBanner, TelegramIcon, SearchIcon, GuessIcon, FriendsIcon, AdsIcon, TonWalletIcon, TwitterIcon, EtronIcon, TiktokIcon, TonCoinBlueIcon } from '@/assets';
import { TaskCard } from '@/components/Cards/TaskCard';
import { Footer } from '@/components/layout/Footer';
import { useMainContext } from '@/context/MainContext';
import { type FC } from 'react';
import { Badge, Button, Card, Col, Container, Image, Navbar, Row, Tab, Tabs } from 'react-bootstrap';

export const EarnPage: FC = () => {
    const { handleOffCanvas, setShowOffCanvaModal } = useMainContext();
    const AllTaskData = [
        { isCompleted: false, image: TelegramIcon, type: 'All', title: 'Join Telegram Community', value: '+ 4' },
        { isCompleted: false, image: TwitterIcon, type: 'All', title: 'Join X Community', value: '+ 4' },
        { isCompleted: false, image: TiktokIcon, type: 'All', title: 'Join TikTok Community', value: '+ 4' },
        { isCompleted: false, image: EtronIcon, type: 'All', title: 'Open App 7 Days in a row', value: '+ 4' },
        { isCompleted: false, image: EtronIcon, type: 'All', title: 'Open App 30 days in a row', value: '+ 4' },
        { isCompleted: false, image: EtronIcon, type: 'All', title: 'Open App 90 days in a row', value: '+ 4' },
        { isCompleted: false, image: EtronIcon, type: 'All', title: 'Open App 120 days in a row', value: '+ 4' },
        { isCompleted: false, image: AdsIcon, type: 'All', title: 'Watch 20+ ads daily for 7 days.', value: '+ 4' },
        { isCompleted: false, image: AdsIcon, type: 'All', title: 'Watch 20+ ads daily for 30 days.', value: '+ 4' },
        { isCompleted: false, image: AdsIcon, type: 'All', title: 'Watch 20+ ads daily for 90 days.', value: '+ 4' },
        { isCompleted: false, image: AdsIcon, type: 'All', title: 'Watch 20+ ads daily for 120 days.', value: '+ 4' },
        { isCompleted: false, image: FriendsIcon, type: 'All', title: 'Invite 10 active referrals', value: '+ 4' },
        { isCompleted: false, image: FriendsIcon, type: 'All', title: 'Invite 30 active referrals', value: '+ 4' },
        { isCompleted: false, image: FriendsIcon, type: 'All', title: 'Invite 50 active referrals', value: '+ 4' },
        { isCompleted: false, image: FriendsIcon, type: 'All', title: 'Invite 100 active referrals', value: '+ 4' },
        { isCompleted: false, image: FriendsIcon, type: 'All', title: 'Invite 10 premium referral users', value: '+ 4' },
        { isCompleted: false, image: FriendsIcon, type: 'All', title: 'Invite 20 premium referral users', value: '+ 4' },
        { isCompleted: false, image: FriendsIcon, type: 'All', title: 'Invite 50 premium referral users', value: '+ 4' },
        { isCompleted: false, image: FriendsIcon, type: 'All', title: 'Invite 100 premium referral users', value: '+ 4' },
        { isCompleted: false, image: FriendsIcon, type: 'All', title: 'Invite 200 premium referral users', value: '+ 4' },
        { isCompleted: false, image: GuessIcon, type: 'All', title: 'Guess Daily Words 7 days in a row', value: '+ 4' },
        { isCompleted: false, image: GuessIcon, type: 'All', title: 'Guess Daily Words 30 days in a row', value: '+ 4' },
        { isCompleted: false, image: GuessIcon, type: 'All', title: 'Guess Daily Words 90 days in a row', value: '+ 4' },
        { isCompleted: false, image: SearchIcon, type: 'All', title: 'Guess Combo 7 days in a row', value: '+ 4' },
        { isCompleted: false, image: SearchIcon, type: 'All', title: 'Guess Combo 30 days in a row', value: '+ 4' },
        { isCompleted: false, image: SearchIcon, type: 'All', title: 'Guess Combo 90 days in a row', value: '+ 4' },
        { isCompleted: false, image: SearchIcon, type: 'All', title: 'Guess Combo 120 days in a row', value: '+ 4' },
        { isCompleted: false, image: TonWalletIcon, type: 'All', title: 'Connect Ton Wallet', value: '+ 4' },



    ];

    const taskContent = (
        <div className='task-content'>
            <div className='d-flex align-items-center'>
                <Image src={TelegramBanner} width={80} height={80} className='me-2 rounded-circle ms-2' />
                <div className=''>
                    <div className='d-flex align-items-center mb-2'>
                        <Image src={TonCoinBlueIcon} width={32} height={32} className='me-2 rounded-circle shadow-none' />
                        <span className='ton-value'>280</span>
                    </div>
                    <div className=''>
                        <Badge className='me-2 px-2 py-1'>Social</Badge>
                        <Badge className='me-2 px-2 py-1'>Subscribe</Badge>
                    </div>
                </div>
            </div>
            <hr />
            <div className='title'>Description</div>
            <Card className='description-card py-4 px-3 mb-3'>
                Get this app from appstore and use it a few minutes.
            </Card>
            <Button onClick={() => setShowOffCanvaModal(false)} className='w-100 main-button py-3 rounded-4 fw-bold'>GUESS</Button>
            {/* <div className='title'>Your Task</div>
            <Card className='list-card py-3 px-2'>
                sdfsdfsdf
            </Card> */}
        </div>
    );

    const appContent = (
        <div className=''>
            <div className='task-content overflow-hidden pb-5 mb-5'>
                <div className='d-flex align-items-center'>
                    <Image src={AppIcon1} width={80} height={80} className='me-3 rounded-5 m-2' />
                    <div className=''>
                        <div className='d-flex align-items-center mb-2'>
                            <Image src={TonCoinBlueIcon} width={32} height={32} className='me-2 rounded-circle shadow-none' />
                            <span className='ton-value'>280</span>
                        </div>
                        <div className=''>
                            <Badge className='me-2 px-2 py-1'>Social</Badge>
                            <Badge className='me-2 px-2 py-1'>Subscribe</Badge>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='title'>Description</div>
                <Card className='description-card py-3 px-3 mb-3'>
                    Get this app from appstore and use it a few minutes.
                </Card>
                <div className='title'>Steps</div>
                <Card className='description-card py-3 px-3 mb-3'>
                    1. Get The App<br />
                    2. Open the App<br />
                    3. Use the app for a few minutes
                </Card>
                <div className='title'>Levels</div>
                <Card className='list-card py-2 px-2 mb-1 active'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center '><Image src={TonCoinBlueIcon} width={24} height={24} className='me-2 rouneded-circle shadow-none' /><span className='text-white'>200</span></div>
                        <div className=''>Reach Level 3</div>
                    </div>
                </Card>
                <Card className='list-card py-2 px-2 mb-1'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center '><Image src={TonCoinBlueIcon} width={24} height={24} className='me-2 rouneded-circle shadow-none' /><span className='text-white'>300</span></div>
                        <div className=''>Reach Level 4</div>
                    </div>
                </Card>
                <Card className='list-card py-2 px-2 mb-6'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center '><Image src={TonCoinBlueIcon} width={24} height={24} className='me-2 rouneded-circle shadow-none' /><span className='text-white'>400</span></div>
                        <div className=''>Reach Level 5</div>
                    </div>
                </Card>

            </div>
            <Navbar fixed="bottom" >
                <Container className='w-100'>
                    <Row className='w-100 mx-auto'>
                        <Col xs={12} className=''>
                            <Button onClick={() => setShowOffCanvaModal(false)} className='w-100 main-button py-3 rounded-4 fw-bold'>START</Button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );

    return (
        <Row className='px-0 mx-0'>
            <Col xs={12} sm={12} md={12} className='mx-auto px-0'>
                <div className='EarnPage page'>
                    <section className='main-section pb-3 bottom-0 mx-auto w-100 mt-4 py-5 '>
                        <Container>
                            <Row className='mb-5 pb-5'>
                                <Col xs={12} className=''>
                                    <Tabs
                                        defaultActiveKey="all"
                                        id="uncontrolled-tab-example"
                                        className="mb-3"
                                        fill
                                    >
                                        <Tab eventKey="all" title="All" >
                                            <div className='fs-5 my-2 fw-mediume'>{AllTaskData.length} tasks</div>
                                            <Row>
                                                <Col xs={12}>
                                                    {AllTaskData.map((task, index) => (
                                                        <div onClick={() => { handleOffCanvas({ title: 'Trade on ByBit', childContent: taskContent }) }}><TaskCard key={index} isCompleted={task.isCompleted} image={task.image} type={task.type} value={task.value} title={task.title} /></div>
                                                    ))}
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="apps" title="Apps">
                                            <div className='fs-5 my-2 fw-mediume'>Apps 10</div>
                                            <Row>
                                                <Col xs={12}>
                                                    <div onClick={() => { handleOffCanvas({ title: 'Install Subway Surfers', childContent: appContent }) }}><TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' /></div>
                                                    <div className='position-relative'>
                                                        <div className='comming-soon'>
                                                            <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                            <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                            <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                            <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                            <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                        </div>
                                                        <div className='text-center position-absolute w-100 comming-soon-banner'>
                                                            <Image src={ClockBanner} width={105} height={124} className='mb-2' />
                                                            <div className='title mb-2'>Comming Soon</div>
                                                            <div className='description'>Our Team Work Hard to add new Apps for you,<br /> Keep in Touch with us </div>
                                                        </div>

                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="surveys" title="Surveys">
                                            <div className='position-relative'>
                                                <div className='comming-soon'>
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                </div>
                                                <div className='text-center position-absolute w-100 comming-soon-banner'>
                                                    <Image src={ClockBanner} width={105} height={124} className='mb-2' />
                                                    <div className='title mb-2'>Comming Soon</div>
                                                    <div className='description'>Our Team Work Hard to add new Apps for you,<br /> Keep in Touch with us </div>
                                                </div>

                                            </div>
                                        </Tab>
                                        <Tab eventKey="web3" title="Web 3">
                                            <div className='position-relative'>
                                                <div className='comming-soon'>
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                    <TaskCard isCompleted={false} platform='IOS' image={AppIcon1} type='App' value='4' title='Install Subway Surefers' />
                                                </div>
                                                <div className='text-center position-absolute w-100 comming-soon-banner'>
                                                    <Image src={ClockBanner} width={105} height={124} className='mb-2' />
                                                    <div className='title mb-2'>Comming Soon</div>
                                                    <div className='description'>Our Team Work Hard to add new Apps for you,<br /> Keep in Touch with us </div>
                                                </div>

                                            </div>
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <Footer isActive='earn' />
                </div>
            </Col>
        </Row>
    );
};
