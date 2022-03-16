const express = require("express");

const Service = require ( "./src/service");

const app = express();
const PORT = 3000;

app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        message: "Lista de ususarios",
        body: Service.getUser(),
    });
});

app.post ('/', (req , res) =>{
    let { body: newUser} = req;
    
    res.status(201).json({
        message: 'Usuario creado',
        body:Service.createUser(newUser),
    })
});

app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});