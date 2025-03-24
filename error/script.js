const uname = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const sign_up_button = document.getElementById("btn");
let error = document.getElementById("error");

sign_up_button.addEventListener("click", () => {
    form_validate();
});   

function form_validate() {
    if
    (
        uname.value == "" || 
        email.value == "" ||
        password.value == "" || 
        confirm_password.value == ""
    )
    {
        error.innerHTML = "* All field must be filled !";
    }
    else
    {
        error.innerHTML = "successfully rugisted";
    }
}