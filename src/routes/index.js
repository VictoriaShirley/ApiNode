import express from "express";
import jogos from "./jogoRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Aprendendo node"});
    })
    app.use(
        express.json(),
        jogos
    )
}

export default routes