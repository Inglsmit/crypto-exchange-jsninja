import React from "react";

export default function RenderAutocompleteResult({
  items,
  onSelectItem,
  onLostFocus,
  format
}) {
  return (
    <React.Fragment>
      <div className="autocomplete-result-wrap" onClick={onLostFocus} />
      <div className="autocomplete-result">
        {items.then(
          data =>
            data.map((item, index) => (
              <p key={index} onClick={onSelectItem(item)}>
                {format == "detail"
                  ? item.label + " балланс (" + item.balance + ")"
                  : item.label}
              </p>
            )),
          e => console.log("render " + e)
        )}
      </div>
    </React.Fragment>
  );
}
