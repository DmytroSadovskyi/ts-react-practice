import styles from "./ColorPicker.module.css";
import { useState } from "react";

type Option = {
  label: string;
  color: string;
};

interface Props {
  options: Option[];
}

const ColorPicker = ({ options }: Props) => {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = (index: number) => {
    return index === activeOptionIdx ? styles.activeOption : styles.option;
  };

  const { label } = options[activeOptionIdx];
  const { color } = options[activeOptionIdx];
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>Color Picker</h2>
        <p>
          Chosen color:<span style={{ color: color }}> {label}</span>
        </p>

        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              aria-label={label}
              className={makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => {
                setActiveOptionIdx(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
