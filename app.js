// let tg = window.Telegram.WebApp;
// tg.expand();
//
// tg.MainButton.textColor = "#FFFFFF"
// tg.MainButton.color = "#2cab37"
//
// let rbtn1 = document.getElementById("rbtn1");
// let abtn1 = document.getElementById("abtn1");
//
// let rbtn2 = document.getElementById("rbtn2");
// let abtn2 = document.getElementById("abtn2");
//
// let rbtn3 = document.getElementById("rbtn3");
// let abtn3 = document.getElementById("abtn3");
//
// let rbtn4 = document.getElementById("rbtn4");
// let abtn4 = document.getElementById("abtn4");
//
// let item = ""
// let num_count = 0
//
// let num_count1 = 0
//
//
// count = document.getElementById("count")
// count1 = document.getElementById("count1")
// count2 = document.getElementById("count2")
// count3 = document.getElementById("count3")
//
//
//
// abtn1.addEventListener("click", function () {
//
//     count.innerText = num_count += 1;
//     count.style.display = "inline-block";
// })
//
// rbtn1.addEventListener("click", function () {
//
//     count.innerText = num_count -= 1;
//     count.style.display = "inline-block";
// })
// abtn2.addEventListener("click", function () {
//
//     count1.innerText = num_count1 += 1;
//     count1.style.display = "inline-block";
// })
//
// rbtn2.addEventListener("click", function () {
//
//     count1.innerText = num_count1 -= 1;
//     count1.style.display = "inline-block";
// })
// abtn3.addEventListener("click", function () {
//
//     count2.innerText = num_count += 1;
//     count2.style.display = "inline-block";
// })
//
// rbtn3.addEventListener("click", function () {
//
//     count2.innerText = num_count -= 1;
//     count2.style.display = "inline-block";
// })
// abtn4.addEventListener("click", function () {
//
//     count3.innerText = num_count += 1;
//     count3.style.display = "inline-block";
// })
//
// rbtn4.addEventListener("click", function () {
//
//     count3.innerText = num_count -= 1;
//     count3.style.display = "inline-block";
// })
//
//
// btn1.addEventListener("click", function () {
//         tg.MainButton.setText("Burger bosildi");
//         item = " Nomi- Burger ," +
//             "Narxi- 5$";
//
//         tg.MainButton.show();
//     }
// );
//
// btn2.addEventListener("click", function () {
//         tg.MainButton.setText("Lavash bosildi");
//         item = " Nomi- Lavash ," +
//             "Narxi- 2.48$";
//         tg.MainButton.show();
//     }
// );
// btn3.addEventListener("click", function () {
//         tg.MainButton.setText("KFC bosildi");
//         item = " Nomi- KFC ," +
//             "Narxi- 3.99$";
//
//         tg.MainButton.show();
//     }
// );
// btn4.addEventListener("click", function () {
//         tg.MainButton.setText("Lavash bosildi");
//         item = " Nomi- Lavash ," +
//             "Narxi- 5$";
//         tg.MainButton.show();
//     }
// );
//
//
// Telegram.WebApp.onEvent("mainButtonClicked", function () {
//     tg.sendData(item)
// });



let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

// -----------------------1--------------------------

let item1 = " "
let n_count1 = 0


let count1 = document.getElementById("count1");
let rbtn1 = document.getElementById("rbtn1");
let abtn1 = document.getElementById("abtn1");

abtn1.addEventListener("click", function () {
    count1.innerText = n_count1 += 1;
    count1.style.display = "inline-block";
    tg.MainButton.setText("Burger");
    tg.MainButton.show();
    item1 = "Burger/3.49/" + count1.innerText;

});
rbtn1.addEventListener("click", function () {
    if (n_count1 > 0) {
        count1.innerText = n_count1 -= 1;
    }
    count1.style.display = "inline-block";
    item1 = "Burger/3.49/" + count1.innerText;
    tg.MainButton.setText("Burger");
    tg.MainButton.show();
});
// ------------------2--------------------

count2 = document.getElementById("count2");
rbtn2 = document.getElementById("rbtn2");
abtn2 = document.getElementById("abtn2");
let item2 = " ";
let n_count2 = 0;
rbtn2.addEventListener("click", function () {
    if (n_count2 > 0) {
        count2.innerText = n_count2 -= 1;
    }

    count2.style.display = "inline-block";
    item2 = "Hot-Dog/2.48/" + count2.innerText;
    tg.MainButton.setText("Hot-Dog");
    tg.MainButton.show();
});



abtn2.addEventListener("click", function (){
    count2.innerText = n_count2 += 1;
    count2.style.display = "inline-block";
    item2 = "Hot-Dog/2.48/" + count2.innerText;
    tg.MainButton.setText("Hot-Dog");
    tg.MainButton.show();
});

// ------------------3--------------------

count3 = document.getElementById("count3");
rbtn3 = document.getElementById("rbtn3");
abtn3 = document.getElementById("abtn3");
let item3 = " ";
let n_count3 = 0;
rbtn3.addEventListener("click", function () {
    if (n_count3 > 0) {
        count3.innerText = n_count3 -= 1;
    }

    count3.style.display = "inline-block";
    item3 = "Pizza/3.99/" + count3.innerText;

    tg.MainButton.setText("Pizza");
    tg.MainButton.show();
});



abtn3.addEventListener("click", function (){
    count3.innerText = n_count3 += 1;
    count3.style.display = "inline-block";
    item3 = "Pizza/3.99/" + count3.innerText;
    tg.MainButton.setText("Pizza");
    tg.MainButton.show();
});

// -------------------4-------------------

count4 = document.getElementById("count4");
rbtn4 = document.getElementById("rbtn4");
abtn4 = document.getElementById("abtn4");
let item4 = " ";
let n_count4 = 0;
rbtn4.addEventListener("click", function () {
    if (n_count4 > 0) {
        count4.innerText = n_count4 -= 1;
    }

    count4.style.display = "inline-block";
    item4 = "Lavash/5/" + count4.innerText;

    tg.MainButton.setText("Lavash");
    tg.MainButton.show();
});



abtn4.addEventListener("click", function (){
    count4.innerText = n_count4 += 1;
    count4.style.display = "inline-block";
    item4 = "Lavash/5/" + count4.innerText;

    tg.MainButton.setText("Lavash");
    tg.MainButton.show();
});



Telegram.WebApp.onEvent("mainButtonClicked", function () {
    data = item1 + "|" + item2 +  "|" + item3 + "|" + item4
    tg.sendData(data);
});