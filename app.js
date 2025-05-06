// alert()

// variable 3 dhoroner,

// 1 .. Var -- ata amra used korbo nha   ,
// 2 .. let -- kunu man poriboirton korle ai ta used korbo,
// 3 .. const -- man poriborton na korle ai ta used korbo ,

//  ler variable diclaration

// let name = "Golap"
// console.log(name)
// name = "Golap Raj"
// console.log(name)

// const variable diclaration

// const name = "golap"
// console.log(name)
// name = "Golap Raj"
// console.log(name)

// if else condison
const number = 20;
// if(number < 10){
//     console.log("iss")
// }
// else{
//     console.log("Noooo")
// }
// if(number <= 20){
//     console.log("iss")
// }
// else{
//     console.log("Noooo")
// if(number < 20 || number >19 ){
//     console.log("iss")
// }
// else{
//     console.log("Noooo")
// }
// if(number < 20 && number >19 ){
//     console.log("iss")
// }
// else{
//     console.log("Noooo")
// }

// Array diclaration

// const friends = ["Golap", "Raj", "Basar", "Simul"];
// for(let i = 0; i < friends.length; i++){
//     console.log(friends[i])
// }
// for (let friend of friends){
//     console.log(friend)
// }
// console.log(friends.slice(2,3))
// console.log(friends.splice(2,3))
// friends.push("Afsana")
// friends.pop()
// friends.unshift("Jibon")
// friends.shift()
// const allFriends = ["hhhh", ...friends]
// console.log(allFriends)
// console.log(friends)
// console.log(friends[0])
// console.log(friends.length)

// function diclaration

// function sum (a, b) {
//     const result = a + b;
//     console.log(result)

// }
// sum(11, 9)

// function sum (a, b) {
//     // console.log("OK")
//     const sum = a + b;
//     console.log(sum)
// }
// sum(10, 20)

// Object diclaration
// const person = {
//     name : "Golap",
//     id : 11,
//     fatherName : "Abdullah"
// }

// console.log(person["name"])
// console.log(person.id)



// tamplate String 

// const name = `amer name 
// tahmid hasan Golap`
// console.log(name)

// const fName = "Tahmid"
// const lName = "Hasan"
// // console.log(fName + " " + lName)
// console.log(`My Name ${fName} ${lName} Golap`)


// regular function & arrow function

// regular function diclaration
// function sum (a,b) {
//     const result = a + b
//     console.log(result)
    
// }
// sum(10, 30)


// arrow function diclaration
// const sum = (a,b) => a + b
//  const result = sum(10,10)
//  console.log(result)


// spared oparator
// const numbers = [10,22, 44, 21, 76]
// // console.log(...numbers)
// console.log(Math.max(...numbers))

// const numbers = [10,22, 44, 21, 76]
// const newArray = [...numbers, 12, 222,1111]
// console.log(newArray)



// array of Object find, filter, forEach

const products = [
        {Namen : "Redmi", Brand : "xaiomi", price : 3000, color : "Black"},
        {Namen : "Sam", Brand : "SamSung", price : 4000, color : "white"},
        {Namen : "Apple1", Brand : "Apple", price : 5000, color : "gold"},
        {Namen : "Apple2", Brand : "Apple", price : 5000, color : "gold"},
        {Namen : "Redmi", Brand : "xaiomi", price : 3000, color : "Black"},
        {Namen : "Redmi2", Brand : "xaiomi", price : 3000, color : "Black"},
    ]

    //  const result = products.map(product => product.price)
    //  console.log(result)
    // const result = products.filter(prduct => prduct.Brand === "Apple")
    // console.log(result)
    // const result = products.find (product => product.Brand === "Apple")
    // console.log(result)
    // const result = products.filter (product => product.price >= 5000)
    // console.log(result)
    // console.log(products)
    // for(let product of products){
    //     console.log(product)
    // }

    // products.forEach(p => console.log(p))