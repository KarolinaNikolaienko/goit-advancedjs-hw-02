import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



let userSelectedDate = new Date();
const btnStart = document.querySelector("button[data-start]");
const inputDate = document.querySelector("input#datetime-picker");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log();
        if (selectedDates[0] > this.defaultDate) {
            btnStart.disabled = false;
            userSelectedDate = selectedDates[0];
            console.log(selectedDates[0]);
        }
        else {
            btnStart.disabled = true;
            iziToast.error({
                class: "error-alert",
                title: "Error",
                titleColor: "white",
                iconUrl: "../img/error-icon.svg",
                message: "Please choose a date in the future",
                messageColor: "white",
                position: "topRight",
                progressBarColor: "B51B1B"
            })
        }
    },
};

const fp = flatpickr(inputDate, options);



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
}

btnStart.addEventListener("click", (event) => {
    event.target.disabled = true;
    inputDate.disabled = true;
    const intervalId = setInterval(() => {
        const remainTime = convertMs(userSelectedDate - options.defaultDate);
        console.log(remainTime);
    }, 1000);
});


