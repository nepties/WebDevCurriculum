var num = process.argv[2];

console.log(require('./config' + num + '.js'));

require('debug');
