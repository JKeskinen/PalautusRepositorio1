//määritellään Header, Content ja Total komponentit
//Header komponentti, joka ottaa vastaan propsin ja renderöi kurssin nimen
//Content komponentti, joka ottaa vastaan propsin ja renderöi osan nimen ja tehtävien määrän
//Total komponentti, joka ottaa vastaan propsin ja renderöi tehtävien kokonaismäärän

const Header = (props) => {
console.log("Header", props)
return <h1>{props.course}</h1>
}

const Part = ({part}) =>(
  <p>
    {part.name} {part.exercises}
  </p>
)



// Content komponentti, joka ottaa vastaan propsin ja renderöi osan nimen ja tehtävien määrän
const Content = (props) => {
  console.log("Content", props)
  return (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
    </div>
  )
}

// Total komponentti, joka ottaa vastaan propsin ja renderöi tehtävien kokonaismäärän
const Total = (props) => {
  console.log("Total", props)

  let sum = 0
  for (let index = 0; index < props.parts.length; index++) {
    sum += props.parts[index].exercises
  }
  return <p>Number of exercises: {sum}</p>
}





//App pääkomponentti t1.4 listana
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
    

  // return, renderöi Header, Content ja Total komponentit.
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )

}
export default App