let markHeight = 1.69
let markWeight = 78
let johnHeight = 1.95
let johnWeight = 92

let markBmi = markWeight / (markHeight ** 2)
let johnBmi = johnWeight / Math.pow(johnHeight, 2)

if (markBmi > johnBmi){
    console.log("Mark BMI is higher than John's BMI")
}
else
     console.log("John's BMI is higher than Mark BMI")

