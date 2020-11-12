import React from "react";

const Break = (props) => {
    const increaseCounter = () => {
      if (props.interval === 60) {
        return;
      }

      props.onIncreaseBreak();
    };

    const decreaseCounter = () => {
      if (props.interval === 1) {
        return;
      }

      props.onDecreaseBreak();
    };

    return (
      <div id="break">
        <div id="break-label">Break length</div>
        <button id="break-decrement" onClick={decreaseCounter()}>
          -
        </button>
        <div id="break-length">{props.interval}</div>
        {/* Default 5 min */}
        <button id="break-increment" onClick={increaseCounter()}>
          +
        </button>
      </div>
    );
  };

  export default Break;