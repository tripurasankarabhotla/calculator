var screen1 = document.querySelector(".container .screen");
var buttons = document.querySelectorAll(".container .button-container button");
buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.innerHTML === "=") {
            let result = eval(screen1.innerHTML);
            screen1.innerHTML = result;
        } else if (screen1.innerHTML === "0") {
            screen1.innerHTML = button.innerHTML;
        } else if (button.innerHTML === "C") {
            screen1.innerHTML = "0";
        } else {
            screen1.innerHTML += button.innerHTML;
        }
    });
})
