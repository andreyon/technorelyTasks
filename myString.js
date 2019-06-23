class MyString {

    reverse = (str) => {
        return str.split("").reverse().join("");
    };

    ucFirst = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    ucWords = (str) => {
        let arr = str.split(' ');
        return arr.map(function (el) {
            return el.charAt(0).toUpperCase() + el.slice(1);
        }).join(' '); //, this.arr
    };
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'


/*
Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.*/
