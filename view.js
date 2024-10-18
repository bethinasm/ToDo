
// VIEW

updateView()
function updateView(){
    app = /*HTML*/`

    <div>
        <table> 
            <tr> 
                <th class="checkpoint"> </th>
                <th> Person </th>
                <th style="width: 250px;"> To do: </th>
                <th> Deadline </th>
                <th> Date finished </th>
            </tr>
            `;

            for (let i = 0; i < tasks.length; i++) {
                app += addNewRow(i);
            }

            app += /*HTML*/`

        </table>
    </div>

    `;
}

function addNewRow(i) {
    let task = tasks[i];
    let checkFinished = task.isDone ? 'checked="checked"' : '';

    return /*HTML*/ `<tr>
            <th class="checkpoint"> <input type="checkbox" onchange="isFinished(this, ${i})" ${checkFinished}/> </th>
            <th> ${person} </th>
            <td> ${newTask}</td>
            <td> ${deadline} </td>
            <td> </td>
            <td style="width: 220px; text-align: center;"> 
                <button onclick="editTask()"> Edit task </button>
                <button onclick="deleteTask(${i})"> Delete Task </button>
            </td>
        </tr>

        <div class="newTask">
        <h3> Add new task: </h3>
        <input placeholder="Who is the new task for?" onchange="savePerson(this.value)" class="ntInput"/>
        <input placeholder="To do:" onchange="saveTask(this.value)" class="ntInput"/>
        <br><br>
        <div> 
            Task deadline: 
            <input type="date" onchange="saveDate(this.value)"class="ntInput"/> 
            <button onclick="addNewTask()"> Submit </button>
        </div>
    </div>
    `;
}

