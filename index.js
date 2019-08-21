// todo:
// 1. get data inputted
// 2. make sure i display the inputted data
// 3. create a checkbox
// 4. hise a checked list item

window.onload = function() {
//Variables
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	var id = 1;
	var liItem = "";
	var todoList = [];

//Event Listeners
	btn.addEventListener("click", addTodoItem);
	list.addEventListener("click", boxChecked);

//add todo item to list

    function addTodoItem() 
    {


        if(input.value == "") 
        {
			alert("Please enter somethin");
		}
		else {
			var text = input.value;	
			var item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li> `;				
			list.insertAdjacentHTML('beforeend', item);	
		}
	}
//Displaying the TODO List
	function displayList() {
		todoList.forEach(function(element) {
			console.log(element.item)
			var text = element.item;
			var item = `<li id="li-${id}">${text}`;
		});
	}
	//Checking the checkbox and the todo item dissapear!
	function boxChecked(event) {
		const element = event.target;
		if(element.type == "checkbox") {
			element.parentNode.style.display = "none";
			console.log(text);
		}
	}

}