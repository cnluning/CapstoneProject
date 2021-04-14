import html from "html-literal";

export default () => html`
  <h4>Join 30 Days</h4>
  <form id="register" method="POST" action="">
    <div>
      <label for="name">Name:</label>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="First and Last Name"
      />
    </div>
    <div class="break"></div>
    <div class="join">
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your@email.here"
      />
    </div>
    <div class="break"></div>
    <div>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" />
    </div>
    <div class="break"></div>
    <input class="joinButton" type="submit" name="join" value="Join" />
  </form>
`;
