import React, { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.clickType}>{props.text}</button>
    </div>
  );
};

const Statistic = (props) => {
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
        <table>
          <tr>
            <td>
              <Statistic text="Good" />
            </td>
            <td>
              <Statistic value={props.GoodCounter} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="Neutral" />
            </td>
            <td>
              <Statistic value={props.NeutralCounter} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="Bad" />
            </td>
            <td>
              <Statistic value={props.BadCounter} />
            </td>
          </tr>

          <tr>
            <td>
              <Statistic text="All" />
            </td>
            <td>
              <Statistic value={props.sumAll} />
            </td>
          </tr>
          <tr>
            <td>
              <Statistic text="Average" />
            </td>
            <td>
              <Statistic value={props.average} />
            </td>
          </tr>

          <tr>
            <td>
              <Statistic text="Positive" />
            </td>
            <td>
              <Statistic value={props.percentage} />
            </td>
          </tr>
        </table>
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
