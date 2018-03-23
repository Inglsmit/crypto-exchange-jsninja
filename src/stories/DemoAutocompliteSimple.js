import React from "react";

import Autocomplite from "../components/Autocomplete/Autocomplete";

const items = [
  { label: "ETH", balance: "2.08" },
  { label: "ETC", balance: "18.08" },
  { label: "BTC", balance: "3.2" }
];

export default function DemoAutocompliteSimple() {
  return <Autocomplite items={items} />;
}
