import html from "html-literal";

export default () => html`
  <h4>Today's Entry</h4>
  <form id="enter">
    <div>
      <label for="msg"></label>
      <textarea name="msg" id="msg" cols="35" rows="15"></textarea>
      <input type="submit" value="Submit" class="submit" />
    </div>
  </form>
`;
