/* ----------Lev 1_1----------- */
let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800); 
let date4 = new Date(86400000);

document.querySelector('#simpleTasks').innerHTML += `<h3>---------Lev 1_1----------</h3>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${date1}</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${date2}</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${date3}</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${date4}</p>`;

/* ----------Lev 1_2----------- */
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

document.querySelector('#simpleTasks').innerHTML += `<h3>---------Lev 1_2----------</h3>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${new Date()}</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${new Date().getFullYear()}</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${new Date().getMonth()} Monat</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${new Date().getDate()} Tag</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${new Date().getHours()} Stunde</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${new Date().getMinutes()} Stunde</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${wochenTag[new Date().getDay()]}</p>`;
document.querySelector('#simpleTasks').innerHTML += `<p>${monate[new Date().getMonth()]}</p>`;

/* ----------Clock----------- */
document.querySelector('#simpleTasks').innerHTML += `<h3>---------Clock----------</h3>`;

function clock() {
    let clockTime = `${(new Date().getHours() <= 9) ? `0${new Date().getHours()}` : `${new Date().getHours()}`}:${(new Date().getMinutes() <= 9) ? `0${new Date().getMinutes()}` : `${new Date().getMinutes()}`}:${(new Date().getSeconds() <= 9) ? `0${new Date().getSeconds()}` : `${new Date().getSeconds()}`}`;
    document.querySelector('.digits').innerHTML = clockTime;
    
    let ampm = (new Date().getHours() < 12)? "AM" : "PM";
    document.querySelector('.ampm').innerHTML = ampm;
    
    let weekday = "";
    switch(new Date().getDay()) {
        case 0:
            weekday = `MON TUE WED THU FRI SAT <span>SUN</span>`;
            break;
        case 1:
            weekday = `<span>MON</span> TUE WED THU FRI SAT SUN`;
            break;
        case 2:
            weekday = `MON <span>TUE</span> WED THU FRI SAT SUN`;
            break;
        case 3:
            weekday = `MON TUE <span>WED</span> THU FRI SAT SUN`;
            break;
        case 4:
            weekday = `MON TUE WED <span>THU</span> FRI SAT SUN`;
            break;
        case 5:
            weekday = `MON TUE WED THU <span>FRI</span> SAT SUN`;
            break;
        case 6:
            weekday = `MON TUE WED THU FRI <span>SAT</span> SUN`;
            break;
        case 7:
            weekday = `MON TUE WED THU FRI SAT <span>SUN</span>`;
            break;
    };

    document.querySelector('.weekdays').innerHTML = weekday;
    setTimeout(function(){ clock() }, 1000);
}

clock();



/* ----------Lev 1_3----------- */
document.querySelector('#moreTasks').innerHTML += `<h3>---------Lev 1_3----------</h3>`;
let date5 = new Date();
date5.setFullYear(2222);
date5.setDate(23);
date5.setMonth(9);
document.querySelector('#moreTasks').innerHTML += `<p>${date5}</p>`;

let date6 = new Date();
date6.setFullYear(2123);
date6.setDate(24);
date6.setMonth(1);
document.querySelector('#moreTasks').innerHTML += `<p>${date6}</p>`;

let date7 = date6;
date7.setMonth(2);
document.querySelector('#moreTasks').innerHTML += `<p>${date7}</p>`;

let date8 = date7;
date8.setDate(3);
document.querySelector('#moreTasks').innerHTML += `<p>${date8}</p>`;

let date9 = new Date();
date9.setDate(date9.getDate() + 30);
document.querySelector('#moreTasks').innerHTML += `<p>${date9}</p>`;

/* ----------Lev 1_5----------- */
console.log("-------------Lev 1_5-------------");
function monatsName(date) {
    let date10 = new Date(date);
    let monthName = monate[date10.getMonth()];
    return monthName;
}

console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli

/* ----------Lev 1_6----------- */
console.log("-------------Lev 1_6-------------");

let date11 = new Date(1999, 10, 5, 15); //PM
let date12 = new Date();
let date13 = new Date(2019, 12, 3, 12) //PM
let date14 = new Date(2000, 1, 1, 11) //AM

function ampm(date) {
    let ampm = "";
    (date.getHours() < 12)? ampm = "am" : ampm = "pm";
    return ampm;
}

console.log(ampm(date11));
console.log(ampm(date12));
console.log(ampm(date13));
console.log(ampm(date14));

/* ----------Lev 2_1----------- */
document.querySelector('#moreTasks').innerHTML += `<h3>---------Lev 2_1----------</h3>`;
let currentDate = `${(new Date().getDate() <= 9) ? `0${new Date().getDate()}` : `${new Date().getDate()}`}-${(new Date().getMonth() <= 9) ? `0${new Date().getMonth()}` : `${new Date().getMonth()}`}-${new Date().getFullYear()}`;
document.querySelector('#moreTasks').innerHTML += currentDate;