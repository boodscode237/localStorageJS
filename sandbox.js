// store data in LS

localStorage.setItem('name', 'Brido')
localStorage.setItem('age', 14)
    // get data from LS
let name = localStorage.getItem('name')
let age = localStorage.getItem('age')
console.log(name, age)

// update from LS
localStorage.setItem("name", "donny")
name = localStorage.getItem('name')
age = localStorage.age = '24'
console.log(name, age)

// delete from local storage

// localStorage.removeItem('name')
localStorage.clear()