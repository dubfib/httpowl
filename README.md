# httpowl

<div align="left">
  <p align="left">

  <a href="https://www.npmjs.com/package/httpowl">
    <img src="https://img.shields.io/npm/v/httpowl?style=for-the-badge" alt="npm" />
  </a>
    
  <a href="https://www.npmjs.com/package/httpowl">
    <img src="https://img.shields.io/npm/dt/httpowl?style=for-the-badge" alt="npm" />
  </a>

  <a href="https://www.npmjs.com/package/httpowl">
    <img src="https://img.shields.io/badge/License-MIT-orange?style=for-the-badge" alt="npm" />
  </a>

  </p>
</p>
</div>

# Installation
```bash
npm install httpowl --save
```

# Documentation

## Fetch
```
Function ~ Fetch a URL
```
```js
const { fetch } = require('httpowl');

async function Example() {
    const api = await fetch('api.slothpixel.me/api/players/hypixel');
    console.log(api.level); //expected output: int
};

Example();
```