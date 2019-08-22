//Todo
//-----------
//Refact Codes

window.onload = function() {

// Global Variables
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	var todoList = [];

//Event Listeners
	btn.addEventListener("click", addTodoItem);
	list.addEventListener("click", boxChecked);

//add todo item to list

    function addTodoItem() 
    {
        if(input.value == "") 
        {
			alert("Please enter something");
		}
		else {
			var text = JSON.parse(JSON.stringify(input.value));	
			var item = `<li>${text}<input class="checkboxes" type="checkbox"></li> `;				
			list.insertAdjacentHTML('beforeend', item);	
		}
	}

//Displaying the TODO List
	function displayList() {
		todoList.forEach(function(element) {
			var text = element.item;
		});
	}
	//Checking the checkbox and the todo item dissapear!

	function boxChecked(event) {
		const element = event.target;
		if(element.type == "checkbox") {
			element.parentNode.style.display = "none";
			alert("One To-Do Item Completed");
			console.log(text);
		}
	}

}