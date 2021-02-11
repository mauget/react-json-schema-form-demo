import TwoColObjectFieldTemplate from "../components/TwoColObjectFieldTemplate";

const uiSchema = {
    "ui:ObjectFieldTemplate": TwoColObjectFieldTemplate,
    "firstName": {
        "ui:autofocus": true,
        "ui:emptyValue": "",
        "ui:autocomplete": "surname"
    },
    "lastName": {
        "ui:emptyValue": "",
        "ui:autocomplete": "given-name"
    },
    "age": {
        "ui:widget": "updown",
        "ui:title": "Age of person",
    },
    "bio": {
        "ui:widget": "textarea"
    },
    "password": {
        "ui:widget": "password",
    },
    "telephone": {
        "ui:options": {
            "inputType": "tel"
        }
    }
};

export default uiSchema;
