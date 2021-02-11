const jsonSchema = {
    title: 'A registration form',
    description: 'A simple form example.',
    type: 'object',
    required: ['firstName', 'lastName'],
    properties: {
        firstName: {
            type: 'string',
            title: 'First name',
            default: 'Lou',
        },
        lastName: {
            type: 'string',
            title: 'Last name',
            default: 'Mauget',
        },
        telephone: {
            type: 'string',
            title: 'Telephone',
            minLength: 10,
        },
        age: {
            type: 'number',
            title: 'Age',
        },
        bio: {
            type: 'string',
            title: 'Biograaphy',
        },
        password: {
            type: 'string',
            title: 'Password',
        },
    },
};

export default jsonSchema;
