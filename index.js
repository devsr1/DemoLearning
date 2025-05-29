import express from 'express'
const app = express();

const PORT =  3000;

app.set('view engine', 'ejs');
app.get('/my',(req,res)=>{
    res.send('This is my website');
})

app.get('/', (req, res) => {
  res.render('index', {
    title: 'EJS Demo',
    heading: 'Welcome to My Website', 
    message:'This is a simple EJS template rendering example.',
    users: [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
      { name: 'Charlie', email: 'charlie@example.com' }
    ]
  });
});
app.listen(PORT,()=>{
    console.log(`Server is running on the port${PORT}`);
})