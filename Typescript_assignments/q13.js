var fruits;
fruits = ["mango", "appple", "banana"];
fruits.push("Berry");
fruits.unshift("Chickoo");
fruits.splice(3, 0, "Anar");
var i;
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
