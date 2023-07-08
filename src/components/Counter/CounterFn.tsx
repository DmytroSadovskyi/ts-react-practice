import "./Counter.css";
import { useState } from "react";

//  той самий функціонал, тільки через хуки

interface Props {
  initialValue?: number;
  step?: number;
}

const CounterFn = ({ initialValue = 0, step = 1 }: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    setValue((value) => value + step);
  };

  const handleDecrement = () => {
    setValue((value) => value - step);
  };

  return (
    <>
      <h1>Counter functional component!</h1>
      <div className="Counter">
        <span className="Counter__value">{value}</span>

        <div className="Counter__controls">
          <button type="button" onClick={handleDecrement}>
            -1
          </button>

          <button type="button" onClick={handleIncrement}>
            +1
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterFn;
