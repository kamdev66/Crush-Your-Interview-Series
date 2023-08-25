function animal(){
    console.log("Cat");
  }
  
  var otherAnimal;
  
  animal();
  otherAnimal();
  
  otherAnimal = function() {
    console.log("Dog");
  }