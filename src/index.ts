import express from 'express'
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
})

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
})