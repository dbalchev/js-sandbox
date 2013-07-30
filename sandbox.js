var $TEXT_CONSOLE = document.getElementById("text-console")
var $SOURCE_AREA  = document.getElementById("source-area")
var $EXECUTE_BUTTON = document.getElementById("execute-button")
var $TARGET_DIV = document.getElementById("target-div")

/*
a self explanatory function
*/
function print(obj) {
  $TEXT_CONSOLE.value += obj;
}

/*
a self explanatory function
*/
function println(obj) {
	print(obj + "\n");
}

$EXECUTE_BUTTON.addEventListener("click", function(e) {
	source = $SOURCE_AREA.value
	try {
		eval(source);
	} catch(e) {
		println("exception occured " + e);
	}
		
});

/**
  * adds an element to a special div used for testing elements
  */
function addElement(element) {
	$TARGET_DIV.appendChild(element);
}
