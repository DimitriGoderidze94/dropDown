const list = [
    "თბილისი1",
    "ქუთაისი2",
    "თბილისი3",
    "თბილისი4",
    "თბილისი5",
    "თბილისი6",
    "თბილისი7",
    "თბილისი8",
    "თბილისი9",
    "თბილისი10",
    "თბილისი11",
]

let dropDown = document.getElementById("dropDown")
let placeHolder = document.getElementById("city");
let angle = document.getElementById("angle");
let container = document.getElementById("container");




function showFullList() {
    if (angle.className == "fa-solid fa-angle-down") {
        angle.className = "fa-solid fa-angle-up"
        dropDown.innerHTML = "";
    } else {
        list.forEach((item) => {
            let newButton = document.createElement("div");
            newButton.className = "listCityNames";
            newButton.innerHTML = item;

            newButton.onclick = function () {
                placeHolder.value = item;
                if (container.className == "multi-select") {
                    if (newButton.className == "listCityNames selected") {
                        newButton.className = "listCityNames";
                    } else {
                        newButton.className = "listCityNames selected";
                    }
                }
            };
            dropDown.appendChild(newButton);
        });

        angle.className = "fa-solid fa-angle-down"
    }
    console.log("full")
}



function typeHead() {
    dropDown.innerHTML = "";
    const filtered = list.filter(
        (city) =>
            city.toLowerCase().includes(placeHolder.value.toLowerCase())
    );
    filtered.forEach((item) => {
        let newButton = document.createElement("div");
        newButton.className = "listCityNames";
        newButton.innerHTML = item;
        newButton.onclick = function () { placeHolder.value = item; };
        dropDown.appendChild(newButton);
    })
}
