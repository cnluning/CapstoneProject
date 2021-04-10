import html from "html-literal";

export default () => html`
  <form id="enter">
    <div>
      <label for="msg">Today's Entry: </label>
      <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
      <input type="submit" value="Submit" class="submit" />
    </div>
  </form>
`;
