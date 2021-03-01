const test = require('ava')
const zcePage = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => zcePage(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(zcePage('w'), 'w@zce.me')
  t.is(zcePage('w', { host: 'wedn.net' }), 'w@wedn.net')
})
