export{};

type Car = {
    name: string;
    model: number;
  };
   
  function greet(car: Car) {
    car.name="suzuki"
    return "Hello " + car.name;
  }


