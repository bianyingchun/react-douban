import React from "react";

interface IProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<IProps> = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      Clicked: {value} times
      <br />
      <br />
      <button onClick={onIncrement} style={{ marginRight: 20 }}>
        increase
      </button>
      <button onClick={onDecrement}> decrease</button>
    </div>
  );
};

export default Counter;
