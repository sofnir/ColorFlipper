const btn = document.getElementById("btn");
const select = document.getElementById("select");
const colorsHeader = document.getElementById("colorsHeader");
const cityHeader = document.getElementById("cityHeader");

const colors = [
    { name: "green", value:"#009B77"},
    { name: "red", value:"#BC243C"},
    { name: "yellow", value:"#EFC050"},
    { name: "pink", value:"#C3447A"},
    { name: "orange", value:"#E15D44"},
    { name: "blue", value:"#7FCDCD"},
];

const cities = [
    "Samokotopia",
    "Krasnalburg",
    "Port Aurisan",
    "Święty Gaj",
    "Wieś Nienawistek",
    "Normalewo",
    "Świątynia Epiony",
    "Ospała Skała",
    "Foxenfurt",
    "Północna Grań",
    "Kaplica Duszognia",
];

btn.addEventListener('click', function() {
    randColors();
    randCity();    
})

function randColors() {
    let currentColors = [...colors];
    let randomColorsLinearGradient = "";
    let randomColorsHtml = "";

    for (let i = 0; i < select.value; i++) {
        let randomNumber = Math.floor(Math.random() * currentColors.length);
        let randomColor = currentColors[randomNumber];

        randomColorsLinearGradient += i != 0
            ? `, ${randomColor.value}`
            : `${randomColor.value}`;
        
        let colorNameSpan = `<span style="color:${randomColor.value}">${randomColor.name}</span>`;

        randomColorsHtml += i != 0
            ? ' ' + colorNameSpan
            : colorNameSpan;

        currentColors.splice(randomNumber, 1);        
    }

    colorsHeader.innerHTML = randomColorsHtml;
    document.body.style.background = `linear-gradient(to right, ${randomColorsLinearGradient})`;
}

function randCity() {
    let randomNumber = Math.floor(Math.random() * cities.length);
    let randomCity = cities[randomNumber];
    let color = randomNumber > 5
        ? "#FFFFFF"
        : colors[randomNumber].value;
    
    cityHeader.innerHTML = `<span style="color:${color}">${randomCity}</span>`;;
}