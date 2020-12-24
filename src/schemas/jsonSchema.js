const jsonSchema = {
    "title": "Earth waypoints form",
    "description": "Array of three-field objects",
    "type": "object",
    "properties": {
        "location1": {
            "type": "object",
            "properties": {
                "latitude": {"type": "string"},
                "longitude": {"type": "string"},
                "altitude": {"type": "string"}
            }
        },
        "location2": {
            "type": "object",
            "properties": {
                "latitude": {"type": "string"},
                "longitude": {"type": "string"},
                "altitude": {"type": "string"}
            }
        },
        "location3": {
            "type": "object",
            "properties": {
                "latitude": {"type": "string"},
                "longitude": {"type": "string"},
                "altitude": {"type": "string"}
            }
        }
    }
};
export default jsonSchema;
