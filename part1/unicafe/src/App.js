import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let total = good + neutral + bad;
  let score = 0;

  const increaseGoodByOne = () => {
    setGood(good + 1);
    console.log("clicked good");
  };

  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1);
    console.log("clicked neutral");
  };

  const increaseBadByOne = () => {
    setBad(bad + 1);
    console.log("clicked bad");
  };

  const StatsType = (props) => {
    return (
      <div>
        <p>
          {props.typeOfFeedback} {props.counter}
        </p>
      </div>
    );
  };

  const SumAll = () => {
    return (
      <div>
        <p>All {total}</p>
      </div>
    );
  };

  const Average = () => {
    return (
      <div>
        <p>Average {score}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={increaseGoodByOne}>Good</button>
      <button onClick={increaseNeutralByOne}>Neutral</button>
      <button onClick={increaseBadByOne}>Bad</button>
      <h1>Statistics</h1>
      <StatsType typeOfFeedback={"Good"} counter={good} />
      <StatsType typeOfFeedback={"Neutral"} counter={neutral} />
      <StatsType typeOfFeedback={"Bad"} counter={bad} />
      <SumAll />
      <Average />
    </div>
  );
};

export default App;
