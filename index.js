const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const feBuildPath = path.resolve('./fe/build');
const feIndexHtmlPath = path.resolve(feBuildPath, 'index.html');

app.get('/', (req, res) => res.sendFile(feIndexHtmlPath));

app.use(express.static(path.resolve(feBuildPath)));

app.listen(port, () => {
    console.log(`craku is listenting on port ${ port }...`);
});