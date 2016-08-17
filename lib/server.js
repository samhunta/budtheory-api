'use strict';

var app = require('./app')({ spoofCookies: false });

app.listen(8886, function () {
  return console.log('App listening on 8886');
});