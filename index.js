import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

import axios from "axios";
import "./env";

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
//         : "Home";
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
  // addEntryOnFormSubmit();
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

// function addEntryOnFormSubmit(st) {
//   if (st.page === "Create") {
//     document.querySelector("form").addEventListener("submit", event => {
//       event.preventDefault();
//       console.log(event);
//       const inputList = event.target.elements;
//       const toppings = [];
//       for (let input of inputList.toppings) {
//         if (input.checked) {
//           toppings.push(input.value);
//         }
//       }
//       const requestData = {
//         crust: inputList.crust.value,
//         cheese: inputList.cheese.value,
//         sauce: inputList.sauce.value,
//         toppings: toppings
//       };
//       axios
//         .post(`http://localhost:4040/entries`, requestData)
//         .then(response => {
//           state.Entry.entries.push(response.data);
//           router.navigate("/Entry");
//         })
//         .catch(error => {
//           console.log("Lol whoops", error);
//         });
//     });
//   }
// }

// function fetchDataByView(st = state.Home) {
//   switch (st.page) {
//     case "Previous":
//       axios
//         .get(`http://localhost:4040/entries`)
//         .then(response => {
//           state[st.page].pizzas = response.data;
//           render(st);
//         })
//         .catch(error => {
//           console.log("Lol whoops", error);
//         });
//       break;
//   }
// }
