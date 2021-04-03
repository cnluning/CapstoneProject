import html from "html-literal";

import * as views from "./views";

// eslint-disable-next-line prettier/prettier
export default (st) => html `
  ${views[st.page](st)}
`;
