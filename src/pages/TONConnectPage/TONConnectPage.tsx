import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import type { FC } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Footer } from '@/components/layout/Footer';
import { LockBanner } from '@/assets';

export const TONConnectPage: FC = () => {
  const wallet = useTonWallet();
  if (!wallet) {
    return (
      <Row className='px-0 mx-0'>
        <Col xs={12} sm={12} md={12} className='mx-auto px-0'>
          <div className='WalletPage page'>
            <section className='main-section disconnected pb-3 bottom-0 mx-auto w-100 mt-4 py-5 py-5 overflow-y-auto'>
              <Container className='h-100 d-flex align-items-center'>
                <Row className='mb-5 pb-5'>
                  <Col xs={12} className='text-center'>
                    <div className='wallet-connect-banner'>
                      <Image src={LockBanner} width={105} height={124} className='mb-2' />
                      <div className='title mb-2'>Levelling Up</div>
                      <p className='description px-1'>Connect you wallet to access upcoming crypto features. Our team is working hard to bring them to you soon!</p>
                      <TonConnectButton className='ton-connect-page__button w-100 main-button py-2 rounded-4 fw-bold text-uppercase' />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <Footer isActive='wallet'/>
          </div>
        </Col>
      </Row>
    );
  }

  return (
    <Row className='px-0 mx-0'>
      <Col xs={12} sm={12} md={12} className='mx-auto px-0'>
        <div className='WalletPage page'>
          <section className='main-section pb-3 bottom-0 mx-auto w-100 mt-4 py-5 py-5 overflow-y-auto'>
            <Container className='h-100 d-flex align-items-center'>
              <Row className='mb-5 pb-5'>
                <Col xs={12} className='text-center'>
                  <div className='wallet-connect-banner'>
                    <Image src={LockBanner} width={105} height={124} className='mb-2' />
                    <div className='title mb-2'>Levelling Up</div>
                    <p className='description px-1'>Connect you wallet to access upcoming crypto features. Our team is working hard to bring them to you soon!</p>
                    <TonConnectButton className='ton-connect-page__button w-100 main-button py-2 rounded-4 fw-bold text-uppercase' />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer isActive='wallet'/>
        </div>
      </Col>
    </Row>
  );
};
