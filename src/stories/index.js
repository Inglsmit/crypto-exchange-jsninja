import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// import AutocompliteSimpleDemo from "./AutocompliteSimple";
import DemoAutocompliteSimple from "./DemoAutocompliteSimple";

storiesOf("Crypto components", module).add("Autocomplete", () => (
  <DemoAutocompliteSimple />
));
