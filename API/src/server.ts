import fastify from "fastify";

const app = fastify()

app.get("/maintenance", () => {
  return "lista de manutencao"
})

app.post("/maintenance", () => {
  return "manutencao criada"
})

app.listen({
  host: "0.0.0.0",
  port: 3333
}).then(() => {
  console.log("Server is running")
})