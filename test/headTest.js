const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});