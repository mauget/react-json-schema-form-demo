const jsonSchema = {
    "title": "Earth waypoints form",
    "description": "Array of three-field objects",
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "latitude": {"type": "string"},
            "longitude": {"type": "string"},
            "altitude": {"type": "string"}
        }
    }
};

export default jsonSchema;
