import React from "react";

import getDisplayName from "../../../helpers/getDisplayName";

export default function withRender(Component) {
  function WithRender(props) {
    return <Component {...props} />;
  }

  WithRender.displayName = `withRender(${getDisplayName(Component)})`;
  return WithRender;
}
