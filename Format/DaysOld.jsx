export default function daysOld({ date }) {
  // check to see if date is a string or a date object

  let myDate = date;
  if (typeof date === "string") {
    myDate = new Date(date);
  }

  // get days old
  const today = new Date();
  const diff = today.getTime() - myDate.getTime();
  const daysOld = Math.floor(diff / (1000 * 60 * 60 * 24));

  return <span>{daysOld}</span>;
}
