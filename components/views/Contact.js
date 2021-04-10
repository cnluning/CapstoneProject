import html from "html-literal";

export default () => html`
  <form action="https://formspree.io/f/mleoyenl" method="POST">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" placeholder="Full Name" />

    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="you@somewhere.com"
    />

    <div>
      <label for="msg">Enter your message:</label>
      <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
    </div>

    <div id="marketing">
      <label for="marketing">How did you hear about 30 Days?</label>
      <select name="marketing">
        <optgroup label="Online">
          <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
          <option value="github">Online Portfolio (GitHub)</option>
          <option value="search">Search Engine</option>
          <option value="email">Email</option>
        </optgroup>
        <option value="other">Other</option>
      </select>
    </div>
    <input type="submit" value="Submit" />
  </form>
`;
