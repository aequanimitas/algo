function Preference(list) {
  this.list = list;
}

Preference.prototype = {
  highest: function () {
    return this.list[this.list.length - 1];
  }
}

module.exports = Preference;
