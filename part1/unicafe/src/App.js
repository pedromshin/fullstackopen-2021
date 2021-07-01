import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [score, setScore] = useState(0);
  let total = good + neutral + bad;
  const average = score / total;

  const increaseGoodByOne = () => {
    setGood(good + 1);
    setScore(score + 1);
    console.log("clicked good");
  };

  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1);
    console.log("clicked neutral");
  };

  const increaseBadByOne = () => {
    setBad(bad + 1);
    setScore(score - 1);
    console.log("clicked bad");
  };

  const StatsType = (props) => {
    return (
      <p>
        {props.typeOfFeedback} {props.counter}
      </p>
    );
  };

  const SumAll = (props) => {
    return (
      <div>
        <p>All {props.total}</p>
      </div>
    );
  };

  const Average = (props) => {
    return (
      <div>
        <p>Average {props.average}</p>
      </div>
    );
  };

  const Percentage = (props) => {
    return (
      <div>
        <p>Percentage {(props.good * 100) / props.total}%</p>
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
      <SumAll total={total} />
      <Average average={average} />
      <Percentage good={good} total={total} />
    </div>
  );
};

export default App;
