import test from 'ava'

const version = require('../src')

test('checkVersion()', t => {
  t.is(version.check('0.0.1'), true)
})
