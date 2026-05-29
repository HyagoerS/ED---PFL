import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/hello", hello)
function hello(requisicao, resposta){
    console.log("Hello")
    resposta.send({
        "resposta": "hello"
    })
}

app.listen(3000, ()=>{
    console.log("servidor na porta 3000")
})