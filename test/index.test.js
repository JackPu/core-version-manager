import test from 'ava'

const version = require('../src')

test('checkVersion()', t => {
  t.is(version.check('0.0.1'), true)
  t.is(version.check('1.0.1-beta'), true)
  t.is(version.check('-1.0.0'), false)
})

test('next()', t => {
  t.is(version.next('0.0.1'), '0.0.2')
  t.is(version.next('1.0.99'), '1.1.0')
  t.is(version.next('1.99.99'), '2.0.0')
  t.is(version.next('1.1.1'), '1.1.2')
})

test('pre()', t => {
  t.is(version.pre('1.0.1'), '1.0.0')
  t.is(version.pre('2.0.0'), '1.99.99')
  t.is(version.pre('2.1.0'), '2.0.99')
})

test('max()', t => {
  t.is(version.max('0.0.1', '0.0.2'), '0.0.2')
  t.is(version.max('1.0.99', '1.2.99', '0.0.1', '0.2.0'), '1.2.99')
  t.is(version.max('1.2.3', '3.2.1'), '3.2.1')
})

test('compareAB()', t => {
  t.is(version.compareAB('0.0.1', '0.0.2'), -1)
  t.is(version.compareAB('1.4.99', '1.2.99'), 1)
  t.is(version.compareAB('1.2.99', '1.2.99'), 0)
})

test('_getVersionNumber()', t => {
  t.is(version._getVersionNumber('0.0.1-beta'), '0.0.1')
})
