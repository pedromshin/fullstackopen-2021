import React, { useState } from "react";

const PageText = ({ selectedAnecdote, voteCounter, mostVoted }) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{selectedAnecdote}</p>
      <p>Has {voteCounter} votes</p>
      <h1>Anecdote with most votes</h1>
      <p>{mostVoted}</p>
    </div>
  );
};

const Button = ({ buttonFunction, buttonText }) => {
  return <button onClick={buttonFunction}>{buttonText}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [voteArr, setVoteNumArr] = useState(
    new Array(anecdotes.length).fill(0)
  );

  const HandleNext = (p) => {
    p = setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const HandleVote = () => {
    const newVoteArr = [...voteArr];
    newVoteArr[selected] += 1;
    setVoteNumArr(newVoteArr);
    console.log(voteArr);
  };

  const mostVotedIndex = voteArr.indexOf(Math.max(...voteArr));

  return (
    <div>
      <PageText
        selectedAnecdote={anecdotes[selected]}
        voteCounter={voteArr[selected]}
        mostVoted={anecdotes[mostVotedIndex]}
      />
      <Button buttonFunction={HandleNext} buttonText={"Next anecdote"} />
      <Button buttonFunction={HandleVote} buttonText={"Vote"} />
    </div>
  );
};

export default App;
