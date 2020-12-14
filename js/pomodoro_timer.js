let displayTime = document.getElementById("timer")
let alarmElement = document.getElementById("alarm")
let callsForTodayElement = document.getElementById("callsForToday")
let descriptionOfCallElement = document.getElementById("descriptionOfCall")
let anotherTaskElement = document.getElementById("anotherTask")
let timeOfDayElement = document.getElementById("timeOfDay")

let taskForDayElement = document.getElementById("taskForDay")

let clearValue;

let countDownSeconds = 30*60;

function countDownTimer(){
    let timeFormat;
    if (countDownSeconds === 1) {
        clearInterval(clearValue)  
        alarmElement.play()
    }
        countDownSeconds--
        timeFormat =`${Math.floor(countDownSeconds/60)} MINUTES : ${countDownSeconds%60} SECONDS`
        console.log(timeFormat)
        displayTime.textContent = timeFormat

        return countDownSeconds
                
}
    //1000 is the fixed time which delay the call and it is measured in miliseconds
    clearValue = setInterval(countDownTimer, 1000)

//this function will fetch data from the input field
function getTask(){
    let callValue = callsForTodayElement.value
    let descriptionValue = descriptionOfCallElement.value
    let anotherValue = anotherTaskElement.value
    let timeOfDayValue = timeOfDayElement.value

    savedInTheDB(callValue, descriptionValue, anotherValue, timeOfDayValue)
}

//this function will insert data from the input field

function savedInTheDB(callValue, descriptionValue, anotherValue, timeOfDayValue) {
    let objectForm = {
        "call" : callValue,
        "description" : descriptionValue,
        "otherTasks"  : anotherValue,
        "timeOfEvent" : timeOfDayValue
    }

    //this will get the size/length of entries/items in the localStorage(DB)
    const currentLocalStorageSize = localStorage.length

    //this will push stuff/text into the DB(localStorage)
    localStorage.setItem(currentLocalStorageSize + 1, objectForm)

    console.log(objectForm)
    
}

function addTask() {

    for (let key in localStorage) {
        let listElement = document.createElement("li")
        listElement.textContent = localStorage.getItem(key)
        taskForDayElement.appendChild(listElement)
    }
}
addTask()
