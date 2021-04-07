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
router.hooks({
  before: (done, params) => {
    const page =
      params && Object.prototype.hasOwnProperty.call(params, "page")
        ? capitalize(params.page)
        : "Home";
    done();
  }
});
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
  addEntryOnFormSubmit(st);
  fetchEntries(st);
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
function addEntryOnFormSubmit(st) {
  if (st.page === "Create") {
    document.querySelector("#enter").addEventListener("submit", event => {
      event.preventDefault();
      const requestData = {
        text: document.querySelector("#msg").value,
        timestamps: Date.now()
      };
      axios
        .post(`http://localhost:4040/entries`, requestData)
        .then(response => {
          console.log(response.data);
          state.Previous.entries.push(response.data);
          router.navigate("/Entry");
        })
        .catch(error => {
          console.log("Lol whoops", error);
        });
    });
  }
}
function fetchEntries(st) {
  const prevState = state.Previous.entries.length;
  axios
    .get(`http://localhost:4040/entries`)
    .then(response => {
      state.Previous.entries = response.data;
      if (prevState !== response.data.length) {
        render(st);
      }
    })
    .catch(error => {
      console.log("Lol whoops", error);
    });
}
// axios.get("http://localhost:4040/entries");
// console.log(axios);
