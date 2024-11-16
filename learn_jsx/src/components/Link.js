import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
import classNames from "classnames";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);
  const classes = classNames("text-blue-500");
  const handleClick = (event) => {
    if (event.metakey || event.ctrlKey) return;
    event.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
