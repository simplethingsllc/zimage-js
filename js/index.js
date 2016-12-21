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
  var httpsUrl = 'http://zimage.global.ssl.fastly.net/';

  function generateUrl(options) {
    if (typeof options.url !== 'string') {
      throw new Error('url required');
    }

    var params = ['url=' + options.url];
    for (var key in supported) {
      if (hasOwn.call(options, key) && options[key]) {
        params.push(supported[key] + '=' + options[key]);
      }
    }
    var url;
    if (options.secure) {
      url = httpsUrl;
    } else if (typeof window !== 'undefined') {
      url = (window.location.href.indexOf('https://') === 0) ? httpsUrl : httpUrl;
    } else {
      url = httpUrl;
    }
    return url + '?' + params.join('&');
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = generateUrl;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define('zimage', [], function () {
      return generateUrl;
    });
  } else {
    window.zimage = generateUrl;
  }
}());
