import React from "react";

// import withRender from "./hocs/withRender";

import "./style.css";

// const items = [
//   { label: "ETH", balance: "2.08" },
//   { label: "ETC", balance: "18.08" },
//   { label: "BTC", balance: "3.2" }
// ];

class Autocomplete extends React.Component {
  static defaultProps = {
    items: [],
    onChange: () => {},
    getItems: () => {}
  };

  state = {
    value: "",
    opened: false
  };

  onSelectItem = item => event => {
    this.setState({ value: item.label, opened: false });
  };

  onChange = event => {
    this.setState({ value: event.target.value, opened: true });
  };

  getItems = inputValue => {
    let count = 0;
    const items = this.props.items;

    return items.filter(item => {
      const keep =
        (!inputValue ||
          item.label.toLowerCase().includes(inputValue.toLowerCase())) &&
        count < 5;

      if (keep) {
        count += 1;
      }

      return keep;
    });
  };

  renderAutocompleteResult = inputValue =>
    this.state.opened && this.state.value !== "" ? (
      <div id="autocomplete_result">
        {this.getItems(inputValue).map((item, index) => (
          <p key={index} onClick={this.onSelectItem(item)}>
            {item.label} балланс ({item.balance})
          </p>
        ))}
      </div>
    ) : null;

  render() {
    return (
      <div className="mui-autocomplete">
        <input
          id="autocomplete"
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
        {this.renderAutocompleteResult(this.state.value)}
      </div>
    );
  }
}

export default Autocomplete;
