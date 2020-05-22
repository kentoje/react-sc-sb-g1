import getComponentWithKey from "./generateComponentWithKey";

function getIconsComponents(collection, componentsCollection) {
  return Object.entries(collection).map((icon) => {
    const [name, bool] = icon;
    const { component, id } = componentsCollection[name];

    if (bool) return getComponentWithKey(component, id);

    return null;
  });
}

export default getIconsComponents;