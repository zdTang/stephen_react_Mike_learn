import PropTypes from "prop-types";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button className="bg-rose-300">{children}</button>;
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
