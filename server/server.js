const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const app = express();
const port = 3000;

require('./models/db')
 
app.use(cors());
app.use(express.json());

app.use('/user', router); 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});