const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

//Routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
   
    `;

  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});


app.post("/api/users", (req, res) => {
  //? TODO : Create a user
  res.send({ status: "pending" });
});

app.patch("/api/users/:id", (req, res) => {
  //? TODO : Update a user
  res.send({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
  //? TODO : Delete a user
  res.send({ status: "pending" });
});


app.router('/api/users/:id').app.get((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
  
    return res.json(user);
  });

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
