//selectionner les éléments 
const addTask = document.getElementById('addTask');
const deleteTask = document.getElementById('deleteTask');
const taskSection = document.querySelector('.tasks');

//ajouter un événement

addTask.addEventListener("click", function () {
    const template = `<div class="task">
                <input type="checkbox">
                <input type="text" placeholder="Choose a task name">
                <button onclick="openPopup()" id="openButton">Open a task</button>
            </div>`
    taskSection.innerHTML += template
});


// Supprimer une tâche ajoutée
deleteTask.addEventListener("click", () => {
    const inputs = document.querySelectorAll('.tasks input:checked');
    for (const input of inputs) {
        input.parentElement.remove()
    }
});


// TENTATIVE D'AJOUT D'UNE COULEUR ROUGE SUR UNE NOUVELLE TACHE

//selectionner les éléments 
const colorRed = document.getElementById('priority');
const colorGreen = document.getElementById('daily');

//ajouter un événement

colorRed.addEventListener("click", function () {
    const taskRed = document.querySelectorAll(".tasks input:checked");
    for (const input of taskRed) {
        const taskDiv = input.parentElement;
        taskDiv.style.backgroundColor = "lightcoral";

        // Modifier aussi la couleur des inputs de texte
        const textInputs = taskDiv.querySelectorAll('input[type="text"]');
        textInputs.forEach(input => input.style.backgroundColor = "lightcoral");
    }
});

// AJOUT D'UNE COULEUR VERTE SUR UNE NOUVELLE TACHE

//ajouter un événement

colorGreen.addEventListener("click", function () {
    const taskGreen = document.querySelectorAll(".tasks input:checked");
    for (const input of taskGreen) {
        const taskDiv = input.parentElement;
        taskDiv.style.backgroundColor = "lightgreen";
        // Modifier aussi la couleur des inputs de texte
        const textInputs = taskDiv.querySelectorAll('input[type="text"]');
        textInputs.forEach(input => input.style.backgroundColor = "lightgreen");
    }
});


// CREATION DU POPUP LORSQU'ON APPUIE SUR LE BOUTTON OPEN A TASK
//https://www.youtube.com/watch?v=9Qzm66JX-RA

// ligne35 html <button onclick="openPopup()">Open the task</button>
// ligne46 html <button href="javascript:void(0)" onclick="closePopup()" class=" popup-exit">fermer</button>

//créer la fonction pour ouvrir

function openPopup() {
    const popup = document.querySelector('#popup-overlay');
    popup.classList.add('open');
}

//créer la fonction pour fermer


function closePopup() {
    const popup = document.querySelector('#popup-overlay');
    popup.classList.remove('open');
}

