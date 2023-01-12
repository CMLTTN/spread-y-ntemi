// REST operatoru kullanici tarafindan girilen degerleri dizi
// //? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

// //! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
// //!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
const autos = ["anadol", "reno", "bmw", "mercedes", "ferrari"]

const [x, y, ...restAuto] = autos
console.log(x,y, restAuto);

const personel = {

    pName:"john",
    surname:"smith",
    job:"developer",
    age:33,
}
const {age, ...fullName} =personel
console.log(age,)
console.log(fullName);

const sum = (a,b)=> a+b
console.log("SUM:", sum(2,4,6));
const sumAll = (numbers)=>{
console.log(numbers);

}
console.log("SUM:",sumAll(2,4,6,8));
const sumAll1 = (...numbers) => {
  //! bireysel degerleri bir array'e cevirdi.
  //? non-iterable -> iterable
  console.log(numbers) //? (4) [2, 4, 6, 8]
  return numbers.reduce((s, v) => s + v, 0)
}

console.log("SUM:", sumAll(2, 4, 6, 8))

const showName = (name, surname, ...titles) => {
  console.log(titles)
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`
  console.log(summary)
}

showName("noah", "adams", "Developer", "Instr", "Professor", "Dad")

const flayingVehicles = ["aircraft","helicopter","drone"]
const automobile = ["truck", "suv", "car"]
const allVehicles1 = [flayingVehicles,automobile ]
console.log(allVehicles1);
const allVehicles2 = [...flayingVehicles,"at", ...automobile];
console.log(allVehicles2);

let buryan = "Buryan yameği hangi yöreye aittir"
const charBuryan = [...buryan]
console.log(buryan);
console.log(charBuryan);

console.log(Math.max(1,2,33,4,5));
const numbers1 = [3,1,23,49,52,44]
console.log(Math.max(...numbers1));




const myNumbers = [3,5,5,[7,8]]
const herNumbers = [-5, -4, ...myNumbers, -22]
console.log(myNumbers);
console.log(herNumbers);
const hisNumbers = [...herNumbers]
herNumbers.push(-55)
hisNumbers[5][1]= 88
console.log(hisNumbers);
console.log(herNumbers);



const myObj = {a:1, b:2, C:4}
const herObj = {a:2, b:4, C:3}
const copyObj = {...myObj}
console.log(copyObj);
copyObj.a = 44
console.log(myObj);
console.log(copyObj);

const combineObj = { ...herObj,...myObj}
console.log(combineObj);

