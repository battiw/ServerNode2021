class Staff {
  constructor(options) {
    this.plant = options.plant;
    this.name = options.name;
    this.position = options.position;
    this.rate = options.rate;
    this.hours = 8;
  }
  salary() {
    return this.rate * this.hours;
  }
  saySalary() {
    console.log(
      ` ${this.position} ${this.name} завода ${
        this.plant
      } зарабатывает ${this.salary()}`
    );
  }
}

class Manager extends Staff {
  constructor(options, bonus, arr) {
    super(options);
    this.bonus = bonus;
    this.arr = arr;
  }

  salary() {
    return this.rate * this.hours * this.bonus;
  }
}
class Director extends Manager {
  constructor(options, bonus, arr, superbonus) {
    super(options, bonus, arr);
    this.superbonus = superbonus;
  }
  salary() {
    return this.rate * this.hours * this.bonus * this.superbonus;
  }
}

function clickMeSearchAll() {
  fetch("http://localhost:8000/searchAll")
    .then(
      (response) => response.json(),
      (err) => console.log("Not")
    )
    .then((searchdataAll) => {
      console.log(searchdataAll);
      console.log(typeof searchdataAll); // получаем объект

      for (obj of searchdataAll) {
        let name = document.createElement("div");
        let plant = document.createElement("div");
        let position = document.createElement("div");
        let rate = document.createElement("div");

        let b = document.getElementById("sall");
        name.innerHTML = obj.name;
        plant.innerHTML = obj.plant;
        position.innerHTML = obj.position;
        rate.innerHTML = obj.rate;
        b.after(name);
        b.after(plant);
        b.after(position);
        b.after(rate);
        console.log(obj.name);
      }
    });
}
function clickMeSearch() {
  let positionsearch1 = document.getElementById("positionsearch");
  let positionsearch = positionsearch1.value;
  let plantSearch = document.getElementById("plantSearch");
  let nameSearch = document.getElementById("nameSearch");
  if (positionsearch == "staff") {
    staff1 = new Staff({
      plant: plantSearch.value,
      name: nameSearch.value,
    });

    fetch("http://localhost:8000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(staff1),
    })
      .then(
        (response) => response.json(),
        (err) => console.log("Not")
      )
      .then((outdata) => {
        console.log(outdata);
        console.log(typeof outdata);
        let obj1 = outdata;
        console.log(typeof obj1);
        if (obj1 === typeof "String") {
          let nameString = document.createElement("div");
          let b = document.getElementById("sperson");
          nameString.innerHTML = outdata;
          b.after(nameString);
        } else {
          let nameS = document.createElement("div");
          let plantS = document.createElement("div");
          let positionS = document.createElement("div");
          let rateS = document.createElement("div");

          let b = document.getElementById("sperson");
          nameS.innerHTML = obj1.name;
          plantS.innerHTML = obj1.plant;
          positionS.innerHTML = obj1.position;
          rateS.innerHTML = obj1.rate;
          b.after(nameS);
          b.after(plantS);
          b.after(positionS);
          b.after(rateS);
        }
      });
  } else if (positionsearch == "manager") {
    // let plantSearch = document.getElementById("plantSearch");
    // let nameSearch = document.getElementById("nameSearch");
    manager1 = new Manager(
      {
        plant: plantSearch.value,
        name: nameSearch.value,

        rate: 500,
      },
      567,
      [],
      3456
    );
    fetch("http://localhost:8000/searchmanager", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(manager1),
    })
      .then(
        (response) => response.json(),
        (err) => console.log("Not")
      )
      .then((outdata) => {
        console.log(outdata);
        console.log(typeof outdata);
        let obj1 = outdata;
        console.log(typeof obj1);
        if (obj1 === typeof "String") {
          let nameString = document.createElement("div");
          let b = document.getElementById("sperson");
          nameString.innerHTML = outdata;
          b.after(nameString);
        } else {
          let nameS = document.createElement("div");
          let plantS = document.createElement("div");
          let positionS = document.createElement("div");
          let rateS = document.createElement("div");

          let b = document.getElementById("sperson");
          nameS.innerHTML = obj1.name;
          plantS.innerHTML = obj1.plant;
          positionS.innerHTML = obj1.position;
          rateS.innerHTML = obj1.rate;
          b.after(nameS);
          b.after(plantS);
          b.after(positionS);
          b.after(rateS);
        }
      });
  } else {
    console.log("NOT");
  }
}
