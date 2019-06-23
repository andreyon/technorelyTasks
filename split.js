function split(string, separator, limit) {
    let arr = [];
    let arrElem = "";
    let arrIndex = 0;

    if (separator === "") {
        for (let i = 0; i < string.length; i++)
            arr[i] = string[i];
    }

    else if (typeof(separator) !== "string"){
        arr[0] = string;
    }

    else if (string === ""){
        arr[0] = string;
    }

    else {
        for (let i = 0; i < string.length; i++) {

            if (string[i] === separator) {
                arr[arrIndex] = arrElem;
                arrIndex++;
                arrElem = "";
            }

            else if (arrIndex >= limit) {
                break;
            }

            else {
                arrElem = arrElem + string[i];
            }
        }
    }
    return arr;
}

const string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

console.log(split(string, ' '));

// all checks
console.log(split(string, " ", 4)); //with limit
console.log(split(string, "")); // if separator empty
console.log(split(string)); // without separator
console.log(split("")); // if string empty

