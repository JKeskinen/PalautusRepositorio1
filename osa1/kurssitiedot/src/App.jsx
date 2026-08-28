//määritellään Header, Content ja Total komponentit
//Header komponentti, joka ottaa vastaan propsin ja renderöi kurssin nimen
//Content komponentti, joka ottaa vastaan propsin ja renderöi osan nimen ja tehtävien määrän
//Total komponentti, joka ottaa vastaan propsin ja renderöi tehtävien kokonaismäärän

const Header = (props) => {
console.log(props)
return <h1>{props.course}</h1>
}

const Part = ({part, exercises}) =>(
  <p>
    {part} {exercises}
  </p>
)



// Content komponentti, joka ottaa vastaan propsin ja renderöi osan nimen ja tehtävien määrän
const Content = (props) => {
  console.log("Content", props)
  return (
  <div>
    <Part part={props.part1.name} exercises={props.part1.exercises} />
    <Part part={props.part2.name} exercises={props.part2.exercises} />
    <Part part={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

// Total komponentti, joka ottaa vastaan propsin ja renderöi tehtävien kokonaismäärän
const Total = (props) => {
  console.log(props)
  return <p>Number of exercises: {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
}





//App pääkomponentti t1.3 siirrytään käyttämään olioita
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
    

  // return, renderöi Header, Content ja Total komponentit.
  return (
    <div>
      <Header course={course} />
      <Content 
      part1={part1} 
      part2={part2} 
      part3={part3} />
      <Total 
      part1={part1} 
      part2={part2} 
      part3={part3} />
    </div>
  )

}
export default App