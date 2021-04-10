import html from "html-literal";

import * as views from "./views";

// eslint-disable-next-line prettier/prettier
export default (st) => html `
  <div class="grid-container">
    <div class="mainBody">
      ${views[st.page](st)}
    </div>
  </div>
`;
