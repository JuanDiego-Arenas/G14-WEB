import express from "express";

const app = express()
const puerto = 3000

// Declaramos una funcion
function callback(){
    console.log("El servicio está ejecutandose");
}

// Funciones flecha

// 
app.get("/", (req, res) => {
    res.send("Hola Mundo!")
})

app.get("/inicio", (req, res) => {
    res.send("")
})
// Github.com/JParavel

app.listen(3000, callback)