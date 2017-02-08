'use strict';
var fs = require('fs');
fs.createReadStream('.very-env').pipe(fs.createWriteStream('.env'));