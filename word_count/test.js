var assert = require("assert"),
    wc     = require("./word_count");

function it(message, cb) {
  try {
    cb()
  } catch (e) {
    console.log(message);
  }
}

it("should return the proper word count", function () {
  assert.equal(wc("hi!").size, 1, "Should be equal");
  assert.equal(wc("hi world").size, 2, "Should be equal");
});
