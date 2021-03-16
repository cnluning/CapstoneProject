import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

import axios from "axios";
import "./env";

const router = new Navigo("/");

//https://zenquotes.io/api/random

let randQuote = () => {
  axios
    .get("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random")
    .then(response => {
      Document.getElementById("rand-quote").innerHtml = response.q;
    });
};

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
}

document
  .querySelector(".fa-bars")
  .addEventListener("click", () =>
    document.querySelector("nav > ul").classList.toggle("hidden--mobile")
  );
