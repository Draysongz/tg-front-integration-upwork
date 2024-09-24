import { AvatarImage, TonCoinBlueIcon } from "@/assets";
import { FC } from "react";
import { Card, Image } from "react-bootstrap";

export const FriendCard: FC = () => {
    return (
        <Card className="friend-card rounded-4">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Image src={AvatarImage} width={32} height={32} className="me-2" />
                        <div className="text-white">Invite a Friend</div>
                    </div>
                        <div className="d-flex align-items-center">
                            <Image src={TonCoinBlueIcon} width={24} height={24} className="me-2" />
                            <span className="reward-value fs-6 text-white fw-semibold me-2">+5,000</span>
                        </div>
                </div>
            </Card.Body>
        </Card>
    )
}