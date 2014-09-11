function M(stat,preference_list,symbol,has_proposed) {
  this.stat = stat;
  this.preference_list = preference_list;
  this.symbol = symbol;
}

var M_SET = [];
M_SET.push(new M("free",["w3","w1","w2"],"m1", false));
M_SET.push(new M("free",["w2","w1","w3"],"m2", false));
M_SET.push(new M("free",["w2","w3","w1"],"m3", false));

function gs_algo (pairings) {
  return 0;
}

function all_men_free(m,ct) {
  if (ct === m.length) {
    return false;
  } else {
    if (m[ct].stat === "free") return true;
    all_men_free(m, ct += 1);
  }
}

console.log(all_men_free(M_SET, 0));
