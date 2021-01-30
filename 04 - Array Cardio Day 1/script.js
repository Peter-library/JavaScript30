const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born the 1500's
const yur = inventors.filter (ele => ele['year'] < 1600 && ele['year'] >= 1500)
console.log(yur)
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map (ele => `${ele['first']} ${ele['last']}`)
console.log(fullName)
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorting = inventors.sort((a, b) => a['year'] - b['year'])
console.log(sorting)
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const reduced = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0);
console.log(reduced)
// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
  const lastInventor = a.year - a.passed;
  const nextInventor = b.year - b.pass;
  return lastInventor > nextInventor? -1 : 1;
});
console.log(oldest);
// 6. create a list of Boulevards in Paris that contain 'de'anywhere in the name
  // const category = document.querySelector('.mw-category');
  // const links = Array.from(category.querySelectorAll('a'));
 
  // const de = links.map(ele => links.textContent)
  // .filter(streetName => streetName.inclueds('de'));
// https://en.wikipedia.org/wikiCategory:Boulevards_in_Paris
// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort(function(lastOne, firstOne) {
   const [alast, afirst] = lastOne.split(', ');
   const [blast, bfirst] = firstOne.split(', ');
   return alast > blast ? 1 : -1;
 })
 console.log(alpha)
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
	"car",
	"car",
	"truck",
	"truck",
	"bike",
	"walk",
	"car",
	"van",
	"bike",
	"walk",
	"car",
	"van",
	"car",
	"truck",
];
let count = {};
for (let i = 0; i < data.length; i++) {
  if (!count[data[i]]) {
    count[data] = 1;
  } else {
    count[data]++
  }
  return count;
}
console.log(count)