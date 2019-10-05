var el = document.querySelector("#speciale_button");
// var el = document.getElementById("speciale_button");
console.log(el)
el.onclick = function onClick() {
    window.open("http://www.magetrain.nl/", "MagetrainWindowName", "resizable,scrollbars,status");
    document.getElementsByTagName("body")[0].className = "bg-groen";
}

var form = document.getElementsByTagName("form")[0];



function validate() {
    var getal1 = parseInt(document.getElementById('getal1').value, 10);
    var getal2 = parseInt(document.getElementById('getal2').value, 10);
    if (isNaN(getal1) || isNaN(getal2)) {
        console.log("In veld 1 of 2 staat geen getal");
    } else {
        console.log(`De uitkomst is ${getal1 + getal2}`)
        document.getElementById('getal3').value = getal1 + getal2
    }
}

animals = [
    "slang",
    "cavia",
    "duif",
    "konijn",
    "hondje",
    "vogel",
    "parkiet",
    "goudvis",
    "guppie"
];

characters = ["Wensley", "Nicky"];
conversation = '';
for (let index = 0; index < animals.length; index++) {
    const animal = animals[index];
    const character = characters[index % 2];
    conversation = `${conversation}${character}: Ik wil een ${animal}. <br>`;
}

document.getElementById('animals').innerHTML = conversation;
console.log(conversation);