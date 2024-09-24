import { TonCoinBlueIcon } from "@/assets";
import { TickCircle } from "iconsax-react";
import { Badge, Button, Card, Image } from "react-bootstrap";

export const TaskCard = ({ isCompleted, platform, image, type, title, value }: { isCompleted: boolean, platform?: string, image: string, type: string, title: string, value: string }) => {
    return (
        <Card className="task-card rounded-4 mb-2">
            <Card.Body className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    {type === 'App' && <Image src={image} width={48} height={48} className="rounded-4 me-2" />}
                    {type === 'All' && (
                        <div className={`task-card-image text-center me-3 d-flex align-items-center justify-content-center ${isCompleted === true && `completed`}`}>
                            <Image src={image} width={24} height={24} />
                        </div>
                    )}
                    <div className="">
                        <div className="text-white title mb-1">{title}</div>
                        <div className="d-flex align-items-center value">
                            <Image src={TonCoinBlueIcon} width={20} height={20} className="me-2" />
                            <div className="reward-value fw-semibold me-2 d-flex align-items-center"><span className="me-2">{value}</span> {platform && <Badge>{platform}</Badge>}</div>
                        </div>
                    </div>
                </div>
                <Button className="main-button py-1 px-4">{isCompleted === true ? <TickCircle size="18" color="#FFFFFF" variant="Bulk" /> : 'Start'}</Button>
            </Card.Body>
        </Card>
    )
}