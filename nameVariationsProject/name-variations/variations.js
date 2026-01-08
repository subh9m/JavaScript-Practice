

export function getNumberOfChars(name){
    return name.length;
}

export function getFirstChar(name){
    return name[0];
}

export function getLastChar(name){
    return name[name.length - 1]
}

export function getLowerCase(name){
    return name.toLowerCase();
}

export function getUpperCase(name){
    return name.toUpperCase();
}

export function getCapital(name){
    let a = name[0].toUpperCase();
    let b = name.substring(1).toLowerCase();
    return a + b;
}