import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
    // this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentWillUnmount() {
    console.log("component unrendered");
  }

  componentDidUpdate() {
    console.log("I'm just updated");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

// component는 html을 반환하는 함수야
// jsx는 js 안의 html입니다.
// setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않을꺼야 in class component
// = setState를 호출할 때마다, render function이 호출될거야~
