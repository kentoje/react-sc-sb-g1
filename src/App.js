import React from "react";
import Badge, { colors } from "./ui/atoms/Badge";
import Actions from './ui/molecules/Actions'

export default function App() {
  const displayIcons = {
    bell: true,
    bubble: true,
    zoom: true,
  };

  return (
    <div className="App">
      <Badge text="IRL" color={colors.purple}/>
      <Badge text="IRL" color={colors.grey}/>
      <Actions displayIcons={displayIcons} />
    </div>
  );
}
