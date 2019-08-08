export class Controller {
    constructor(model) {
        this._model = model;
    }

    createLeft() {
        let left = this._model.createLeft();
        return left;
    }

    optionSelect() {
        this._model.optionSelect();
    }

    storeEmail() {
        let message2 = document.getElementById("message2");
        message2.style.display = "none";
        let message = document.getElementById("message");
        message.style.display = "none";
        let emails = JSON.parse(window.localStorage.getItem("emails"));
        if (!emails) {
            window.localStorage.setItem("emails", JSON.stringify([]));
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)) {

            if (emails.includes(document.getElementById("email").value)) {
                document.getElementById("email").value = "";
                message.innerHTML = "<b>Email already registered!<b>"
                message.style.display = "block";
            } else {
                emails.push(document.getElementById("email").value);
                window.localStorage.setItem("emails", JSON.stringify(emails));
                document.getElementById("email").value = "";
                message2.innerHTML = "<b>Email registered!<b>"
                message2.style.display = "block";
            }
        } else {
            message.innerHTML = "<b>Invalid email!<b>"
            message.style.display = "block";
        }
    }

    closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

}








window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}