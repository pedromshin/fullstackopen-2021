import React, { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.clickType}>{props.text}</button>
    </div>
  );
};

const StatsFeed = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.value}
      </p>
    </div>
  );
};

const Statistics = (props) => {
  if (props.total > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <StatsFeed text="Good" value={props.GoodCounter} />
        <StatsFeed text="Neutral" value={props.NeutralCounter} />
        <StatsFeed text="Bad" value={props.BadCounter} />
        <StatsFeed text="All" value={props.sumAll} />
        <StatsFeed text="Average" value={props.average} />
        <StatsFeed text="Positive" value={props.percentage} />
      </div>
    );
  } else {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    );
  }
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
  };

  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1);
  };

  const increaseBadByOne = () => {
    setBad(bad + 1);
    setScore(score - 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickType={increaseGoodByOne} text={"Good"} />
      <Button clickType={increaseNeutralByOne} text={"Neutral"} />
      <Button clickType={increaseBadByOne} text={"Bad"} />
      <Statistics
        total={total}
        GoodCounter={good}
        NeutralCounter={neutral}
        BadCounter={bad}
        sumAll={total}
        average={averageCalc}
        percentage={(good * 100) / total}
      />
    </div>
  );
};

export default App;
