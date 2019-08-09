
export class View {

class View {

    constructor(controller) {
        this._controller = controller;
        this._modal = this.createModal();
        this._header = this.createHeader();
        this._main = this.createMain();
        this._footer = this.createFooter();
    }

    createModal() {
        let modal = document.createElement("div");
        modal.setAttribute("id", "myModal");
        modal.setAttribute("class", "modal");
        let modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");
        let modalHeader = document.createElement("div");
        modalHeader.setAttribute("class", "modal-header");
        let span = document.createElement("span");
        span.setAttribute("class", "close");

        span.addEventListener("click", function() {
            this._controller.closeModal();
        }.bind(this), false);

        span.setAttribute("onclick", "closeModal()");

        span.appendChild(document.createTextNode("\u00D7"));
        modalHeader.appendChild(span);
        let h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Title"));
        modalHeader.appendChild(h2);
        modalContent.appendChild(modalHeader);
        let modalBody = document.createElement("div");
        modalBody.setAttribute("class", "modal-body");
        let p1 = document.createElement("p");
        p1.appendChild(document.createTextNode("p1"));
        let p2 = document.createElement("p");
        p2.appendChild(document.createTextNode("p2"));
        modalBody.appendChild(p1);
        modalBody.appendChild(p2);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modal.appendChild(modalContent);
        return modal;
    }

    createHeader() {
        let header = document.createElement("header");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let i = document.createElement("i");
        let button = document.createElement("button");
        i.appendChild(document.createTextNode("Yet another newsfeed"));
        p.appendChild(i);
        h1.appendChild(document.createTextNode("NEWSFEED"));
        button.appendChild(document.createTextNode("Headlines"));
        header.appendChild(h1);
        header.appendChild(p);
        button.addEventListener("click", function() {
            import ("./headline.js").then(module => {
                module.headlines();
            });
        }.bind(this), false);
        header.appendChild(button);
        return header;
    }

    createFooter() {
        let footer = document.createElement("footer");
        let small = document.createElement("small");
        let text = document.createTextNode("\u00A9 NewsFeed 2019");
        small.appendChild(text);
        footer.appendChild(small);
        return footer;
    }

    createMain() {
        let main = document.createElement("main");
        //left block
        let left = document.createElement("div");
        left.setAttribute("class", "left");
        let innerLeft = this._controller.createLeft();
        left.appendChild(innerLeft);
        main.appendChild(left);
        //right block
        let right = this.createRight();
        main.appendChild(right);
        return main;
    }

    createRight() {
        let right = document.createElement("div");
        right.setAttribute("class", "right");
        let bold = document.createElement("b");
        bold.appendChild(document.createTextNode("SELECT CATEGORY"));
        right.appendChild(bold);
        right.appendChild(document.createElement("br"));
        let select = document.createElement("select");

        select.addEventListener("change", function() {
            this._controller.optionSelect();
        }.bind(this), false);

        select.setAttribute("onChange", "optionSelect()");

        select.setAttribute("id", "mySelect");
        let option1 = document.createElement("option");
        option1.setAttribute("value", "abc-news-au");
        option1.appendChild(document.createTextNode("ABC News"));
        let option2 = document.createElement("option");
        option2.setAttribute("value", "cnbc");
        option2.appendChild(document.createTextNode("CNBC"));
        let option3 = document.createElement("option");
        option3.setAttribute("value", "daily-mail");
        option3.appendChild(document.createTextNode("Daily Mail"));
        let option4 = document.createElement("option");
        option4.setAttribute("value", "mirror");
        option4.appendChild(document.createTextNode("Mirror"));
        let option5 = document.createElement("option");
        option5.setAttribute("value", "bbc-news");
        option5.appendChild(document.createTextNode("BBC News"));
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        select.appendChild(option5);
        right.appendChild(select);
        right.appendChild(document.createElement("br"));
        right.appendChild(document.createElement("br"));
        let b = document.createElement("b");
        b.appendChild(document.createTextNode("SUBSCRIBE"));
        right.appendChild(b);
        right.appendChild(document.createElement("br"));
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "\xa0\xa0Email Address");
        input.setAttribute("id", "email");
        right.appendChild(input);
        let button = document.createElement("button");
        button.addEventListener("click", function() {
            this._controller.storeEmail();
        }.bind(this), false);
        b = document.createElement("b");
        var button = document.createElement("button");

        button.addEventListener("click", function() {
            this._controller.storeEmail();
        }.bind(this), false);

        button.setAttribute("onclick", "storeEmail()");

        var b = document.createElement("b");
        b.appendChild(document.createTextNode("Subscribe"));
        button.appendChild(b);
        right.appendChild(button);
        let message = document.createElement("div");
        message.setAttribute("class", "message");
        message.setAttribute("id", "message");
        right.appendChild(message);
        let message2 = document.createElement("div");
        message2.setAttribute("class", "message2");
        message2.setAttribute("id", "message2");
        right.appendChild(message2);
        return right;
    }


}

}

let model = new Model();
let controller = new Controller(model);
let view = new View(controller);
document.body.appendChild(view._modal);
document.body.appendChild(view._header);
document.body.appendChild(view._main);
document.body.appendChild(view._footer);

function optionSelect() {
    controller.optionSelect();
}


