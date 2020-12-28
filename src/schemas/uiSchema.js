import TripleInputRow from "../components/customFormTemplates/TripleInputRow";

const uiSchema = {
    "location1": {
        "ui:ObjectFieldTemplate": TripleInputRow,
        "ui:title": "Location One",
        "ui:autofocus": true,
        "ui:options": {
            "inputType": "decimal"
        }
    },
    "location2": {
        "ui:ObjectFieldTemplate": TripleInputRow,
        "ui:title": "Location Two",
    },
    "location3": {
        "ui:ObjectFieldTemplate": TripleInputRow,
        "ui:title": "Location Three",
    }
};

export default uiSchema;
