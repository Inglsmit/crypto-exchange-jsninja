import React from "react";

import Autocomplite from "../components/Autocomplete/index";

export default class DemoAutocompliteSimple extends React.Component {
  state = {
    value: null,
    items: this.props.items
  };

  onChoseItem = item => {
    this.setState({
      value: item
    });
  };

  getItems = text => {
    this.setState({
      items: this.props.items
    });
  };

  render() {
    const { items, value } = this.state;
    return (
      <Autocomplite
        value={value}
        items={items}
        getItems={this.getItems}
        onChange={this.onChoseItem}
      />
    );
  }
}
