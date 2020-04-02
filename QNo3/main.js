var inputArray = [];
var size = parseInt(prompt("Enter the size of string you want to store: "));
for (var i = 0; i < size; i++) {
    inputArray[i] = prompt("Enter the string: " + (i + 1));

}
document.write("<h1>" + "Before sorting string is: " + inputArray + "</h1>");
document.write("<br>");


//using sort function
var aftrSort = inputArray.sort();
document.write("<h1>" + "After sorting string is: " + "</h1>");
for (var i = 0; i < size; i++) {
    document.write("<h1>" + aftrSort[i] + "</h1>");
    // document.write("<br>")
}