var word_count = function (chunk) {
  var hash = {};
  function init() {
    var the_keys = chunk.split(" "), ct = the_keys.length -1;
    while (ct >= 0) {
      if (hash[the_keys] && hash[the_keys > 0]) {
        hash[the_keys[ct]] += 1;
      } else {
        hash[the_keys[ct]] = 1;
      }
      ct -= 1;
    }
  }

  function hash_size() {
    var hash_size = 0;
    for (key in hash) {
      if (hash.hasOwnProperty(key)) hash_size += 1;
    }
    return hash_size;
  }
  init();
  return {
    "size": hash_size(),
    "hash": hash
  }
}

module.exports = word_count;
