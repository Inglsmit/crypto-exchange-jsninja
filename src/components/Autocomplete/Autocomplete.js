import React from "react";

import RenderAutocompleteResult from "./RenderAutocompleteResult";
import withHandlers from "./withHandlers";

import "./style.css";

function Autocomplete({
  value,
  opened,
  format,
  onChange,
  onSelectItem,
  onLostFocus,
  getItems
}) {
  return (
    <div className="mui-autocomplete">
      <input id="autocomplete" type="text" value={value} onChange={onChange} />
      {opened && value !== "" ? (
        <RenderAutocompleteResult
          items={getItems(value)}
          format={format}
          onLostFocus={onLostFocus}
          onSelectItem={onSelectItem}
        />
      ) : null}
    </div>
  );
}

export default withHandlers(Autocomplete);
