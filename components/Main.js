import * as views from "./views";

// eslint-disable-next-line prettier/prettier
export default (st) => `
${views[st.page](st)}
`;
