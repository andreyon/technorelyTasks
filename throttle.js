/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
function throttle(callback, time) {

    let flagPaused = false,
        savedArgs,
        savedThis;

    function func() {

        if (flagPaused) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        callback.apply(this, arguments);

        flagPaused = true;

        setTimeout(function () {
            flagPaused = false;
            if (savedArgs) {
                func.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, time);
    }

    return func;
}


function someText(text, text2) {
    console.log(text, text2);
}

//checks

let throt = throttle(someText, 3000);

throt('first', 11); // must do
throt('second', 22); // not do
setTimeout(function () {
    throt('third', 33)
}, 1200); //must do
