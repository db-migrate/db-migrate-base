const { test } = require('node:test');
const assert = require('node:assert');
const Base = require('..');

const driver = quote =>
  new (Base.extend({
    init: function () {
      this._escapeString = quote;
      this._super({ mod: { log: {}, type: {} } });
    }
  }))();

test('doubles the quote of strings', () => {
  assert.strictEqual(driver("'").escapeString("it's"), "'it''s'");
  assert.strictEqual(driver('"').escapeString('say "hi"'), '"say ""hi"""');
});
