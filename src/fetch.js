const request = require('node-fetch');

async function fetch(url) {
    const web = await request('http://' + url);
    const json = await web.json();
    return json;
};

module.exports = { fetch };