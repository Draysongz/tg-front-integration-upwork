import { TonCoinBlueIcon, TonCoinWhiteIcon } from "@/assets";
import React, { useRef, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const FreeSpinData = [
    { value: '0.4', icon: TonCoinWhiteIcon },
    { value: '5.4', icon: TonCoinBlueIcon },
    { value: '0.45', icon: TonCoinWhiteIcon },
    { value: '1.0', icon: TonCoinBlueIcon },
    { value: '0.4', icon: TonCoinWhiteIcon },
    { value: '2.5', icon: TonCoinBlueIcon },
    { value: '0.4', icon: TonCoinWhiteIcon },
    { value: '5.4', icon: TonCoinBlueIcon },
    { value: '0.45', icon: TonCoinWhiteIcon },
    { value: '1.0', icon: TonCoinBlueIcon },
    { value: '0.4', icon: TonCoinWhiteIcon },
    { value: '2.5', icon: TonCoinBlueIcon },
];


const SpinWheel: React.FunctionComponent = () => {
    const wheelRef = useRef<HTMLUListElement>(null);
    const [previousEndDegree, setPreviousEndDegree] = useState(0);
    const [animation, setAnimation] = useState<Animation | null>(null);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleSpin = () => {
        if (animation) {
            animation.cancel(); // Reset the animation if it already exists
        }

        const randomAdditionalDegrees = Math.random() * 360 + 1800;
        const newEndDegree = previousEndDegree + randomAdditionalDegrees;
        const numberOfSegments = FreeSpinData.length;
        const anglePerSegment = 360 / numberOfSegments;

        const wheel = wheelRef.current;
        if (wheel) {
            const newAnimation = wheel.animate(
                [
                    { transform: `rotate(${previousEndDegree}deg)` },
                    { transform: `rotate(${newEndDegree}deg)` }
                ],
                {
                    duration: 4000,
                    direction: 'normal',
                    easing: 'cubic-bezier(0.440, -0.205, 0.000, 1.130)',
                    fill: 'forwards',
                    iterations: 1
                }
            );

            newAnimation.onfinish = () => {
                // Calculate the final rotation
                const finalDegree = newEndDegree % 360;
                const selectedSegmentIndex = Math.floor((360 - finalDegree) / anglePerSegment) % numberOfSegments;
                const selectedSegment = FreeSpinData[selectedSegmentIndex];

                // Set the selected value
                setSelectedValue(selectedSegment.value);
                console.log("Selected Value:", selectedSegment.value);
            };
            setAnimation(newAnimation);
            setPreviousEndDegree(newEndDegree);
        }
    };

    return (
        <>
            <fieldset className="ui-wheel-of-fortune">
                <ul ref={wheelRef}>
                    {FreeSpinData.map((item, i) => (
                        <li>
                            <div
                                className="wheel-item"
                                key={i}

                            >
                                <div className="item-content">
                                    <div className="item-value" style={{ transform: 'rotate(-270deg)' }}>{item.value}</div>
                                    <div><img src={item.icon} width="45" height={45} style={{ transform: 'rotate(-270deg)' }} alt={`Icon for ${item.value}`} /></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <span className="d-flex align-items-center justify-content-center"><Image src={TonCoinBlueIcon} width={50} height={50} /></span>
                <span className="dark-line"></span>
            </fieldset>
            <Container className="position-absolute top-50">
                <Row>
                    <Col xs={12} className='text-center'>
                        <div className='claim-value mb-2'>Let's Spin</div>
                        <p className='mb-5 fs-6'>Spin {selectedValue} To Win Real Easy Money</p>
                        <Button onClick={handleSpin} className='w-100 main-button py-3 rounded-4 fw-bold text-uppercase'>Spin for 50 TON</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SpinWheel;
