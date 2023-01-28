import { useEffect, useState } from "react";

export default (props) => {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [mydate, setmyDate] = useState(props.value);
  const [formattedDate, setFormattedDate] = useState(null);
  // use Effect
  useEffect(() => {
    setmyDate(props.value);
    setFormattedDate(formatter.format(props.value));
  }, [props.value]);

  return <>{formattedDate}</>;
};
