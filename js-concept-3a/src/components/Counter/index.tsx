import React, { JSX } from "react";
import styles from "./Counter.module.css";

type CounterProps = {
  count?: number;
};

const Counter: React.FC<CounterProps> = ({ count = 0 }): JSX.Element => {
  const [currentCount, setCurrentCount] = React.useState<number>(count);

  const handleIncrement = (): void => {
    setCurrentCount(currentCount + 1);
  };

  const handleDecrement = (): void => {
    if (currentCount === 0) {
      return;
    }

    setCurrentCount(currentCount - 1);
  };

  return (
    <div className={styles.outerCircle}>
      <button className={styles.decrement} onClick={() => handleDecrement()}>
        -
      </button>
      <div className={styles.count}>{currentCount}</div>
      <button className={styles.increment} onClick={() => handleIncrement()}>
        +
      </button>
    </div>
  );
};

export default Counter;
