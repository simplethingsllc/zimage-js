/* global describe, it */

var assert = require('assert');
var zimage = require('../');

describe('zimage', function () {
  it('generates all basic params', function () {
    assert.equal(zimage({
      url: 'http://example.com/image.jpg',
      width: 200
    }), 'http://edge.zimage.io/?url=http://example.com/image.jpg&w=200');

    assert.equal(zimage({
      anchor: 'top',
      blur: 3,
      height: 300,
      interpolator: 'bicubic',
      flip: 'x',
      format: 'webp',
      quality: 80,
      rotate: '45',
      url: 'http://example.com/image.jpg',
      width: 200
    }), 'http://edge.zimage.io/?url=http://example.com/image.jpg&anchor=top&blur=3&h=300&interp=bicubic&f=x&format=webp&quality=80&r=45&w=200');
  });

  it('requires url', function () {
    assert.throws(function() { zimage({ width: 300 }); }, Error)
  });

  it('supports ssl', function () {
    assert.equal(zimage({
      url: 'http://example.com/image.jpg',
      width: 200,
      secure: true
    }), 'http://zimage.global.ssl.fastly.net/?url=http://example.com/image.jpg&w=200');
  });
});
