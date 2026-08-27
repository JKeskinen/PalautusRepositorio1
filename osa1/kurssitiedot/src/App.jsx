const Header = (props) => {
console.log(props)
return <h1>{props.course}</h1>
}


const Content = (props) => {
  console.log(props)
  return <p>{props.part} {props.exercises} </p>
}


const Total = (props) => {
  console.log(props)
  return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

const Part = (props) => {
  console.log(props)
  return <p>{props.part} {props.exercises}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>

  )
}
export default App