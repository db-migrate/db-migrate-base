const { test } = require('node:test');
const assert = require('node:assert');
const Base = require('..');

const Driver = Base.extend({
  init: function () {
    this._super({ mod: { log: { warn: () => {} }, type: {} } });
    this.calls = [];
  },

  runSql: function (sql, params) {
    this.calls.push([sql, params]);
    return Promise.resolve();
  }
});

const insert = (...args) => {
  const db = new Driver();
  return db.insert('t', ...args).then(() => db.calls);
};

test('columns and one row', async () => {
  assert.deepStrictEqual(await insert(['a', 'b'], [1, 'x']), [
    ['INSERT INTO "t" ("a", "b") VALUES (?, ?)', [1, 'x']]
  ]);
});

test('columns and several rows', async () => {
  assert.deepStrictEqual(await insert(['a', 'b'], [[1, 2], [3, 4]]), [
    ['INSERT INTO "t" ("a", "b") VALUES (?, ?), (?, ?)', [1, 2, 3, 4]]
  ]);
});

test('one object', async () => {
  assert.deepStrictEqual(await insert({ a: 1, b: null }), [
    ['INSERT INTO "t" ("a", "b") VALUES (?, ?)', [1, null]]
  ]);
});

test('objects grouped by their columns, in order', async () => {
  assert.deepStrictEqual(
    await insert([{ a: 1 }, { a: 2, b: 3 }, { a: 4 }]),
    [
      ['INSERT INTO "t" ("a") VALUES (?), (?)', [1, 4]],
      ['INSERT INTO "t" ("a", "b") VALUES (?, ?)', [2, 3]]
    ]
  );
});

test('columns and data', async () => {
  assert.deepStrictEqual(
    await insert({ columns: ['a', 'b'], data: [1, 2, 3, 4] }),
    [['INSERT INTO "t" ("a", "b") VALUES (?, ?), (?, ?)', [1, 2, 3, 4]]]
  );
});

test('objects and arrays as JSON, dates and buffers as they are', async () => {
  const date = new Date(0);
  const buffer = Buffer.from('x');
  const [[, params]] = await insert(['a', 'b', 'c', 'd', 'e'], [
    { x: 1 },
    [1, 2],
    date,
    buffer,
    undefined
  ]);
  assert.deepStrictEqual(params, ['{"x":1}', '[1,2]', date, buffer, null]);
});

test('many rows in batches', async () => {
  const rows = Array.from({ length: 1000 }, (_, i) => [i, i]);
  const calls = await insert(['a', 'b'], rows);
  assert.deepStrictEqual(
    calls.map(([, params]) => params.length),
    [998, 998, 4]
  );
});

test('no rows, no statement', async () => {
  assert.deepStrictEqual(await insert([]), []);
  assert.deepStrictEqual(await insert(['a'], []), []);
});

test('rows not matching the columns', async () => {
  await assert.rejects(insert(['a', 'b'], [1]), /number of columns/);
  await assert.rejects(
    insert({ columns: ['a', 'b'], data: [1, 2, 3] }),
    /number of columns/
  );
});

test('callback', (t, done) => {
  new Driver().insert('t', { a: 1 }, err => done(err));
});

test('unknown types keep their quoted parts', () => {
  const db = new Driver();
  assert.strictEqual(db.mapDataType("enum('a', 'B', 'it''s')"), "ENUM('a', 'B', 'it''s')");
  assert.strictEqual(db.mapDataType('tinyint'), 'TINYINT');
});
