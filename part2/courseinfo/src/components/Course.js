import React from 'react'

const Course = (props) => {

    const Header = (props) => {
      return(
        <h1>{props.header}</h1>
      )
    }
    const Part = (props) => {
      return(
        <div>
          {props.parts.map(course=> 
            <p key={course.id}>
          {course.name} {course.exercises}
        </p>)}
        </div>
      )
    }
   
    const Total = (props) => {
      return(
      <h3>Total of {props.parts.map(course=>course.exercises).reduce( (a, b) => a + b)} exercieses</h3>
      )
    }

    const Content = (props) => {
      return (
        <div>
          <Header header={props.course.name}/>
          <Part parts={props.course.parts}/>
          <Total parts={props.course.parts}/>
        </div>
      ) 
    }

    return (
        <div>
          {props.courses.map(course =>
            <Content 
            key={course.id}
            course={course}
            />          
            )}
        </div>
    )
}
export default Course