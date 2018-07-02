import React, { Component } from "react";

export default class QuantitySelector extends Component {
  increment() {
    this.setState(prevState => {
      value: ++prevState.value;
    });
  }

  decrement() {
    this.setState(prevState => {
      value: prevState.value > 0 ? --prevState.value : 0;
    });
  }

  render() {
    this.state = { value: 1 };
    return (
      <div className="quantity-selector landmark">
        <span>quantity</span>
        <div className="quantity-input-wrapper">
          <button
            className="quantity-input--left"
            onClick={this.decrement.bind(this)}
          >
            &mdash;
          </button>
          <input
            className="quantity-input"
            type="text"
            value={this.state.value}
            readOnly
          />
          <button
            className="quantity-input--right"
            onClick={this.increment.bind(this)}
          >
            &#xff0b;
          </button>
        </div>
      </div>
    );
  }
}
