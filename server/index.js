const express=require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT||8000;

app.use(cors());

app.use(express.json());


app.use('/', (req, res)=>{
  // console.log('hello world');
  res.send('hello world');
})



app.listen(PORT, ()=>{
  console.log(`app is listening to PORT: ${PORT}`);
})