import html from "html-literal";

export default st => html`
  <h4>Previous Entries</h4>
  <p>
    ${st.entries
      .map(entry => {
        return `${entry.text} ${entry.timestamps}`;
      })
      .join("")}
  </p>
`;
