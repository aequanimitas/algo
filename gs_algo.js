(function () {

  function Fiancee(sender, receiver) {
    this.sender = sender;
    this.receiver = receiver;
  }

  function H(preference_list,symbol) {
    this.preference_list = preference_list;
    this.symbol = symbol;
  }
  
  var M_SET = [], M_SET_MARRIED = [];
  M_SET.push(new H(["w3","w1","w2"],"m1"));
  M_SET.push(new H(["w2","w1","w3"],"m2"));
  M_SET.push(new H(["w2","w3","w1"],"m3"));  

})();
