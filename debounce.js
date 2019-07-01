/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
function debounce(callback, time) {
    let timerId = null;

    return function (...args) {
        let f = () => {
            callback.apply(this, args);
            timerId = null;
        };

        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(f, time)
    }
}


function someText(text, text2) {
    console.log(text, text2);
}

//checks

let deb = debounce(someText, 3000);

deb('first', 11); //not do
deb('second', 22); //must do
setTimeout(function (){deb('third', 33)}, 3200); //must do

