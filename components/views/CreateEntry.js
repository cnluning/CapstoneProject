import html from "html-literal";

export default () => html`
  <h4>Create Entry</h4>
  <form id="enter" method="POST" action="">
    <div>
      <label for="msg">Today's Entry: </label>
      <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
    </div>
    <input type="submit" value="Submit" />
  </form>
`;
