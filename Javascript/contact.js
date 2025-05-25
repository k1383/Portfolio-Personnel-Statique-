const navlinks = document.querySelector(".nav-links");
const burgermenu = document.querySelector("#burgermenu")

burgermenu.addEventListener("click", function() {
    navlinks.classList.toggle("active")
})

/* Form */ 

const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name')
    const specialCharacters = /[0-9+=@*/%£¤&~{}<>:;?,!§]/;

    //* .test() Permet de tester si un motif est présent

    if (specialCharacters.test(nameInput.value)) {
        alert("The name must not contain special characters.");
    } if (nameInput.value.length < 3){
        console.log("error");
    } else {
        alert("validé");
    }
})

