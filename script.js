document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {
    const antwort = await fetch("/api/data");
    const data = await antwort.json();
    
    console.log(data);
    //hier wir sehen data in Log

    const container = document.getElementById("data-container");//finden cont
    container.innerHTML = ""; //leer
    // container.style.backgroundColor = "green"//marker
    data.forEach(row => {
        
        createInput(row, container);
        
    });
    
}


function createInput(row, container) {
    const div = document.createElement("div");
    ["id", "a", "b","c"].forEach(key => {
        const input = document.createElement("input");
        
        input.value = row[key];

        //kann änderung sehen!
        if (key === "id") {
            input.disabled = true; //kann nicht id ändern
        } else {
            input.addEventListener("input", () => {
                input.style.backgroundColor = "red";
                input.style.color = "white";
            });
        }

        //add change für änderungen speichern
        input.addEventListener("change", () => {
            updateData(row.id, key, input.value);
            input.style.backgroundColor = "green"; //änderung speichern
            // container.style.backgroundColor = "red"//marker
        });
        
        div.append(input); //input -> div
        console.log(div); //zeight was passiert
    });
    container.append(div); //div -> container

}

async function updateData(id, field, value) {
    
    console.log(`Änderungen! id=${id}, field=${field}, value=${value}`);
    await fetch("/api/data", {
        method: "PUT",
        headers: { "Content-Type": "application/json" }, //server muss wissen dass JSON ist
        body: JSON.stringify({ id, field, value }) //Obj to JSON
    });
};

//button
document.getElementById("neueZahle").addEventListener("click", async function() {
    const response = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a: "", b: "", c: "" }) 
    });

    if (response.ok) {
        loadData(); 
    }
});

//löchen button


