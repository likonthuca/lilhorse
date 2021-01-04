// Wednesday, November 18,2020 1:33:39 PM
// VERSION 1.1, update: output with jQuery
// used on January 3,2021 1:36:19 AM
// code edit by lktc
// DAYM = DATE
// keep the function move per thousand seconds
// var myVar = setInterval(function(){ getthedate() }, 0);
var myVar = setInterval("getthedate()", 0);
// Wednesday array
var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
// November array
var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
// 
// define the function
function getthedate(){
    // to create the time relative function
    var mydate = new Date();
    // 2020
    // var year=mydate.getYear()
    var year = mydate.getFullYear();
    // get the local variables
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var hours = mydate.getHours();
    var minutes = mydate.getMinutes();
    var seconds = mydate.getSeconds();
    // am or pm
    var dn = "AM";
        if (hours >= 12);
        dn="PM";

    if (daym < 10) daym = "0" + daym;
    if (year < 1000) year += 1900;
    if (hours == 0) hours = 12;
    if (hours > 12) { hours = hours - 12 };
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    //change font size here
    var cdate = dayarray[day] + ", " + montharray[month] + " "+ daym +", " + year + " " + hours + ":" + minutes + ":" + seconds + " " + dn;
    // javascript output cdate test
    // document.getElementById('jsdate').innerHTML = cdate;
    // jQuery output cdate test
    jQuery("#jsdate").html(cdate);
}

/* html write:
    <script src="./js/jsdate.js"></script>
    <p class="rowtop" id="jsdate"></p>
*/