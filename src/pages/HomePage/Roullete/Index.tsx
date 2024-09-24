import { Footer } from '@/components/layout/Footer';
import SpinWheel from '@/components/spin/spin';
import { type FC } from 'react';
import { Col, Row } from 'react-bootstrap';

export const RoulletePage: FC = () => {
    return (
        <Row className='px-0 mx-0'>
            <Col xs={12} sm={12} md={12} className='mx-auto px-0'>
                <div className='RoulletePage page'>
                    <section className='main-section pb-3 bottom-0 mx-auto w-100 mt-4 py-5 overflow-hidden position-relative'>
                        <SpinWheel />
                    </section>
                    <Footer isActive='home'/>
                </div>
            </Col>
        </Row>
    );
};
