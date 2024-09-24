import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface MainContextProps {
    showOffCanvaModal: boolean;
    isCombo: boolean;
    isWord: boolean;
    setShowOffCanvaModal: Dispatch<SetStateAction<boolean>>;
    setIsCombo: Dispatch<SetStateAction<boolean>>;
    setIsWord: Dispatch<SetStateAction<boolean>>;
    handleOffCanvas: Function;
    activeChild: React.ReactNode;
    offCanvasTitle: string;
}

const MainContext = createContext<MainContextProps | undefined>(undefined);

export const MaincontextProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const [showOffCanvaModal, setShowOffCanvaModal] = useState(false);
    const [activeChild, setActiveChild] = useState<React.ReactNode>(null);
    const [offCanvasTitle, setSetOffCanvasTitle] = useState<string>('');
    const [isCombo, setIsCombo] = useState<boolean>(false);
    const [isWord, setIsWord] = useState<boolean>(false);
    const handleOffCanvas = ({ title, childContent }: { title: string, childContent: React.ReactNode }) => {
        setActiveChild(childContent);
        setSetOffCanvasTitle(title);
        setShowOffCanvaModal(true);
        if(title === 'Combo') {
            setIsCombo(true);
        }
        else {
            setIsCombo(false);
        }
        if(title === 'Word of the Day') {
            setIsWord(true);
        }
        else {
            setIsWord(false);
        }
    }
    const contextValue: MainContextProps = {
        showOffCanvaModal,
        isCombo,
        isWord,
        setShowOffCanvaModal,
        handleOffCanvas,
        setIsWord,
        activeChild,
        offCanvasTitle,
        setIsCombo
    }
    return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
}

export const useMainContext = () => {
    const context = useContext(MainContext);

    if (!context) {
        throw new Error("Maincontext must be used within a MainContextProvider");
    }

    return context;
}