import express from "express";

const app = express()
const puerto = 3000

app.listen(3000, () => {
    console.log("El servidor está ejecutandose");
})

// //Declaramos una funcion
// function callback(){
//     console.log("El servidor está ejecutandose");
// }

// //Funcion flecha

// () => {
//     console.log("El servidor está ejecutandose");
// }

app.get("/", (req, res) => {
    res.send("Hola, Mundo!")
})

app.get("/inicio", (req, res) => {
    res.send("Bienvenido a la página de inicio")
})

app.get("/inicio/G14", (req, res) => {
    res.send("Bienvenido a la página del grupo G14")
})


//Github.com/

