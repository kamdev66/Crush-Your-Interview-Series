const animal = {
    animal_name: "cat",
    action: function () {
      console.log(`${this.animal_name} is doing action`);
    }
  };
  
  setTimeout(animal.action, 1000);
  