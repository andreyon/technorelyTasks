function join(array, separator) {

    let str = "";
    let separatorStr = "" + separator;

    if (array.length == 0) {
        str = "";
    }

    else if (!separator){
        for (let i = 0; i < array.length; i++) {
            str = str + array[i];
            if (i < array.length - 1)
                str = str + ",";
        }
    }

    else {
        for (let i = 0; i < array.length; i++) {
            str = str + array[i];
            if (i < array.length - 1)
                str = str + separatorStr;
        }
    }
    return str;
}


const array = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];

console.log(join(array, '-'));

//all checks
console.log(join([], ' ')); //if empty array
console.log(join(array)); //if empty separator
console.log(join(array, 0)); //if separator is number

