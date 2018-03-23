import React from "react";

export default function RenderAutocompleteResult({ items, onSelectItem }) {
  return (
    <div id="autocomplete_result">
      {items.map((item, index) => (
        <p key={index} onClick={onSelectItem(item)}>
          {item.label} балланс ({item.balance})
        </p>
      ))}
    </div>
  );
}
