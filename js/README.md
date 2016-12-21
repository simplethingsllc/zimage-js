# Zimage JS library

This package introduces a very simple Zimage API for free usage.

## Usage
```js

const zimage = require('zimage');

const url = zimage('https://example.com/image.jpg', {
  blur: 3,
  width: 200
});

console.log(url);

// http://zimage.global.ssl.fastly.net/?url=http://example.com/image.jpg&w=200&blur=3
```
