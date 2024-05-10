import "./App.css";

function App(props) {
  return (
    <>
      <h1>App export</h1>
      {props.cars.length > 0 && <h2>Hello</h2>}
    </>
  );
}

export default App;
