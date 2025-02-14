document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {
    const antwort = await fetch("/api/data");
    const data = await antwort.json();
    console.log(data);
    //hier wir sehen data in Log

    const container = document.getElementById("data-container");//finden cont
    container.innerHTML = ""; //leer
    data.forEach(row => {
        createInput(row, container); 
    });
    
};

function createInput(row, container) {
    const div = document.createElement("div");
    ["id", "a", "b","c"].forEach(key => {
        const input = document.createElement("input");
        input.value = row[key];
        div.appendChild(input);
    });
    container.appendChild(div);

}