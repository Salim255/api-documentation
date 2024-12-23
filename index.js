const express = require('express') 
const port = 3000;

const app = express();
app.get('/', (req, res)=>{
    console.log('====================================');
    console.log("Helo from here");
    console.log('====================================');
    res.send('Hello from swagger test')
})
app.listen(port, () => {
    console.log('Application running on port ', port)
})