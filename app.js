let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let item = " "




btn1.addEventListener("click", function () {
    tg.MainButton.setText("Burger bosildi");
    item = "Burger bosildi narxi 5$";
    tg.MainButton.show();
});
btn2.addEventListener("click", function () {
    tg.MainButton.setText("KFC bosildi");
    item = "KFC bosildi narxi 6$";
    tg.MainButton.show();
});
btn3.addEventListener("click", function () {
    tg.MainButton.setText("Lavash bosildi");
    item = "Lavash bosildi narxi 8$";
    tg.MainButton.show();
});
btn4.addEventListener("click", function () {
    tg.MainButton.setText("Fri bosildi ");
    item = "Fri bosildi narxi 3$";

    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item)
});