import React from "react";

import RenderAutocompleteResult from "./RenderAutocompleteResult";
import withHandlers from "./withHandlers";

import "./style.css";

function Autocomplete({ value, opened, onChange, onSelectItem, getItems }) {
  return (
    <div className="mui-autocomplete">
      <input id="autocomplete" type="text" value={value} onChange={onChange} />
      {opened && value !== "" ? (
        <RenderAutocompleteResult
          items={getItems(value)}
          onSelectItem={onSelectItem}
        />
      ) : null}
    </div>
  );
}

export default withHandlers(Autocomplete);
