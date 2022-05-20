var toasts = document.getElementById("toasts");
var mylist = document.getElementById("taskGroup"); 
var note = document.getElementById("myNotes");
var inputbox = document.getElementById("newTask");

const todos = JSON.parse(localStorage.getItem('todos'))
const page = localStorage.getItem("page");

// Array for list of objects containing quotes and author
const quotes = [
    {
        "q":"Money poisons you when you've got it, and starves you when you haven't.",
        "a":"D. H. Lawrence"
    },
    {
        "q":"Every man desires to live long, but no man wishes to be old.",
        "a":"Jonathan Swift"
    },
    {
        "q":"The single biggest problem in communication is the illusion that it has taken place.",
        "a":"George Bernard Shaw"
    },
    {
        "q":"If you don't know where you're going, you will probably end up somewhere else.",
        "a":"Laurence J. Peter"
    },
    {
        "q":"Enjoy when you can, and endure when you must.",
        "a":"Johann Wolfgang von Goethe"
    },
    {
        "q":"All human beings can alter their lives by altering their attitudes.",
        "a":"Andrew Carnegie"
    },
    {
        "q":"My definition of success is control.",
        "a":"Kenneth Branagh"
    },
    {
        "q":"The less you try to impress, the more peaceful you can be.",
        "a":"Maxime Lagace"
    },
    {
        "q":"Every great change is preceded by chaos.",
        "a":"Deepak Chopra"
    },
    {
        "q":"The more you like yourself, the less you are like anyone else, which makes you unique.",
        "a":"Walt Disney"
    },
    {
        "q":"Don't let the noise of others' opinions drown out your own inner voice.",
        "a":"Steve Jobs"
    },
    {
        "q":"Where you are right now doesn't have to determine where you'll end up.","a":"Barack Obama"
    }];

// Generate a random quote
const generateQuote = () => {
    var inspireQuote = quotes[Math.floor(Math.random() * 12)];
    var displayMessage = document.getElementById("message");
    var displayAuthor = document.getElementById("author");
    displayMessage.innerHTML = `"${inspireQuote.q}"`;
    displayAuthor.innerHTML = `- ${inspireQuote.a}`;

    console.log(inspireQuote.q, inspireQuote.a);
}

// Add a task to the list after button click
const addTask = () => {
    var taskVal = inputbox.value;

    if (taskVal === "") {
        console.log("Nothing is Inputted")
        createNotification();

    } else {
        var createTask = document.createElement("li");
        createTask.classList.add("myTask");

        createTask.innerHTML = taskVal;
        mylist.appendChild(createTask);
        inputbox.value = "";
        
        createTask.addEventListener('click', () => {
            // Check to see if the list has class 'completed'
            if (createTask.classList.contains('completed')) {
                // Remove class 'completed'
                createTask.classList.toggle('completed');
            } else {
                // Add class 'completed
                createTask.classList.add('completed');
            }
        }) 

        createTask.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            createTask.remove();
        })
    }
};

// Creating a notification for no input
const createNotification = () => {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = "Invalid Input";

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

// Save notes to local storage
const saveNotes = () => {
    var noteVal = note.value;
    localStorage.setItem('page', JSON.stringify({Note: noteVal}));
}

// Clear the notes in local storage
const deleteNotes = () => {
    localStorage.clear();
    note.value = " ";
}

// Retrieve existence notes and todos from local storage
window.onload = function() {
    if (typeof page !== "undefined" && page !== null) {
        note.innerHTML = JSON.parse(page).Note;
    } 
}