document.addEventListener("DOMContentLoaded", function () {
    const addForm = document.getElementById("add-form");
    const taskInput = document.getElementById("task-input");
    const gridContainer = document.querySelector(".gridContainer");

    addForm.addEventListener("submit", function (event) {
        event.preventDefault()
        let taskTitle = taskInput.value.trim();


        if (taskTitle !== "") {
            // Créer un nouveau bloc
            let newTaskBlock = document.createElement("div");
            newTaskBlock.classList.add("task-card");

            // Ajouter le titre
            let taskTitleElement = document.createElement("h3");
            taskTitleElement.textContent = taskTitle;

            // Ajouter la note
            let noteElement = document.createElement("p");
            noteElement.innerHTML = "<b>Note :</b> ";

            // Ajouter le bouton "Create Task"
            let createTaskButton = document.createElement("button");
            createTaskButton.classList.add("task-btn");
            createTaskButton.textContent = "delete task";

            // Supprimer la tâche au clic sur "Create Task"
            createTaskButton.addEventListener("click", function () {
                newTaskBlock.remove();
            });

            // Ajouter le bouton "Open"
            let openButton = document.createElement("button");
            openButton.classList.add("open-btn");
            openButton.textContent = "Open";



            // Rediriger vers une autre page au clic
            openButton.addEventListener("click", function () {
                window.location.href = "../page_task/page_task.html";
            });


            // Ajouter les éléments au bloc
            newTaskBlock.appendChild(taskTitleElement);
            newTaskBlock.appendChild(noteElement);
            newTaskBlock.appendChild(openButton);
            newTaskBlock.appendChild(createTaskButton);

            // Ajouter le bloc à la deuxième page
            gridContainer.appendChild(newTaskBlock);

            // Vider l'input après ajout
            taskInput.value = "";
        } else {
            alert("Veuillez entrer un nom pour la tâche !");
        }
    });
});
