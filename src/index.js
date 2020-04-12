import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElement = document.getElementById("root");

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  H2OState(temp) {
    if (temp <= 0) {
      return "ice";
    } else if (temp >= 100) {
      return "steam";
    } else {
      return "water";
    }
  }

  render() {
    const { temp } = this.state;

    return (
      <div className={this.H2OState(temp)}>
        <h2>
          phase:{this.H2OState(temp)}
          {temp}
        </h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onMinusClick}>-</button>
      </div>
    );
  }

  onPlusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 10 });
  };

  onMinusClick = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 10 });
  };
}

ReactDOM.render(
  <React.StrictMode>
    <H2O />
  </React.StrictMode>,
  rootElement
);
