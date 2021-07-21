import React from 'react'
import Note from './components/Note'


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

  const Course = ({header}) => {
    return (
      <div>
        <h1>{header}</h1>
        <ul>
          {course.parts.map(partMap => 
            <li key={partMap.id}>
              {partMap.name} {partMap.exercises}
            </li> 
            )
          }
        </ul>
      </div>
    )
  }

  return <Course header={course.title} />
}

export default App