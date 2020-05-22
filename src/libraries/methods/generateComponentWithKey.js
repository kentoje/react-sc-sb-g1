import React from "react";

function getComponentWithKey(component, id) {
  return React.createElement(component, {key: id});
}

export default getComponentWithKey;
