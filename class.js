let arreyPlant = [];
let arreyPlantManager = [];

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

let positioninput;
function clickMe() {
  positioninput = document.getElementById("position");
  console.log(positioninput);

  //создаем вводную форму
  if (positioninput.value == "director") {
    //создаем пояснение
    let clarifications = document.createTextNode("Введите данные директора");
    document.body.append(clarifications);

    //создаем форму ввода  предприятия
    let plant = document.createElement("input");
    plant.id = "plant";
    plant.placeholder = "plant";
    document.body.append(plant);

    // создаем форму ввода имени
    let name = document.createElement("input");
    name.id = "name";
    name.placeholder = "name";
    document.body.append(name);

    // создаем кнопку
    let buttondir = document.createElement("button");
    buttondir.id = "inputdir";
    buttondir.innerHTML = "DIRECTOR OK";
    buttondir.setAttribute("onclick", "clickMe1();");
    document.body.append(buttondir);

    //продолжаем на менеджера
  } else if (positioninput.value == "manager") {
    let clarifications1 = document.createTextNode("Введите данные менеджера");
    document.body.append(clarifications1);

    //создаем форму ввода  предприятия
    let plant1 = document.createElement("input");
    plant1.id = "plant1";
    plant1.placeholder = "plantmanager";
    document.body.append(plant1);

    // создаем форму ввода имени
    let name1 = document.createElement("input");
    name1.id = "name1";
    name1.placeholder = "namemanager";
    document.body.append(name1);

    // создаем кнопку
    let buttonmanager = document.createElement("button");
    buttonmanager.id = "inputmen";
    buttonmanager.innerHTML = "MANAGER OK";
    buttonmanager.setAttribute("onclick", "clickMe4();");
    document.body.append(buttonmanager);
  } else if (positioninput.value == "staff") {
    let clarifications2 = document.createTextNode("Введите данные работника");
    let staffInput = document.getElementById("staffinput");
    staffInput.append(clarifications2);

    // создаем кнопку
    let buttonstaff = document.createElement("button");
    buttonstaff.id = "inputstaff";
    buttonstaff.innerHTML = "STAFF OK";
    buttonstaff.setAttribute("onclick", "clickMe7();");
    staffInput.after(buttonstaff);

    // создаем форму ввода должности
    let position2 = document.createElement("input");
    position2.id = "position2";
    position2.placeholder = "position";
    staffInput.after(position2);

    // создаем форму ввода имени
    let name2 = document.createElement("input");
    name2.id = "name2";
    name2.placeholder = "namestaff";
    staffInput.after(name2);

    //создаем форму ввода  предприятия
    let plant2 = document.createElement("input");
    plant2.id = "plant2";
    plant2.placeholder = "plantstaff";
    staffInput.after(plant2);
  } else {
    let clarifications4 = document.createTextNode(
      "ERROR некорректный ввод данных"
    );
    document.body.append(clarifications4);
    console.log("неправельный ввод данных");
    return;
  }
}
let director;
function clickMe1() {
  let plantinput = document.getElementById("plant");

  let nameinput = document.getElementById("name");

  // if (positioninput.value == "director") {
  director = new Director(
    {
      plant: plantinput.value,
      name: nameinput.value,
      position: positioninput.value,
      rate: 500,
    },
    567,
    [],
    3456
  );
  console.log("director");
  arreyPlant.push(director);
  console.log(arreyPlant);
  console.log(director.salary());
  console.log(director.saySalary());

  //создаем пояснение
  let subordinates = document.createTextNode("Введите колличество подчиненных");
  document.body.append(subordinates);

  // создаем вводную форму
  let subordinates1 = document.createElement("input");
  subordinates1.id = "subordinates1";
  document.body.append(subordinates1);

  // создаем кнопку
  let button1 = document.createElement("button");
  button1.id = "inputsubordinates";
  button1.innerHTML = "OK";
  button1.setAttribute("onclick", "clickMe2();");
  document.body.append(button1);
}

//создаем массив куда будут записываться создаваемые инпуты
let arrInput = [];

// создаем необходимое колличество импутов подчиненных директору
function clickMe2() {
  let inputnow = document.getElementById("subordinates1");
  if (inputnow.value) {
    let a = +inputnow.value;
    for (let i = 1; i <= a; i++) {
      let subordinatesnow = document.createElement("input");
      subordinatesnow.id = "input" + i;
      subordinatesnow.type = "input";
      subordinatesnow.className = "input";

      document.body.append(subordinatesnow);
      arrInput.push(subordinatesnow.id);
    }

    console.log(a);
    console.log(typeof a);
    console.log("ok");
  }

  // создаем кнопку для ввода менеджера как подчиненого директора
  let button2 = document.createElement("button");
  button2.id = "inputsubordinates2";
  button2.innerHTML = "SUB";
  button2.setAttribute("onclick", "clickMe3();");
  document.body.append(button2);
  console.log(arrInput);
}

