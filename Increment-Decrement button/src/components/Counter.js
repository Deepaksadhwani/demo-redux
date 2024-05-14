import { useSelector, useDispatch,connect } from "react-redux";
import classes from "./Counter.module.css";
import { Component } from "react";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);

//   const IncrementHandler = () => {
//     dispatch({ type: "incrementBy5" });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "decrementBy5" });
//   };
//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={this.IncrementHandler}>Increment</button>
//         <button onClick={this.decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  IncrementHandler () {
    this.props.increment();
  }
  decrementHandler () {
    this.props.decrement()
  }
  toggleCounterHandler () {}
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.IncrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'incrementBy2'}),
    decrement: () => dispatch({type: 'decrementBy2'})
  }
};

export default  connect(mapStateToProps,mapDispatchToProps) (Counter);
