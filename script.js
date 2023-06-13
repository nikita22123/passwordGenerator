let generateButton = document.querySelector('#passwordClick');
let passwordInput = document.querySelector('#password');
let capital = document.querySelector('#isCapital');
let small = document.querySelector('#isSmall');
let numbers = document.querySelector('#isNumbers');
let symbols = document.querySelector('#isSymbols');
let copy = document.querySelector('#copy');
let oldText = copy.textContent = "Copy";
let rangePassword = document.querySelector('#pass');
let alphabet = 
["a", "b", "c", "d", "e", "f", "g", "h", "i",
 "j", "k", "l", "m", "n", "o", "p", "q",
 "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let alphabetSymbols =
["!", "#", "$", "%", "&", "(", ")", "*", "+",
 ",", "-", ".", "/",  ":", ";", "<", "=", ">", 
 "?", "@", "[", "]", "^", "_", "{", "}", "|", " ~ "
]

let isCapital  = false;
let isSmall = false;
let isSymbols = false;
let  isNumbers = true;
let isHasTrueCheckbox = true;
numbers.checked = true;


capital.addEventListener('change', ()=> {
	isCapital = !isCapital;
})
small.addEventListener('change', ()=> {
	isSmall = !isSmall;
})
numbers.addEventListener('change', ()=> {
	isNumbers = !isNumbers;
})
symbols.addEventListener('change', ()=> {
	isSymbols = !isSymbols;
})
function isTrueCheckbox(){
	let checkboxes = [isSmall, isCapital, isNumbers, isSymbols];
	if(checkboxes.includes(true)){
		isHasTrueCheckbox = true;

	}
	else{
		isHasTrueCheckbox = false;
		alert("choose at least one!");
	}
}

function copyFunction(element){
	let copyText = element.textContent;
	navigator.clipboard
	.writeText(copyText)
	.then((text) =>{

	})
	.catch((err) =>{
		console.log("Error",err);
	})
}
function oldTextFunction(){
	let oldText = copy.textContent = "Copy";
}
copy.addEventListener('click', function(){
	copyFunction(passwordInput);
	copy.textContent = "Copied";
	let a = setTimeout(oldTextFunction,900);
})


generateButton.addEventListener('click', function(){
	let passwordLength = rangePassword.value;
	let generatedPassword = "";
	isTrueCheckbox();

while(passwordLength > 0 && isHasTrueCheckbox === true){
	if(isNumbers){
		generatedPassword += Math.floor(Math.random()*10);
		passwordLength--;
	}
	if(isSmall){
		let amount;
		amount = Math.floor(Math.random()* 26);
		generatedPassword += alphabet[amount];
		passwordLength--;
	}
	if(isCapital){
		let amount;
		amount = Math.floor(Math.random()* 26);
		generatedPassword += alphabet[amount].toUpperCase();
		passwordLength--;
	}
	if(isSymbols){
		let amount;
		amount = Math.floor(Math.random()* 27);
		generatedPassword += alphabetSymbols[amount];
		passwordLength--;
	}
}
	if(isHasTrueCheckbox === true){
		passwordInput.textContent = generatedPassword;
	}
})