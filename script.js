document.addEventListener("DOMContentLoaded", loadData);

async function loadData() {
    const antwort = await fetch("/api/data");
    const data = await antwort.json();
    console.log(data);
};