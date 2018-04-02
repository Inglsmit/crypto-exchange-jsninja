import React from "react";
import axios from "axios";
// import getDisplayName from "../../../helpers/getDisplayName";

export default function withHandlers(Component) {
  class withHandlers extends React.Component {
    // constructor(props) {
    // super(props);

    // this.state = { ...props };
    // }

    static defaultProps = {
      items: [],
      onChange: () => {},
      getItems: () => {},
      onSelectItem: () => {}
    };

    state = {
      value: "",
      opened: false,
      selected: false
    };

    onSelectItem = item => event => {
      this.setState({ value: item.label, opened: false, selected: true });
    };

    onChange = event => {
      this.setState({
        value: event.target.value,
        opened: true,
        selected: false
      });
    };

    onLostFocus = () => {
      const value = this.state.selected == true ? this.state.value : "";
      this.setState({ value: value, opened: false });
    };

    getItems = inputValue => {
      return axios
        .post(`http://localhost:5000/getitems`, { inputValue })
        .then(r => console.log(r.data), e => console.log("Handler " + e));

      // let count = 0;
      // const items = this.props.items;
      // return items.filter(item => {
      //   const keep =
      //     (!inputValue ||
      //       item.label.toLowerCase().includes(inputValue.toLowerCase())) &&
      //     count < 5;
      //   if (keep) {
      //     count += 1;
      //   }
      //   return keep;
      // });
    };

    render() {
      return (
        <Component
          {...this.props}
          value={this.state.value}
          opened={this.state.opened}
          onChange={this.onChange}
          onSelectItem={this.onSelectItem}
          onLostFocus={this.onLostFocus}
          getItems={this.getItems}
        />
      );
    }
  }

  // withHandlers.displayName = `withHandlers(${getDisplayName(Component)})`;
  return withHandlers;
}
