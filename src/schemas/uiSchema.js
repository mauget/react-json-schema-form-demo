import FluidObjectFieldTemplate from '../components/FluidObjectFieldTemplate';

const uiSchema = {
    'ui:ObjectFieldTemplate': FluidObjectFieldTemplate,
    firstName: {
        'ui:autofocus': true,
        'ui:emptyValue': '',
        'ui:autocomplete': 'surname',
    },
    lastName: {
        'ui:emptyValue': '',
        'ui:autocomplete': 'given-name',
    },
    age: {
        'ui:widget': 'updown',
        'ui:title': 'Age of person',
    },
    bio: {
        'ui:widget': 'textarea',
    },
    password: {
        'ui:widget': 'password',
    },
    // phone: {
    //     'ui:widget': 'tel',
    // },
};

export default uiSchema;
