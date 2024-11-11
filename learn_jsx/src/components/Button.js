import PropTypes from "prop-types";
import className from "classnames";
import { FaBeer } from "react-icons/fa";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  //console.log(rest);
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-black": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-black-400": outline && warning,
      "text-red": outline && danger,
    }
  );
  //console.log(classes);
  return (
    <button {...rest} className={classes}>
      {children}
      <FaBeer />
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    //outline, rounded can live with those 5 props
    if (count > 1) {
      return new Error(
        "only one of primary,secondary,success,warning,danger can be true! "
      );
    }
  },
};

export default Button;
