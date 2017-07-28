console.log("main.js");


//declare varialbes for testing
// var startNum = 33;
// var char = "*";


// tree output  placeholder
outputElement  = document.getElementById("tree");

//character input placeholder
charPlaceholder = document.getElementById("char");

//number input placeholder 
numbPlaceholder = document.getElementById("number");

//placeholder element for submit button
buttonElement = document.getElementById("getTree");



// let startNum = document.getElementById("numberpressed");
// let char = document.getElementById("charpredded");

 let treePlaceHolder = document.getElementById("tree");

	function pineTree(n, char) {
		var answer = "";

		for (let i = 0 ; i < n; i++) {
			for (let j = (n - i) ; j >= 1; j--) {
				answer += " ";
			}
				for (let k = 0; k < (i * 2) - 1; k++){
					answer += char;
				}
				
			 answer += "\n";	
			 
		}
		
		return answer;
	}


//get value of char input
charPlaceholder.addEventListener("keyup", function(event){
    char = event.target.value;
});

//get value of number input
numbPlaceholder.addEventListener("keyup", function(event){
    startNum = event.target.value;
});



//add click event to submit button
buttonElement.addEventListener("click", function() {
	let result =  pineTree(startNum, char);
	 treePlaceHolder.innerText = result;
	console.log(result);

});


