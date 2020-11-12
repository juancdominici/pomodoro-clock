import React from "react";

const Session = (props) => {
    const decreaseCounter = () => {
      if (props.interval === 1) {
        return;
      };
      props.onDecreaseSession();
    };

    const increaseCounter = () => {
      if (props.interval === 60) {
        return;
      };
      props.onIncreaseSession();
    };

    return (
      <div id="session">
        <div id="session-label">Session length</div>
        <button id="session-decrement" onClick={decreaseCounter()}>
          -
        </button>
        <div id="session-length">{props.interval}</div>
        {/* Default 25 min */}
        <button id="session-increment" onClick={increaseCounter()}>
          +
        </button>
      </div>
    );
  };

  export default Session;