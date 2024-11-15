import { $Element } from "rosana";

const Button = function (parent: object, text: string, type: string, properties: object) {
    let button = new $Element("mdui-button", parent);

    if (text) {
        button.element.textContent = text;
    } else {
        button.element.textContent = "Button";
    }
    if (type) {
        button.element.variant = type;
    } else {
        button.element.variant = "filed";
    }

    return button;
};

export default Button;
