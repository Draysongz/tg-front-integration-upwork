import { FC } from 'react';
import { Card, Image } from 'react-bootstrap';
import { TonCoinBlueIcon } from '@/assets';

interface ListCardProps {
    title: string;
    reward: string;
    description: string;
    icon: string; // Path to the image or imported image
}

export const ListCard: FC<ListCardProps> = ({ title, reward, description, icon }) => {
    return (
        <Card className="list-card rounded-4">
            <Card.Body>
                <div className="d-flex align-items-center">
                    <div className="list-image position-relative">
                        <Image src={icon} width={42} height={42} className="me-3 position-relative z-2" />
                        <Image src={icon} width={42} height={42} className="me-3 blue-image position-absolute z-1" />
                    </div>
                    <div className="">
                        {/* Dynamic title */}
                        <div className="text-white fs-6 mb-1">{title}</div>
                        <div className="d-flex align-items-center">
                            <Image src={TonCoinBlueIcon} width={24} height={24} className="me-2" />
                            {/* Dynamic reward */}
                            <span className="reward-value fw-semibold me-2">{reward} </span>
                            {/* Dynamic description */}
                            <span className="fw-semibold">{description}</span>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};