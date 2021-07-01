import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [score, setScore] = useState(0);

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
    </div>
  );
};

export default App;
