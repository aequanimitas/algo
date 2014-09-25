// create an array of 5 Jobs, with 
// j1 = november, december
// j2 = october, december
// j3 = september, october
// j4 = september,  

var MovieSchedule = (function (){
  function Job(startpoint, endpoint) {
    this.startpoint = new Date(startpoint);
    this.endpoint = new Date(endpoint);
  }

  var j1 = new Job("September 11 2014", "October 3 2014");
  console.log((j1.endpoint - j1.startpoint));
})();


