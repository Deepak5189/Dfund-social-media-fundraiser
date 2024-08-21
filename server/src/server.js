const express=require('express')
const sequelize=require('./config/db.js')
const AuthRoutes=require("./routes/AuthRoutes")

const app=express();

app.use(express.json());

app.use('/auth', AuthRoutes);

app.use('/',(req, res)=>{
  console.log("Hello World!")
});

const port = process.env.PORT || 4000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});


// app.listen(port, ()=>{
//   console.log(`Server is running on port ${port}`);
// })