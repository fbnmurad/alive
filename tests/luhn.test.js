const assert = require('assert');
const { calcLuhn, validarLuhn } = require('../luhn');

try {
  assert.strictEqual(calcLuhn('7992739871'), 3);
  const validNumber = '79927398713';
  assert.strictEqual(validarLuhn(validNumber), true);
  const invalidNumber = '79927398714';
  assert.strictEqual(validarLuhn(invalidNumber), false);
  console.log('All tests passed');
} catch (err) {
  console.error('Test failed');
  console.error(err.message);
  process.exit(1);
}
