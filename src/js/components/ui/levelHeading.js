import makeElement from "../../utils/makeElement";

const heading = function(ElementType="h2", label="ui heading", className="ui-heading") {
    const template = `<${ElementType} class="${className}">${label}</${ElementType}>`;
    const element = makeElement(template)
    return element
}

export default heading