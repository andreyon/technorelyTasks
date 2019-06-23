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

    else {
        for (let i = 0; i < string.length; i++) {

            if (string[i] === separator) {
                arr[arrIndex] = arrElem;
                arrIndex++;
                arrElem = "";
                continue;
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
console.log(split(string, " ", 4));
console.log(split(string, ""));
console.log(split(string));

