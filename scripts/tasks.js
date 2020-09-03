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