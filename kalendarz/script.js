const monthList = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']

let currentDate = new Date()
let year = currentDate.getFullYear()
let monthCounter = currentDate.getMonth()
let weekNum = 0

const monthText = document.querySelector('#monthText')
const yearText = document.querySelector('#yearText')
const heroImg = document.querySelector('.hero-img')

let weeks = []
for (let i=0; i<6; i++) {
     weeks.push(document.querySelector(`.week${i+1}`))
    for (let j=0; j<7; j++){
        weeks[i][j] = (document.querySelector(`.w${i+1}day${j+1}`))
    }
}

// pierwsze wyświetlenie miesiąca
getDaysInMonth(monthCounter, year)
// podświetlenie obecnego dnia
// weeks[1][currentDate.getDate()-2].style.backgroundColor = '#70B7FF'

function bgChange(month){
    heroImg.style.backgroundImage = `url('./images/${month}.jpg')`
}

function enterDays(date, day){
    if (date.getDay() === 0){
        weeks[weekNum][6].innerHTML = day
        weekNum += 1
    } else {
        (weeks[weekNum][(date.getDay())-1]).innerHTML = day
    }
}

function cleanWeeks(){
    for (let i=0; i<6; i++){
        for (let j=0; j<7; j++){
            weeks[i][j].innerHTML = ''
            weeks[i][j].style.backgroundColor = '#fff'
        }
    }
}
 
function getDaysInMonth(month, year){
    bgChange(month)
    monthText.innerHTML = monthList[monthCounter]
    let day = 1
    let date = new Date(year, month, day)
    while (date.getMonth() === month) {
        if (currentDate.getDate() === day && currentDate.getFullYear() === year && currentDate.getMonth() === month) {
            weeks[weekNum][currentDate.getDate()-2].style.backgroundColor = '#70B7FF'
        }
        enterDays(date, day)   
        day += 1
        // zmiana na następny dzień tygodnia:
        date.setDate(date.getDate() + 1)
    }
}

function monthCounterIncrease() {
    weekNum = 0
    cleanWeeks()
    if (monthCounter === 11) {
        monthCounter = 0
        year += 1
        yearText.innerHTML = year
    }
    else {
        monthCounter += 1       
    }
    getDaysInMonth(monthCounter, year)  
}

function monthCounterDecrease() {
    weekNum = 0
    cleanWeeks()
    if (monthCounter === 0) {
        monthCounter = 11
        year -= 1
        yearText.innerHTML = year
    }
    else {
        monthCounter -= 1
    }
    getDaysInMonth(monthCounter, year)
}
