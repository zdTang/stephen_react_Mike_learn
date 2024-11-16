import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

const Route = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);
  return path === currentPath ? children : null;
};

export default Route;
