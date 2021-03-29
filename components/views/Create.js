import html from "html-literal";

export default () => html`
  <!-- <div id="#root">
    <div class="headerGrid">
      <div class="navBar">
        <div class="mainBody"> -->
  <form id="enter" method="POST" action="">
    <div>
      <label for="msg">Today's Entry: </label>
      <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
    </div>

    <input type="submit" value="Submit" class="submit" />
  </form>
  <!-- </div>
      </div>
    </div>
  </div> -->
`;
