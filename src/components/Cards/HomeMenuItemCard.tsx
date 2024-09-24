import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomeMenuItemCard = ({ path, icon, title, action }: { path?: string, icon: string, title: string, action?: () => void }) => {

    return (
        <Link to={path ? path : "#"} className='nav-link mt-3'>
            {action ? (
                <Card className="py-1 px-2 text-center home-menu-item bg-transparent" onClick={action}>
                    <div className='position-relative'>
                        <Image src={icon} width={42} height={42} className='mb-2 positive-relative z-2' />
                        <Image src={icon} width={42} height={42} className='mb-2 blue-image position-absolute z-1' />
                    </div>
                    <div className='fw-semibold text-white text-nowrap'>{title}</div>
                </Card>
            ) : (
                <Card className="py-1 px-2 text-center home-menu-item bg-transparent">
                    <div className='position-relative'>
                    <Image src={icon} width={42} height={42} className='mb-2 position-relative z-2' />
                    <Image src={icon} width={42} height={42} className='mb-2 blue-image position-absolute z-1' />
                    </div>
                    <div className='fw-semibold text-white'>{title}</div>
                </Card>
            )}
        </Link>
    )
}