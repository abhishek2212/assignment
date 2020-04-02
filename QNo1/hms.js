var sec = parseInt(prompt("Number of seconds: "));
//var sec=129
document.write(sec + "<br>");
var H = (sec / 3600);
var h = parseInt(H);
var M = ((sec - (3600 * h)) / 60);
var m = parseInt(M)
var S = (sec - (3600 * h) - (m * 60));

document.write("Hours= " + h + ", " + " minutes= " + m + ", " + " seconds= " + S);