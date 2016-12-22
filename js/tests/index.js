/* global describe, it */

var assert = require('assert');
var zimage = require('../');

var testUrl = 'http://example.com/image.jpg?foo=bar#hashthis';
var encodedTestUrl = encodeURIComponent('http://example.com/image.jpg?foo=bar');

describe('zimage', function () {
  it('generates all basic params', function () {
    assert.equal(zimage(testUrl, {
      width: 200
    }), 'http://edge.zimage.io/?url=' + encodedTestUrl + '&w=200');

    assert.equal(zimage(testUrl, {
      anchor: 'top',
      blur: 3,
      height: 300,
      interpolator: 'bicubic',
      flip: 'x',
      format: 'webp',
      quality: 80,
      rotate: '45',
      width: 200
    }), 'http://edge.zimage.io/?url=' + encodedTestUrl + '&anchor=top&blur=3&h=300&interp=bicubic&f=x&format=webp&quality=80&r=45&w=200');
  });

  it('requires url', function () {
    assert.throws(function() { zimage({ width: 300 }); }, Error)
  });

  it('handles query params', function () {
    assert.equal(zimage(testUrl, {
      width: 200
    }), 'http://edge.zimage.io/?url=' + encodedTestUrl + '&w=200');
  });

  it('supports ssl', function () {
    assert.equal(zimage(testUrl, {
      secure: true,
      width: 200
    }), 'http://zimage.global.ssl.fastly.net/?url=' + encodedTestUrl + '&w=200');
  });
});
