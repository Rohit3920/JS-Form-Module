import { objects } from "./obj.js"

let a = "I'm Web Developer ROHIT";

let b = document.createElement('div')
b.id = "main";

document.body.appendChild(b);

b.innerText = `User: ${a}`;

let form = document.createElement("form");
form.className = "form bg-secondary";
form.method = "get";


let f_name = document.createElement("h1")
f_name.innerText = "Login Form"

let userName = document.createElement("input");
userName.type = "text";

userName.id = "userName";
userName.placeholder = "user Name";
userName.required = true;

let pass = document.createElement("input");
pass.type = "password";
pass.id = "password";
pass.placeholder = "Your Password";
pass.required = true;

let spanUser = document.createElement("span");
spanUser.id = "spanUser";

let spanPass = document.createElement("span");
spanPass.id = "spanPass";

let subBtn = document.createElement("input");
subBtn.type = "submit";
subBtn.value = "SUBMIT";
subBtn.id = "subBtn";
subBtn.className = "bg-primary";

let passReset = document.createElement("a");
passReset.className = "passReset"
passReset.href = "#"
passReset.innerHTML = "Forget Password ?"

let help = document.createElement("a");
help.className = "help"
help.href = "#"
help.innerHTML = "May I Help You?"

document.body.appendChild(form);
form.appendChild(f_name)
form.appendChild(userName);
form.appendChild(spanUser)
form.appendChild(pass)
form.appendChild(spanPass)
form.appendChild(passReset)
form.appendChild(subBtn)
form.appendChild(help)

$(document).ready(function () {
    $("#subBtn").click(function (e) {
        e.preventDefault();

        var u_text = $("#userName").val();
        var p_text = $("#password").val();

        for (var i = 0; i < objects.length; i++) {
            var obb = objects[i];
            var user = obb.u;
            var uPass = obb.p;

            if (user == u_text)
                break;
        }
        if (user == u_text && uPass == p_text) {
            spanPass.innerText = " ";
            spanUser.innerText = " ";
                alert("login successfully");
        } else if (user == u_text && uPass != p_text) {
            spanPass.innerText = "Your Password is Invalid"
            // alert("Your Password is Invalid")
        } else {
            spanUser.innerText = "user not found"
            // alert("user not found");
        }
    });
});


