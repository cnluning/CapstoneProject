import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

import axios from "axios";
import "./env";
//import { Login } from "./components/views";

const router = new Navigo("/");

//https://zenquotes.io/api/random

let randQuote = () => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  };
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random",
      config
    )
    .then(response => {
      document.getElementById("rand-quote").innerHtml = response.q;
    });
};

// router.hooks({
//   before: (done, params) => {
//     const page =
//       params && Object.prototype.hasOwnProperty.call(params, "page")
//         ? capitalize(params.page)
//         : "Profile";
//     fetchDataByView(state[page]);
//     done();
//   }
// });

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.data.page);
      render(state[page]);
      // eslint-disable-next-line prettier/prettier
      if (page == "Profile") {
        randQuote();
      }
    }
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();
  addNavEventListeners();
}

function addNavEventListeners() {
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      console.log(event.target.title);
      console.log(event);
      console.log(event.target);
      render(state[event.target.title]);
    })
  );

  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

// document
//   .querySelector(".fa-bars")
//   .addEventListener("click", () =>
//     document.querySelector("nav > ul").classList.toggle("hidden--mobile")
//   );

//let userName = "";
//let loggedIn = false;

//let logIn = user => {
//  userName = user;
//  loggedIn = true;
//};

// document
//   .querySelector(".submitButton")
//   .addEventListener("click", () =>
//     document.querySelector("a").classList.toggle("submit")
//   );
