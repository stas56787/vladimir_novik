function CloneObj(obj) {
    var clone = {};
    for (key in obj)
        clone[key] = typeof obj[key] == 'object' ? Array.isArray(obj[key]) ? obj[key].slice(0, obj[key].length) : CloneObj(obj[key]) : obj[key];
    return clone;
}