// создаем менеджера как подчиненого директора и добовляем его в массив директора
function clickMe3() {
  let arrSub = [];
  for (elems of arrInput) {
    let nameinput3 = document.getElementById(elems);
    console.log(nameinput3.id);

    let manager = new Manager(
      {
        // plant: plantinput.value,
        name: nameinput3.value,
        // position: positioninput.value,
        rate: 17,
      },
      123,
      []
    );
    arrSub.push(manager);
  }
  console.log(arrSub); // массив менеджеров подчиненных директору
  console.log(director);
  director.arr.push(arrSub);

  fetch("http://localhost:8000/datawritedirector", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(director),
  })
    .then(
      (response) => response.json(),
      (err) => console.log("Not")
    )

    .then((response) => response.text())
    .then((inf) => {
      let inp = document.getElementById("ib");
      let divib = document.createElement("div");
      divib.className = ib;
      divib.innerText = inf;
      inp.after(divib);
      console.log(inf);
      console.log(typeof inf);
    });
}

//МЕНЕДЖЕР

// создаем менеджера
let manager;
function clickMe4() {
  let plantinput4 = document.getElementById("plant1");

  let nameinput4 = document.getElementById("name1");

  // if (positioninput.value == "director") {
  manager = new Manager(
    {
      plant: plantinput4.value,
      name: nameinput4.value,
      // position: positioninput.value,
      rate: 500,
    },
    567,
    [],
    3456
  );

  arreyPlantManager.push(manager);

  //создаем пояснение
  let subordinates = document.createTextNode(
    "Введите колличество подчиненных рабочих"
  );
  document.body.append(subordinates);

  // создаем вводную форму
  let subordinates1 = document.createElement("input");
  subordinates1.id = "subordinates1";
  document.body.append(subordinates1);

  // создаем кнопку
  let button1 = document.createElement("button");
  button1.id = "inputsubordinates";
  button1.innerHTML = "OK";
  button1.setAttribute("onclick", "clickMe5();");
  document.body.append(button1);
}
let arrInput1 = [];

// создаем необходимое колличество импутов подчиненных менеджеру
function clickMe5() {
  let inputnow = document.getElementById("subordinates1");
  if (inputnow.value) {
    let a = +inputnow.value;
    for (let i = 1; i <= a; i++) {
      let subordinatesnow = document.createElement("input");
      subordinatesnow.id = "input" + i;
      subordinatesnow.type = "input";
      subordinatesnow.className = "input";

      document.body.append(subordinatesnow);
      arrInput1.push(subordinatesnow.id);
    }

    console.log(a);
    console.log(typeof a);
    console.log("ok");
  }
  // создаем кнопку для ввода рабочего  как подчиненого менеджера
  let button5 = document.createElement("button");
  button5.id = "inputsubordinates2";
  button5.innerHTML = "STAFF";
  button5.setAttribute("onclick", "clickMe6();");
  document.body.append(button5);
  console.log(arrInput1);
}

// создаем рабочего как подчиненого менеджера и добовляем его в массив менеджера
let staffSub;
function clickMe6() {
  let arrSub1 = [];
  for (elems of arrInput1) {
    let nameinput6 = document.getElementById(elems);
    console.log(nameinput6.id);

    staffSub = new Staff({
      // plant: plantinput.value,
      name: nameinput6.value,
      // position: positioninput.value,
      rate: 8,
      hours: 8,
    });
    arrSub1.push(staffSub);
  }
  manager.arr.push(arrSub1);
  console.log(arrSub1); // массив рабочих подчиненных директору
  console.log(manager);

  fetch("http://localhost:8000/datawritemanager", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(manager),
  })
    .then(
      (response) => response.json(),
      (err) => console.log("Not")
    )

    .then((response) => response.text())
    .then((inf) => {
      let inp = document.getElementById("ib");
      let divib = document.createElement("div");
      divib.className = ib;
      divib.innerText = inf;
      inp.after(divib);
      console.log(inf);
      console.log(typeof inf);
    });
}

//РАБОТНИК

// создаем работника
function clickMe7() {
  let plantinput7 = document.getElementById("plant2");
  let nameinput7 = document.getElementById("name2");
  let positioninput7 = document.getElementById("position2");

  staff = new Staff({
    plant: plantinput7.value,
    name: nameinput7.value,
    position: positioninput7.value,
    rate: 8,
    hours: 8,
  });
  console.log("staff");
  arreyPlant.push(staff);
  console.log(arreyPlant);
  console.log(staff.salary());
  staff.saySalary();

  fetch("http://localhost:8000/datawrite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(staff),
  })
    .then((response) => response.text())
    .then((inf) => {
      let inp = document.getElementById("ib");
      let divib = document.createElement("div");
      divib.className = ib;
      divib.innerText = inf;
      inp.after(divib);
      console.log(inf);
      console.log(typeof inf);
    });
}
