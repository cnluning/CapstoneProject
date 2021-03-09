import html from "html-literal";

// eslint-disable-next-line prettier/prettier
export default (st) => html`
  <header>
    <h1>30 Days</h1>
    <h2>Habit Builder</h2>
    <h3>${st.header}</h3>
  </header>
`;
