/*!
  Copyright (c) 2016 Simple Things LLC.
  Licensed under the MIT License (MIT)
  See http://docs.zimage.io
*/

/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  var supported = {
    'anchor': 'anchor',
    'blur': 'blur',
    'height': 'h',
    'interpolator': 'interp',
    'flip': 'f',
    'format': 'format',
    'mode': 'mode',
    'quality': 'quality',
    'rotate': 'r',
    'width': 'w'
  };

  var httpUrl = 'http://edge.zimage.io/';
  var httpsUrl = 'https://zimage.global.ssl.fastly.net/';

  function zimage(url, options) {
    var options = options || {};

    if (typeof url !== 'string') {
      throw new Error('url required');
    }

    // Move the hash fragment to the end of the final URL
    var hashIndex = url.indexOf('#');
    var hashFragment = '';
    if (hashIndex > 0) {
      hashFragment = url.substring(hashIndex);
      url = url.substring(0, hashIndex);
    }

    var params = ['url=' + encodeURIComponent(url)];
    for (var key in supported) {
      if (hasOwn.call(options, key) && options[key]) {
        params.push(supported[key] + '=' + options[key]);
      }
    }

    var imageUrl;
    if (hasOwn.call(options, 'secure')) {
      imageUrl = options.secure ? httpsUrl : httpUrl; 
    } else if (typeof window !== 'undefined') {
      imageUrl = (window.location.href.indexOf('https://') === 0) ? httpsUrl : httpUrl;
    } else {
      imageUrl = httpsUrl;
    }
    return imageUrl + '?' + params.join('&') + hashFragment;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = zimage;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define('zimage', [], function () {
      return zimage;
    });
  } else {
    window.zimage = zimage;
  }
}());
