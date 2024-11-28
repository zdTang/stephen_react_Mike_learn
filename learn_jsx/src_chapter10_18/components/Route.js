import useNavigation from "../hooks/use-navigation";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();
  return path === currentPath ? children : null;
};

export default Route;
