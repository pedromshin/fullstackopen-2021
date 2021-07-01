import React, { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>
        {props.GoodFeedback} {props.GoodCounter}
      </p>
      <p>
        {props.NeutralFeedback} {props.NeutralCounter}
      </p>
      <p>
        {props.BadFeedback} {props.BadCounter}
      </p>
      <p>
        {props.textAll} {props.sumAll}
      </p>
      <p>Average {props.average}</p>
      <p>Positive {props.percentage}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [score, setScore] = useState(0);
  let total = good + neutral + bad;
  let averageCalc = score / total;

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

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={increaseGoodByOne}>Good</button>
      <button onClick={increaseNeutralByOne}>Neutral</button>
      <button onClick={increaseBadByOne}>Bad</button>
      <Statistics
        GoodFeedback={"Good"}
        GoodCounter={good}
        NeutralFeedback={"Neutral"}
        NeutralCounter={neutral}
        BadFeedback={"Bad"}
        BadCounter={bad}
        textAll={"All"}
        sumAll={total}
        average={averageCalc}
        percentage={(good * 100) / total}
      />
    </div>
  );
};

export default App;
