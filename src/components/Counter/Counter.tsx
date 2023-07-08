import "./Counter.css";

import { Component } from "react";

interface Props {
  initialValue: number;
}

interface State {
  value: number;
}

// //  використання компонента-класа
class Counter extends Component<Props, State> {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <h1>Counter class component</h1>
        <div className="Counter">
          <span className="Counter__value">{value}</span>
          <div className="Counter__controls">
            <button type="button" onClick={this.handleDecrement}>
              -1
            </button>
            <button type="button" onClick={this.handleIncrement}>
              +1
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
