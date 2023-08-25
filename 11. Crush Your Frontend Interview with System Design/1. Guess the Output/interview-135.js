const animal = {
    animal_name: "cat",
    action: function () {
      console.log(`${this.animal_name} is doing action`);
    }
  };
  
  let func = animal.action.bind(animal);
  setTimeout(func, 1000);
  