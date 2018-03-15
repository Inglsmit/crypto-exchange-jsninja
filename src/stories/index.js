import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// import AutocompliteSimpleDemo from "./AutocompliteSimple";
import AutocompliteSimpleDemo from "../components/Autocomplete/index";

storiesOf("Crypto components", module).add("Autocomplete", () => (
  <AutocompliteSimpleDemo />
));
