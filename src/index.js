import React from "react";
import ReactDOM from "react-dom/client";
import New from "./New";
import App from "./App";

// function Mine(props) {
//   return <h1>Good Morning!! i'm props {props.color}</h1>;
// }

// function Main() {
//   return (
//     <>
//       <p>Hello, Nena</p>
//       <Mine color="red" />
//     </>
//   );
// }

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       color: "yellow",
//       type: "audi",
//     };
//   }
//   render() {
//     return (
//       <>
//         <h1>Afternoon</h1>
//         <h2>{this.state.type}</h2>
//         <h3>{this.props.color}</h3>
//       </>
//     );
//   }
// }

// class Vehicle extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       type: "audi",
//       color: "yellow",
//       model: "2020",
//       price: "45lakh",
//     };
//   }
//   changecolor = () => {
//     this.setState({ color: "red", type: "swift" });
//   };
//   render() {
//     return (
//       <>
//         <h2>
//           Vehicle Type is "{this.state.type}" , color is "{this.state.color}",
//           model "{this.state.type}" and price is "{this.state.price}".
//         </h2>
//         <button type="button" onClick={this.changecolor}>
//           Change Car Color & type
//         </button>
//       </>
//     );
//   }
// }


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Main />);
// const car = [];
const car = ["bmw", "audi"];
// root.render(<App cars={car} />);
root.render(<New />);
// root.render(<Garage/>)
// root.render(<Car color="red" />);
// root.render(<Vehicle />);
