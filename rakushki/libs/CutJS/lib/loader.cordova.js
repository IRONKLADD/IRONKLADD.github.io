/*
 * CutJS
 * Copyright (c) 2015 Ali Shakiba, Piqnt LLC
 * Available under the MIT license
 * @license
 */

var Cut = require('./core');

if (typeof DEBUG === 'undefined')
  DEBUG = true;

/**
 * Cordova/PhoneGap loader with FastContext support.
 */

if (typeof FastContext === 'undefined') {
  FastContext = window.FastContext;
}

window.addEventListener('load', function() {
  DEBUG && console.log('On load.');
  // var readyTimeout = setTimeout(function() {
  // DEBUG && console.log('On deviceready timeout.');
  // Cut.start();
  // }, 2000);

  document.addEventListener('deviceready', function() {
    DEBUG && console.log('On deviceready.');
    // clearTimeout(readyTimeout);
    Cut.start({
      'app-loader' : AppLoader,
      'image-loader' : ImageLoader
    });
  }, false);

  document.addEventListener('pause', function() {
    Cut.pause();
  }, false);

  document.addEventListener('resume', function() {
    Cut.resume();
  }, false);
}, false);

function AppLoader(app, configs) {
  configs = configs || {};
  var canvas = configs.canvas, context = null, full = false;
  var width = 0, height = 0, ratio = 1;

  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas) {
    canvas = document.getElementById('cutjs');
  }

  if (!canvas) {
    full = true;
    DEBUG && console.log('Creating element...');
    canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    var body = document.body;
    body.insertBefore(canvas, body.firstChild);
  }

  context = canvas.getContext('2d', {
    fastcontext : true
  });

  context.isFast = !!context.isFast;

  full = full || context.isFast;

  DEBUG && console.log('FastContext: ' + context.isFast);

  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio = context.webkitBackingStorePixelRatio
      || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio
      || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  ratio = devicePixelRatio / backingStoreRatio;

  var requestAnimationFrame = window.requestAnimationFrame
      || window.msRequestAnimationFrame || window.mozRequestAnimationFrame
      || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame
      || function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };

  DEBUG && console.log('Creating root...');
  var root = new Cut.Root(requestAnimationFrame, render);

  function render() {
    if (context.isFast) {
      context.clear();
      context.setTransform(1, 0, 0, 1, 0, 0);
    } else {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, width, height);
    }
    root.render(context);
  }

  root.background = function(color) {
    if (context.isFast) {
      context.setBackgroundColor && context.setBackgroundColor(color);
    } else {
      canvas.style.backgroundColor = color;
    }
    return this;
  };

  app(root, canvas);

  resize();
  window.addEventListener('resize', resize, false);
  window.addEventListener('orientationchange', resize, false);

  function resize() {

    if (full) {
      // screen.availWidth/Height?
      width = (window.innerWidth > 0 ? window.innerWidth : screen.width);
      height = (window.innerHeight > 0 ? window.innerHeight : screen.height);

      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

    } else {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
    }

    width *= ratio;
    height *= ratio;

    if (canvas.width === width && canvas.height === height) {
      return;
    }

    canvas.width = width;
    canvas.height = height;

    DEBUG && console.log('Resize: ' + width + ' x ' + height + ' / ' + ratio);

    root.viewport(width, height, ratio);

    render();
  }
}

function ImageLoader(src, handleComplete, handleError) {
  DEBUG && console.log('Loading image: ' + src);
  if (FastContext) {
    return FastContext.createImage(src, handleComplete, handleError);
  } else {
    var image = new Image();
    image.onload = handleComplete;
    image.onerror = handleError;
    image.src = src;
    return image;
  }
}
