import { Controller } from "./controller.js"
import { Model } from "./model.js"
import { View } from "./view.js"

let model = new Model();
let controller = new Controller(model);
let view = new View(controller);
document.body.appendChild(view._modal);
document.body.appendChild(view._header);
document.body.appendChild(view._main);
document.body.appendChild(view._footer);