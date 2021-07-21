import React from 'react'


const Parts = (props) => {
  return (
    <div>
      {props.content}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    title: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  const exArr = course.parts.map(exNum => exNum.exercises) 
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const exSum = exArr.reduce(reducer)
  const content = course.parts.map(partMap => 
    <p key={partMap.id}>
      {partMap.name} {partMap.exercises}
    </p> 
    )
  

  const Course = ({header}) => {
    return (
      <div>
        <h1>{header}</h1>
        <Parts content={content}/>
        <p>total of {exSum} exercises</p>
      </div>
    )
  }

  return <Course header={course.title} />
}

export default App