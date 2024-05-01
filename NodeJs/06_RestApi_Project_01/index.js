const express = require("express");
const fs = require("fs");

//requiring the data

const users = require("./MOCK_DATA.json");

const app = express();

//! Middleware-->Plugin to encode in body
app.use(express.urlencoded({ extended: false }))

//Routes

app.get("/users", (req, res) => {
    const html = `

    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    
    `;

    res.send(html);
});

//REST API
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.post("/api/users", (req, res) => {
    // TODO create a new user
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: 'Success', id: users.length })
    });
    console.log(body)
});

app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id == id);
        return res.json(user);
    })



    .patch((req, res) => {
        //? TODO Edit the user with id

        return res.json({ status: "Pending" });
    })
    .delete((req, res) => {
        //? TODO Delete the user with id

        return res.json({ status: "Pending" });
    });



app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
