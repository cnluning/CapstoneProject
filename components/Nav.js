import html from "html-literal";

export default links => html`
  <!-- <div id="root">
    <div class="navBar"> -->
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title !== "Home" ? link.title : ""}" title="${
              link.title
            }" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
  </nav>
  <!-- </div>
  </div> -->
`;

// export default links => html`
//   < class="navBar">
//     <nav>
//       <i class="fas fa-bars"></i>
//       <ul class="hidden--mobile nav-links">
//         ${links.reduce(
//           (html, link) =>
//             html +
//             `<li><a href="#" title="${link.title}" data-navigo>${link.text}</a></li>`,
//           ``
//         )}
//       </ul>
//     </nav>
//   </>
// `;
