var assert = require("assert"), 
    Preference = require("./preference");

var m1pref = new Preference(["w1","w2","w3"]);
assert.equal(true, m1pref.list.length > 0, "Preference.list should be an array, proved by the length property");

assert.equal(m1pref.highest(), "w3", "Last element should be highest preference");
