import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const btn = form.querySelector("button");
btn.classList.add("form-btn");

btn.disabled = true;

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input",onFormInput)

function onFormInput() {
  const delay = form.elements.delay.value;
  const state = form.elements.delay.value;

  btn.disabled = !delay || !state;
}

function onFormSubmit(event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  btn.disabled = true;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: "OK",
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
      });
    })
    .catch(delay => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
      });
    });
    
  form.reset();
};


function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

const label = document.querySelectorAll("label");
label[0].classList.add("form-label");
label[1].classList.add("radio-label");
label[2].classList.add("radio-label");
const radioFrame = document.createElement("div");
radioFrame.classList.add("radio-frame");
label[1].before(radioFrame);
radioFrame.append(label[1],label[2]);

const input = document.querySelector("input");
input.classList.add("form-input");
const fieldset = document.querySelector("fieldset");
fieldset.classList.add("form-fieldset");
const legend = document.querySelector("legend");
legend.classList.add("form-legend");


