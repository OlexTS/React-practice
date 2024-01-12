import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="card bg-dark text-white " style={{ width: "600px" }}>
        <div className="card-body">
          <h5 className="card-title text-center fs-1">Counter</h5>
          <p className="card-text  text-center" style={{ fontSize: "80px" }}>
            {count}
          </p>
          <div className="d-flex justify-content-center px-5">
            <button
              className="btn btn-outline-success me-5"
              onClick={handleIncrement}
            >
              <i className="bi bi-plus-circle fs-1"></i>
            </button>
            <button
              className="btn  btn-outline-danger ms-5"
              onClick={handleDecrement}
            >
              <i className="bi bi-dash-circle fs-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   handleIncrement = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };
//   handleDecrement = () => {
//     this.setState((prevState) => ({ count: prevState.count - 1 }));
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div className="position-absolute top-50 start-50 translate-middle">
//         <div className="card bg-dark text-white " style={{ width: "600px" }}>
//           <div className="card-body">
//             <h5 className="card-title text-center fs-1">Counter</h5>
//             <p className="card-text  text-center" style={{ fontSize: "80px" }}>
//               {count}
//             </p>
//             <div className="d-flex justify-content-center px-5">
//               <button
//                 className="btn btn-outline-success me-5"
//                 onClick={this.handleIncrement}
//               >
//                 <i className="bi bi-plus-circle fs-1"></i>
//               </button>
//               <button
//                 className="btn  btn-outline-danger ms-5"
//                 onClick={this.handleDecrement}
//               >
//                 <i className="bi bi-dash-circle fs-1"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Counter;
