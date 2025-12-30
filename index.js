/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.querySelector("#numberToConvert")
const showLength = document.querySelector("#showLength")
const showVolume = document.querySelector("#showVolume")
const showMass = document.querySelector("#showMass")



let meters = 1
let feet = 3.281

let liter = 1
let gallon = 0.264

let kilogram = 1
let pound = 2.204


function doConversion(){
  
  const inputVal = input.value
  
  meters = (inputVal/3.281).toFixed(2)
  liter = (inputVal* 3.78541).toFixed(2)
  kilogram = (inputVal/ 2.204).toFixed(2)
  
  feet = (inputVal*3.281).toFixed(2)
  gallon = (inputVal*0.264).toFixed(2)
  pound = (inputVal*2.204).toFixed(2)
  
  showLength.textContent = `${inputVal} M = ${feet} ft | ${inputVal} ft = ${meters} M`
  showVolume.textContent = `${inputVal} L = ${gallon} gal | ${inputVal} gal = ${liter} L`
  showMass.textContent = `${inputVal} kilo = ${pound} lbs| ${inputVal} lbs = ${kilogram} kilo`
}
// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
