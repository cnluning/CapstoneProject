import html from "html-literal";

export default st => `
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
    ${st
      .map(
        // eslint-disable-next-line prettier/prettier
        (link) => `<li><a href="/${link.title}" data-navigo>${link.text}</a></li>`
      )
      .join("")}
    </ul>
  </nav>
  `;
