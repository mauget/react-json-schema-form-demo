import RowWithMultipleInputFieldsTemplate from "../components/customFormTemplates/RowWithMultipleInputFieldsTemplate";

const uiSchema = {
    "location1": {
        "ui:ObjectFieldTemplate": RowWithMultipleInputFieldsTemplate,
        "ui:title": "Location One",
        "ui:autofocus": true,
        "ui:options": {
            "inputType": "decimal"
        }
    },
    "location2": {
        "ui:ObjectFieldTemplate": RowWithMultipleInputFieldsTemplate,
        "ui:title": "Location Two"
    },
    "location3": {
        "ui:ObjectFieldTemplate": RowWithMultipleInputFieldsTemplate,
        "ui:title": "Location Three"
    }
};

export default uiSchema;
