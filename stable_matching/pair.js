function Pair(id, preference_list) {
  this.id = id;
  this.preference_list = preference_list;
}

Pair.prototype = {
  highest_preference: function () {
    return this.preference_list(this.preference_list.length - 1);
  }
}

module.exports = Pair;
