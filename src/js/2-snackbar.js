import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formElem = document.querySelector("form");

const showPromise = (state, delay) => {
    if (state === "fulfilled") 
        return Promise.resolve(delay);
    else 
        return Promise.reject(delay);
};

formElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const delay = form.elements.delay.value;
    const state = form.elements.state.value;
    showPromise(state, delay)
        .then(delay => setTimeout(() => { iziToast.success({ message: `✅ Fulfilled promise in ${delay}ms` }) }, delay))
        .catch(delay => setTimeout(() => { iziToast.error({ message: `❌ Rejected promise in ${delay}ms` }) }, delay));
});