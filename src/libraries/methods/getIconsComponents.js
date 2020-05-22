import getComponentWithKey from "./generateComponentWithKey";

function getIconsComponents(collection, componentsCollection, notificationCount) {
  return Object.entries(collection).map((icon) => {
    const [name, displayBool] = icon;
    const { component, id } = componentsCollection[name];
    const count = notificationCount[name]

    if (displayBool) return getComponentWithKey(component, id, count);

    return null;
  });
}

export default getIconsComponents;
