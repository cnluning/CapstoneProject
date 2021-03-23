import html from "html-literal";

export default () => html`
  <form id="enter" method="POST" action="">
    <div>
      <label for="msg">Today's Entry: </label>
      <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
    </div>
    <input type="submit" value="Submit" class="submit" />
  </form>
`;
