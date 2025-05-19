console.time('calendar-file');

var now = new Date();

var day = now.getDate();
var dayOfTheWeek = now.getDay();
let weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

var monthNumber = now.getMonth();

const  monthsOfTheYear = [{"January":31}, {"February":28}, {"March":31}, {"April":30}, {"May":31}, {"June":30}, {"July":31}, {"August":31}, {"September":30}, {"October":31}, {"November":30}, {"December":31}];

var daysInTheMonth;

var spacing;

var year = now.getFullYear();


var childElements;


function isThisLeapYear(Year) {
        if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {
                monthsOfTheYear[1].February = 29;
        }
}
isThisLeapYear(year);



const numberOfDaysInTheWeek = 7;
var createdElement = "li";
var childElements = document.getElementById("weekdays").getElementsByTagName(createdElement);
for(dayTick = 0; dayTick<numberOfDaysInTheWeek; dayTick++){
        document.getElementById("weekdays").appendChild(document.createElement(createdElement));
        childElements[dayTick].innerHTML = String(weekdays[dayTick]);
}


//var errorCounter;
//transformCalendar()

function update() {

while (document.getElementById("days").firstChild){
        document.getElementById("days").removeChild(document.getElementById("days").firstChild)
}

var month = String(Object.keys(monthsOfTheYear[monthNumber]));



document.getElementById("month&Year").innerHTML = `<ul><li class="prev" onclick="previousCalendar()">&#10094;</li><li class="next" onclick="nextCalendar()">&#10095;</li><li>${month}<br><span style="font-size:18px">${year}</span></li><li class="glow"><span style="font-size:8px;"><br>By Porter Frazier</span></li>`;


transformCalendar();


const colorsOfTheMonth = [{"January":"#99c1dc"}, {"February":"#e0dee3"}, {"March":"#6fc0b1"}, {"April":"#dadeb5"}, {"May":"#cd6766"}, {"June":"#bdda57"}, {"July":"#a6c1e1"}, {"August":"#ffd79d"}, {"September":"#d0be55"}, {"October":"#e79424"}, {"November":"#abb7bb"}, {"December":"#e0e8db"}];


if (monthNumber == now.getMonth()){
        createdElement = "span";
        var day = now.getDate();
        childElements[(day+spacing)-1].innerHTML = `<span class="active glow">${day}</span>`;
        var currentDayStyle = childElements[(day+spacing)-1].firstChild.style;//background: rgba(205,205,205,0.5);
        currentDayStyle.background = eval(`colorsOfTheMonth[monthNumber].${Object.keys(colorsOfTheMonth[monthNumber])}`);
        // currentDayStyle.border = 
        //currentDayStyle.transition = "1s;"
}

var currentMonthStyle = document.getElementById("month&Year").style;
currentMonthStyle.background = eval( `colorsOfTheMonth[monthNumber].${Object.keys(colorsOfTheMonth[monthNumber])}`);
//currentMonthStyle.transition ="1s;"
}



var errorCounter;
function transformCalendar() {
        daysInTheMonth = eval(`monthsOfTheYear[monthNumber].${Object.keys(monthsOfTheYear[monthNumber])}`);
        var createdElement = "li";
        childElements = document.getElementById("days").getElementsByTagName(createdElement);
        errorCounter = 0;
        for(dayTick = -(spacing); dayTick<=(daysInTheMonth+(errorCounter-1)); dayTick++){
                document.getElementById("days").appendChild(document.createElement(createdElement));
                try{childElements[dayTick].innerHTML = String(dayTick-(errorCounter-1));}
                catch(err) {childElements[errorCounter].innerHTML = ""; dayTick = dayTick == -1 ? errorCounter : dayTick; errorCounter++}
        }
}

weekPath = dayOfTheWeek;
weekPath -= (day%numberOfDaysInTheWeek);
weekPath<0 ? weekPath = (weekdays.length - (-weekPath)) : weekPath=weekPath;
spacing = weekPath;
dayOfTheWeek = weekPath+1;


update();

let monthFunctions = {};

monthFunctions.Create = function() {
        var monthData = {
                "daysInTheMonth" : daysInTheMonth,
                "day" : day,
                "weekPath" : weekPath,
                "spacing" : spacing,
                "dayOfTheWeek" : dayOfTheWeek,

        };

        monthFunctions[Object.keys(monthsOfTheYear[monthNumber])] = monthData;
        //return monthFunctions[Object.keys(monthsOfTheYear[monthNumber])];
}

monthFunctions.routeMapping = function () {
        return {
        "add": this.Create
      }
}

monthFunctions.Run = function(Data){
    var runMe = Data[0];
    var mappings = this.routeMapping();
    return mappings[runMe]();
}






for(var i=0;i<monthsOfTheYear.length;i++) {
        if (monthNumber < 1) {
                monthNumber = monthsOfTheYear.length - 1;
                dayOfTheWeek++;
        } else {
                monthNumber--;
        }

        //monthNumber < 1 ? dayOfTheWeek-- : console.log(dayOfTheWeek);
        //monthNumber = monthNumber < 1 ? monthsOfTheYear.length - 1 : monthNumber - 1 ;

        daysInTheMonth = eval(`monthsOfTheYear[monthNumber].${Object.keys(monthsOfTheYear[monthNumber])}`);
        day = daysInTheMonth;
        dayOfTheWeek--;
        weekPath = dayOfTheWeek;
        weekPath -= (day%numberOfDaysInTheWeek);
        weekPath<0 ? weekPath = (weekdays.length - (-weekPath)) : weekPath=weekPath;
        spacing = weekPath;
        dayOfTheWeek = weekPath+1;

        monthFunctions.Run(["add"])
}

function finalizeCalendar() {
        let selectedMonthDataSet = monthFunctions[Object.keys(monthsOfTheYear[monthNumber])];
        
        daysInTheMonth = selectedMonthDataSet["daysInTheMonth"];
        day = selectedMonthDataSet["day"];
        weekPath = selectedMonthDataSet["weekPath"];
        spacing = selectedMonthDataSet["spacing"];
        dayOfTheWeek = selectedMonthDataSet["dayOfTheWeek"];

        update();
}

function previousCalendar() {

        if (monthNumber < 1) {
                monthNumber = monthsOfTheYear.length - 1;
                dayOfTheWeek++;
        } else {
                monthNumber--;
        }

        finalizeCalendar();
}

function nextCalendar() {

        if (monthNumber > 10) {
                monthNumber = 0;
                dayOfTheWeek--;
        } else {
                monthNumber++;
        }

        finalizeCalendar();
}
console.timeEnd('calendar-file');