export const loadStorageItem = (key) => {
    try {
        const serializedValue = localStorage.getItem(key);
        if(null === serializedValue){
            return undefined;
        }
        return JSON.parse(serializedValue);
    } catch (error) {
        return undefined;
    }
}

export const saveStorageItem = (key, value) => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        // ignore write errors
    }
}