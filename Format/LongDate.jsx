export default function longDate({ date }) {
  // check to see if date is a string or a date object

  let myDate = date;
  if (typeof date === "string") {
    myDate = new Date(date);
  }

  const d = myDate.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return <span>{d}</span>;
}
