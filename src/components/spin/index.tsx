import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import LayoutImage from '../../assets/images/layout.png';
import MarkImage from '../../assets/images/mark.png';


interface WheelItem {
  value: string;
  icon: string;
}

interface WheelProps {
  items: WheelItem[];
  onSelectItem?: (selectedItem: number) => void;
}

interface WheelCSSProperties extends React.CSSProperties {
  '--nb-item': number;
  '--selected-item': string | null;
}

const FreeSpinWheel: React.FunctionComponent<WheelProps> = ({ items, onSelectItem }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const selectItem = () => {
    // setIsPlay(true)
    if (selectedItem === null) {

      // const randomIndex = Math.floor(Math.random() * items.length);
      // const randomIndex = 2;
      setSelectedItem(2);

      if (onSelectItem) {
        onSelectItem(2);
      }
      setIsPlay(false)
    } else {
      setSelectedItem(2);
      setIsPlay(false)
    }
  };

  useEffect(() => {
    if (selectItem !== null) {
      setSelectedItem(null);
    }
  }, [isPlay])


  const wheelVars: WheelCSSProperties = {
    '--nb-item': items.length,
    '--selected-item': selectedItem !== null ? selectedItem.toString() : null,
  };

  const spinning = selectedItem !== null ? "spinning" : "";

  return (
    <div className="wheel-container position-relative z-3">
      <div
        className={`spin-wheel ${spinning}`}
        style={wheelVars}
        onClick={selectItem}
      >
        {items.map((item, index) => (
          <div
            className="wheel-item"
            key={index}
            style={{ '--item-nb': index } as React.CSSProperties}
          >
            <div className="item-content">
              <img src={item.icon} width="25" style={{ transform:'rotate(270deg)' }} alt={`Icon for ${item.value}`} />
              <span style={{transform:'rotate(270deg)', marginLeft: '0.5rem', marginRight:'0.75rem' }}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      <Image
        className="layout"
        src={LayoutImage}
        onClick={selectItem}
        width="420"
        alt="Layout"
      />
      <Image
        className="mark-pin"
        src={MarkImage}
        width="50"
        alt="Layout"
      />
    </div>
  );
};

export default FreeSpinWheel;
