import React from "react";

function getComponentWithKey(component, id, count = null) {
  return React.createElement(component, {key: id, count: count});
}

export default getComponentWithKey;
