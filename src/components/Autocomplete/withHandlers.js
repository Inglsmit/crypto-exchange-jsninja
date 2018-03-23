import React from "react";

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

    render() {
      return (
        <Component
          {...this.props}
          value={this.state.value}
          opened={this.state.opened}
          onChange={this.onChange}
          onSelectItem={this.onSelectItem}
          getItems={this.getItems}
        />
      );
    }
  }

  // withHandlers.displayName = `withHandlers(${getDisplayName(Component)})`;
  return withHandlers;
}
