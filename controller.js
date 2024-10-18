
// CONTROLLER 

function savePerson(personInput) {
    person = personInput;
    console.log('this person was saved ' + person);
}

function saveTask(taskInput) {
    newTask = taskInput;
    console.log('new task is: ' + newTask);
}

function saveDate(dateInput) {
    deadline = dateInput;
    console.log('deadline is ' + deadline);
}

function addNewTask() {     //pusher new task inn i arrayet
    tasks.push({ 
        person: person,
        description: newTask,
        deadline: deadline,
        isDone: false,
    });
    console.log(tasks);
    updateView();
}

function isFinished(checkbox, index) {
    tasks[index].isDone = checkbox.checked;

    updateView();
}

function editTask() {

}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateView();
}

