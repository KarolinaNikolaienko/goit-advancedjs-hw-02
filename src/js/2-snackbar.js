import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formElem = document.querySelector("form");
const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
    if (!formElem.elements.delay.value || !formElem.elements.state.value)
        iziToast.warning({
            class: "warning-alert",
            title: "Caution",
            titleColor: "white",
            iconUrl: "../img/warning-icon.svg",
            message: "You forgot important data",
            messageColor: "white",
            position: "topRight"
        });
});

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
        .then(delay => setTimeout(() => {
            iziToast.success({
                class: "success-alert",
                title: "OK",
                titleColor: "white",
                iconUrl: "../img/success-icon.svg",
                message: `Fulfilled promise in ${delay}ms`,
                messageColor: "white",
                position: "topRight"
            })
        }, delay))
        .catch(delay => setTimeout(() => {
            iziToast.error({
                class: "error-alert",
                title: "Error",
                titleColor: "white",
                iconUrl: "../img/error-icon.svg",
                message: `Rejected promise in ${delay}ms`,
                messageColor: "white",
                position: "topRight"
            })
        }, delay));
});