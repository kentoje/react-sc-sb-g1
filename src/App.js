import React from "react";
import Actions from './ui/molecules/Actions';
import mockNotification from './mockDatas/notificationCount/mockNotification';

const notificationCount = mockNotification();
const displayIcons = {
  bell: true,
  bubble: true,
  zoom: true,
};

export default function App() {
  return (
    <div className="App">
      <Actions displayIcons={displayIcons} notificationCount={notificationCount} />
    </div>
  );
}
