const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.num}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0]} num={props.exercises[0]} />
      <Part name={props.parts[1]} num={props.exercises[1]} />
      <Part name={props.parts[2]} num={props.exercises[2]} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header text={course} />
      <Content
        parts={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
