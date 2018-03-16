import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// import AutocompliteSimpleDemo from "./AutocompliteSimple";
import DemoAutocompliteSimple from "./DemoAutocompliteSimple";

const items = [
  { label: "ETH", balance: "2.08" },
  { label: "ETC", balance: "18.08" },
  { label: "BTC", balance: "3.2" }
];

storiesOf("Crypto components", module).add("Autocomplete", () => (
  <DemoAutocompliteSimple items={items} />
));
