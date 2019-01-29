/*
var a = 5;
var b = 10;

var c = a + b;
var d = a - b;

console.log(c, d);

console.log("5 % 2: " +  (5 % 2) );
console.log("5 % 3: " +   5 % 3 );
console.log("5 / 3: " +   5 / 3 );

var text1, text2, noOfPeople;

noOfPeople = 7;

text1 = "V sobi nas je ";
text2 = " znanja željnih D.Labsovcev";

console.log(text1 + noOfPeople + text2 + ".");

function loopOutput(a, k) {
	console.log(k + " " + a);
}

function square(i) {
	return i * i;
}

// var i;
for (var i = 0; i < 10; i++) { 
    // console.log(i);
    var text3;
    if (i < 4) {
    	text3 = "Baaad";
    } else if (i < 7) {
    	text3 = "OK"
    } else {
    	text3 = "Great";
    }

    // loopOutput(text3, i);
    var response = returnLoopOutput(text3, i);
    console.log(response);

    var responseSquare = square(i);
    console.log(responseSquare);
}
console.log("after for loop " + i);

function returnLoopOutput(a, k) {
	return k + " " + a;
}


i = 0;
while (i < 10) {
	console.log(i);

	i++;
}


var array = ["a", "b", "c", "d"];

console.log(array[1]);
console.log(array[3]);
console.log(array[4]);

console.log(Math.random());

var randomIndex = Math.floor(Math.random() * array.length);
console.log(randomIndex);

console.log(array[randomIndex]);
*/

/*
var date = new Date();
console.log(date);


#site > div > div.topmenu > ul > li:nth-child(6)
//*[@id="site"]/div/div[3]/ul/li[6]
*/


 console.log('123');
var matches = {
	'url1': [531, 532]
}



matches['u rl2'] = [601,602];

matches.url3 = [601,602];

var matchUrl = "nekUrl";
matches[matchUrl] = [702, 703];


  
console.log(matches);

/*
for (var property in object) {
    if (object.hasOwnProperty(property)) {
        // do stuff
    }
}
*/

for (var property in matches) {
	console.log(property);
    if (matches.hasOwnProperty(property)) {
    	console.log(matches[property]);
        // do stuff
    }
}

bets = [];


var str = "How/are/you/566";
var res = str.split("/");
console.log(res);
var length = res.length;
console.log(length);

var id = res[length-1];
console.log(id);


bets.push(id);

console.log(bets);

matches['urlZaMatch'] = bets;

console.log(matches);

for (var property in matches) {
	console.log(property);
    if (matches.hasOwnProperty(property)) {
    	console.log(matches[property]);

    	// tukaj greš čez vse bet-e za posamezni match, ampak ne dobiš id-ja, ampak key(oz. index) kjer se dejanski id nahaja
    	for (var key in matches[property]) {
    		console.log(matches[property][key]);
    	}
    }
}
