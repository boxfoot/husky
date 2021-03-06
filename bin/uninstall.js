// Run when package is uninstalled
var husky = require('../src/')
var hooks = require('../src/hooks.json')

console.log('\033[4;36m%s\033[0m', 'husky')
console.log('uninstalling')

husky.hooksDir(function(err, dir) {
  if (!err) {
    hooks.forEach(function (hook) {
      husky.remove(dir, hook)
    })
    console.log('done\n')
  }
})
