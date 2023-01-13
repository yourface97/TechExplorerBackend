const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 5000;

app.use(express.static('../frontend/public'));

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'..','frontend','public','about.html'))
})

app.listen(port, console.log(`Server started on port ${port}`));