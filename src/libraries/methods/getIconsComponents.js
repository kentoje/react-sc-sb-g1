import getComponentWithKey from "./generateComponentWithKey";

function getIconsComponents(collection, componentsCollection, notificationCount) {
  return Object.entries(collection).map((icon) => {
    const [name, bool] = icon;
    const { component, id } = componentsCollection[name];
    const count = notificationCount[name]

    if (bool) return getComponentWithKey(component, id, count);

    return null;
  });
}

export default getIconsComponents;
