const apiUrl = "/api/tasks";

async function fetchTasks() {
    const res = await fetch(apiUrl);
    const tasks = await res.json();

    const container = document.getElementById("tasks-container");
    container.innerHTML = "";

    tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task";
        div.innerHTML = `
            <input type="text" id="title-${task.id}" value="${task.title}">
            <input type="checkbox" id="completed-${task.id}" ${task.completed ? "checked" : ""}>
            <div class="task-buttons">
                <button class="update" onclick="updateTask(${task.id})">Update</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        container.appendChild(div);
    });
}

async function addTask() {
    const title = document.getElementById("new-task-title").value;
    if (!title) return alert("Please enter a Task Title!");

    await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false })
    });

    document.getElementById("new-task-title").value = "";
    fetchTasks();
}

async function updateTask(id) {
    const title = document.getElementById(`title-${id}`).value;
    const completed = document.getElementById(`completed-${id}`).checked;

    await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed })
    });

    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    fetchTasks();
}

fetchTasks();

