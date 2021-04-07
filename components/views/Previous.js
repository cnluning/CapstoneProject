import html from "html-literal";
const formatDateAnd12Time = dateToFormat => {
  const dateArray = dateToFormat.slice(0, 10).split("-");
  const timeArray = dateToFormat.slice(11, 19).split(":");
  const offset = new Date().toString().match(/([-+][0-9]+)\s/)[1];
  // checks if user is in negative or positive time zone and changes the time
  if (Math.sign(offset) === -1) {
    timeArray[0] -= offset.replace(/[0]/g, "").slice(1);
  } else {
    timeArray[0] += offset.replace(/[0]/g, "").slice(1);
  }
  // if time becomes negative (-3 hours) will add 24 to make it pm, then subtract a day to show correct day
  if (Math.sign(timeArray[0]) === -1) {
    dateArray[2] -= 1;
    timeArray[0] += 24;
  }
  // if time becomes greater than 24, will subtract to AM time and add a day
  if (timeArray[0] > 24) {
    dateArray[2] += 1;
    timeArray[0] -= 24;
  }
  // will attach am or pm to date
  const amOrPm = Number(timeArray[0] - 12) > 0 ? "PM" : "AM";
  if (amOrPm === "PM") {
    timeArray[0] -= 12;
  }
  const formattedTime = timeArray.join(":");
  const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
  // creates new date from data
  return `${new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  }).format(date)} ${formattedTime} ${amOrPm}`;
};
export default st => html`
  <h4>Previous Entries</h4>
  <p>
    ${st.entries.length > 0 &&
      st.entries
        .map(entry => {
          console.log(entry);
          return `<p>${entry.text} ${
            entry.createdAt ? formatDateAnd12Time(entry.createdAt) : ""
          }</p>`;
        })
        .join("")}
  </p>
`;
