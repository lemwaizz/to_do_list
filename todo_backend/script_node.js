const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

// Function to add a task
async function addTask() {
    if (inputBox.value === "") {
        alert("You must input task!");
        return;
    }
    
    // Create a new task object
    const task = {
        description: inputBox.value
    };

    // Send a POST request to the server to add the task
    try {
        const response = await fetch('/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        if (!response.ok) {
            throw new Error('Failed to add task');
        }

        // Task added successfully, handle response if needed
        console.log('Task added successfully');

        // Create list item for the task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create close button for the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Clear input box
        inputBox.value = "";
    } catch (error) {
        console.error('Error adding task:', error);
        alert('Failed to add task');
    }
}

// Event listener to add task when enter key is pressed
inputBox.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Event listener to mark task as completed or delete task
listContainer.addEventListener("click", async function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }

    // Optionally, you can also send a request to update task completion status
    // based on the state of the task here
});
