import { useMainContext } from "@/context/MainContext";
import { Container, Offcanvas } from "react-bootstrap"

export const OffCanvasModal = () => {    
    const {showOffCanvaModal, offCanvasTitle, setShowOffCanvaModal, activeChild, isCombo, isWord} = useMainContext();
    return (
        <Offcanvas show={showOffCanvaModal} placement='bottom' className={`${isCombo === true && `combo-offcanvas`} ${isWord === true && `word-offcanvas`}`} onHide={() => setShowOffCanvaModal(false)}>
            <Container className="px-4">
                <Offcanvas.Header closeButton className="px-0 bg-transparent">
                    <Offcanvas.Title>{offCanvasTitle}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="border-top pb-3 px-0">
                    {activeChild}
                </Offcanvas.Body>
            </Container>
        </Offcanvas>
    )
}



