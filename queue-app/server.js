import express from 'express'
import cors from 'cors'

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const app = express()

app.get("/hello/:dado", hello)
function hello(requisicao, resposta){

    console.log(requisicao.params.dado)

    resposta.send({
        "resposta": requisicao.params.dado
    })
}

app.listen(3000, ()=>{
    console.log("servidor na porta 3000")
})