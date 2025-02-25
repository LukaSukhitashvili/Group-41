var names = ["გიორგი", "ანა", "ნიკა", "მარიამი", "დავითი"];
var random = Math.random() * names.length;
var index = Math.floor(random);
var who = names[index];

console.log("დღეს " + who + " იხდის ყველას საჭმელს!");
