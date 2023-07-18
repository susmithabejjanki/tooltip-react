import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      direction: "top",
      content: "Tooltip Content"
    };
  }

  handleContentInput = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      this.setState({
        content: e.target.value
      });
    } else {
      this.setState({
        content: "Tooltip Content"
      });
    }
  };

  handleDirectionInput = (e) => {
    console.log(e.target.value);
    this.setState({
      direction: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>
            <i>Tooltip</i>
          </h1>
        </div>

        <Tooltip content={this.state.content} direction={this.state.direction}>
          {/* calling button component */}
          <Button />
        </Tooltip>
      </div>
    );
  }
}
