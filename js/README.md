# Zimage JS library
[![Version](http://img.shields.io/npm/v/zimage.svg)](https://www.npmjs.org/package/zimage)
[![Build Status](https://travis-ci.org/simplethingsllc/zimage-lib.svg?branch=master)](https://travis-ci.org/simplethingsllc/zimage-lib)

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
