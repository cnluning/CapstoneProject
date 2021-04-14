import html from "html-literal";

export default () => html`
  <h4>Log In to 30 Days</h4>
  <form id="register" method="POST" action="">
    <div class="login">
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
    <input class="loginButton" type="submit" name="login" value="Login" />
  </form>
`;
