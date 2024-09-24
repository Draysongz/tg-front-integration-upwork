import { SplashBanner, TelegramIcon, TiktokIcon, } from '@/assets';
import { useEffect, useState, type FC } from 'react';
import { Card, Col, Image, Row, } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

export const SplashPage: FC = () => {
    const navigate = useNavigate();
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const duration = 4500; // total time to reach 100 in milliseconds
        const steps = 100; // total steps to reach 100
        const interval = duration / steps; // interval time per step

        let currentNumber = 0;

        const incrementNumber = () => {
            if (currentNumber < 100) {
                currentNumber += 1;
                setNumber(currentNumber);
            }
        };

        const timer = setInterval(incrementNumber, interval);

        // Cleanup the interval when the component unmounts or the effect is rerun
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 5000)
    }, [])

    return (
        <Row className='px-0 mx-0'>
            <Col xs={12} sm={12} md={12} className='mx-auto px-0'>
                <div className='SplashPage page'>
                    <section className='main-section pb-3 bottom-0 mx-auto w-100 mt-4 py-5 py-5 overflow-y-auto'>
                        <div className='position-relative'>
                            <div className='splash-title text-center text-white'>Earn Ton</div>
                            <div className='position-absolute w-100 text-center top-0 pt-3'>
                                <Image src={SplashBanner} width="55%" />
                            </div>
                        </div>
                        <div className='position-relative w-100 splash-progress'>
                            <div style={{ width: 80, height: 80 }} className='mx-auto mb-3'>
                                <CircularProgressbar value={number} text={`${number}%`} />
                            </div>
                            <div className='text-center loading-title text-white'>Loading</div>
                        </div>
                        <div className='position-absolute bottom-0 w-100 pb-3 px-3 text-center w-100'>
                            <div className='bottom-subtitle mb-3 text-white'>Stay tuned</div>
                            <div className='bottom-title mb-3 text-white'>More info in official channels</div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <Card className='d-flex align-items-center justify-content-center mx-2'>
                                    <Image src={TelegramIcon} width={24} height={24} className='' />
                                </Card>
                                <Card className='d-flex align-items-center justify-content-center mx-2'>
                                    <Image src={TiktokIcon} width={24} height={24} className='' />
                                </Card>
                            </div>
                        </div>
                    </section>
                </div>
            </Col>
        </Row>
    );
};
