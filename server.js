const express = require("express");
const db = require('./db');
// const cors = require("cors");

const app = express();
app.use(express.json()); // für json
app.use(express.static(__dirname));
//reference wenn db dort ist

//bekommen data
app.get("/api/data",async(req, res) => {
    const result = await db.query("SELECT * FROM abc ORDER BY id ASC");
    res.json(result.rows);
});
//update data
app.put("/api/data", async(req, res) => {
    const { id, field, value } = req.body;
    const anfrage = `UPDATE abc SET ${field} = $1 WHERE id = $2`;
    await db.query(anfrage, [value, id]);
    res.json({success: true });
})
//data von neue zahle
app.post("/api/data", async (req, res) => {
    const { a, b, c } = req.body;
    const result = await db.query("INSERT INTO abc (a, b, c) VALUES ($1, $2, $3) RETURNING *", [a, b, c]);
    res.json(result.rows[0]);
});




app.listen(3000, () => console.log("Server ist hier http://localhost:3000"));