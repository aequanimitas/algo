(function () {

  function H(preference_list,code_name) {
    this.preference_list = preference_list;
    this.code_name = code_name;
  }
  
  var M_SET = [], W_SET = [], M_SET_MARRIED = [];
  M_SET.push(new H(["w3","w1","w2"],"m1"));
  M_SET.push(new H(["w2","w1","w3"],"m2"));
  M_SET.push(new H(["w2","w3","w1"],"m3"));  
  W_SET.push(new H(["m3","m1","m2"],"w1"));
  W_SET.push(new H(["m2","m1","m3"],"w2"));
  W_SET.push(new H(["m2","m3","m1"],"w3"));

})();
