import classNames from "classnames/bind";
export default function Skeleton({ times }) {
  /* const boxes = [];
  for (let i = 0; i < times; i++) {
    boxes.push(<div key={i}></div>);
  } */

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i} className="skeleton"></div>;
    });

  return boxes;
}
