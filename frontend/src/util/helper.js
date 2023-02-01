export const trimInputValues = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'string') {
            obj[key] = obj[key].trim();
        }
    }
    return obj;
}

