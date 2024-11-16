import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children }) => {
  const { navigate } = useNavigation();
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
