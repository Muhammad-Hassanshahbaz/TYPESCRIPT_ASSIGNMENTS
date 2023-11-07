var list;
list = ["Nadeem", "Shahbaz", "Moosa", "sid", "hasan", "rohail", "maaz", "hassan"];
var i;
var j;
console.log("Sorry we are running outoff space");
j = list.length;
for (i = 7; i > 1; i--) {
    console.log(" sorry you are not invited: " + list[i]);
    list.pop();
}
console.log("\n");
for (i = 1; i >= 0; i--) {
    console.log(list[i] + " you are still invited: ");
}
