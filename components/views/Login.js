import html from "html-literal";

export default () => html`
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
    <div>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" />
    </div>
    <input type="submit" name="login" value="Login" />
  </form>
`;
