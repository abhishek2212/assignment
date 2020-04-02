var L = 2;
var R = 6;
function isEvenOrOdd(L, R) {
    var oddCount = parseInt((R - L) / 2);
    if (R % 2 == 1 || L % 2 == 1) {
        oddCount++;
    }
    if (oddCount % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
var oddEven = isEvenOrOdd(L, R);//calling function
document.write("<h1>" + oddEven + "</h1");