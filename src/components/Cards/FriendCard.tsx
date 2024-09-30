import { AvatarImage, TonCoinBlueIcon } from "@/assets";
import { FC } from "react";
import { Card, Image } from "react-bootstrap";

// Define the type for the ref object
type Refer = {
    first_name: string;
    last_name: string;
    username: string;
    balance: number;
    country: string;
    dailyCheckIn: {
        streak: number;
        lastCheckInDate: string;
        lastClaimDate: string | null;
    };
    referralCode: string;
    totalReferralEarnings: number;
    is_premium: boolean;
    language_code: string;
    telegramId: string;
    createdAt: string;
    lastLogin: string;
    ipAddress: string;
    sessionCount: number;
    tapCount: number;
    tasksCompleted: Array<any>;
};

// FC for the FriendCard component
export const FriendCard: FC<{ refer: Refer }> = ({ refer }) => {

    return (
        <Card className="friend-card rounded-4">
            <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        {/* Avatar image */}
                        <Image src={AvatarImage} width={32} height={32} className="me-2" />
                        {/* Display username */}
                        <div className="text-white">{refer && refer.username}</div>
                    </div>
                    <div className="d-flex align-items-center">
                        {/* TON coin icon */}
                        <Image src={TonCoinBlueIcon} width={24} height={24} className="me-2" />
                        {/* Display reward value */}
                        <span className="reward-value fs-6 text-white fw-semibold me-2">+5,000</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};
