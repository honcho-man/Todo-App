let User = document.querySelector('p')

function setUser() {
    let myName = prompt('Please enter your name.')
    if (!myName) {
        setUser();
    } else {
        localStorage.setItem('name', myName)
        User.textContent = myName;
    }
}

if (!localStorage.getItem('name')) {
    setUser();
} else {
    let storedName = localStorage.getItem('name');
    User.textContent = storedName;
}

function resetUser() {
    setUser();
}

function userSettings() {
    document.getElementById("userSettings").style.display = "block";
    document.getElementById("tasksItems").style.display = "none";

}

function Tasks() {
    document.getElementById("userSettings").style.display = "none";
    document.getElementById("tasksItems").style.display = "block";

}

document.addEventListener('DOMContentLoaded', function() {

    const submit = document.querySelector('#submit');
    const newTask = document.querySelector('#task');

    submit.disabled = true;

    newTask.onkeyup = () => {
        if (newTask.value.length > 0) {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    }

    document.querySelector('form').onsubmit = () => {
        const task = newTask.value;

        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#Tasks').append(li);
        newTask.value = '';

        submit.disabled = true;
        return false;

    }
});