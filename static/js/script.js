

var myArray = [
{
	"display": "Given a string and a non-negative int n, return a larger string that is n copies of the original string.",
	"url": "http://codingbat.com/prob/p142270"
},
{
	"display": "Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.",
	"url": "http://codingbat.com/prob/p136351"
},
{
	"display": "Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.",
	"url": "http://codingbat.com/prob/p194667"
},
{
	"display": "Given a string, return true if the first instance of 'x' in the string is immediately followed by another 'x'.",
	"url": "http://codingbat.com/prob/p186759"
},
{
	"display": "Given a string, return a new string made of every other char starting with the first, so 'Hello' yields 'Hlo'. ",
	"url": "http://codingbat.com/prob/p165666"
},
{
	"display": "Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. The best solution makes only a single 'linear' pass of both arrays, taking advantage of the fact that both arrays are already in sorted order. ",
	"url": "http://codingbat.com/prob/p134022"
},
{
	"display": "Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over. ",
	"url": "http://codingbat.com/prob/p117019"
},
{
	"display": "We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done. ",
	"url": "http://codingbat.com/prob/p191363"
},
{
	"display": "Given an array of strings, return the count of the number of strings with the given length. ",
	"url": "http://codingbat.com/prob/p124620"
},
{
	"display": "Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second '6' is actually a 7.  ",
	"url": "http://codingbat.com/prob/p110019"
},
{
	"display": "Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so 'hixxxhi' yields 1 (we won't count the end substring). ",
	"url": "http://codingbat.com/prob/p178318"
},
{
	"display": "Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples. ",
	"url": "http://codingbat.com/prob/p170221"
}
];

// random number generator
function randomNumber(num) {
	var rand = Math.floor((Math.random() * num));
	return rand;
}

// random color generator
var col = randomColor({luminosity: 'light',count: 30});

// choose a question to display
function myFunction(arr) {
	var out = "";
	var chooseQ = randomNumber(myArray.length);
	var chooseColor = randomNumber(30);
	var chosenCol = col[chooseColor];
	// var i;
	// for(i = 0; i < arr.length; i++) {
	// 	out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
	// }
	out += '<a href="' + arr[chooseQ].url + '">' + arr[chooseQ].display + '</a><br>';
	document.getElementById("id01").innerHTML = out;
	document.getElementsByTagName("textarea")[0].style.color = chosenCol;
	
}

myFunction(myArray);


// HTTP request to read in the text file
var xmlhttp = new XMLHttpRequest();
var url = "myTutorials.txt";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var myArr = JSON.parse(xmlhttp.responseText);
		myFunction(myArr);
	}
}

xmlhttp.open("GET", url, true);
xmlhttp.send();

function ClipBoard() 
{
holdtext.innerText = copytext.innerText;
Copied = holdtext.createTextRange();
Copied.execCommand("Copy");
}