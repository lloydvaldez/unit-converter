/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("num-el")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
const convertEl = document.getElementById("convert-el")

function reset() {
    lengthEl.innerHTML = ""
    volumeEl.innerHTML = ""
    massEl.innerHTML = ""
}

convertEl.addEventListener("click", function handleClick(event) {
    reset()
    let meterLength = (inputEl.value * 3.281).toFixed(3)
    let feetLength = (inputEl.value / 3.281).toFixed(3)
    let literVolume = (inputEl.value * 0.264).toFixed(3)
    let gallonVolume = (inputEl.value / 0.264).toFixed(3)
    let kiloMass = (inputEl.value * 2.204).toFixed(3)
    let poundMass = (inputEl.value / 2.204).toFixed(3)

    lengthEl.innerHTML += `<p>${inputEl.value} meters = ${meterLength} feet | ${inputEl.value} feet = ${feetLength} meters</p>`

    volumeEl.innerHTML += `<p>${inputEl.value} liters = ${literVolume} gallons | ${inputEl.value} gallons = ${gallonVolume} liters</p>`

    massEl.innerHTML += `<p>${inputEl.value} kilos = ${kiloMass} pounds | ${inputEl.value} pounds = ${poundMass} kilos</p>`
})