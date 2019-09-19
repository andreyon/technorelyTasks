function highLoadPerformance(a) {
    if (isNaN(a) || typeof a !== 'number') throw Error('Only number allowed');
    // Imagine that is this function is very high loaded.
    a = a * 3; // добавил от себя для наглядности
    console.log('function worked: ', a);
    return a;
}

function memoize(fn) {
    let cash = {}; //создаем объект кеша

    return (number) => {
        if (!(number in cash)) {  // проверка есть ли уже такой ключ в кеше
            cash[number] = fn(number); // отрабатывает функция и создаeм {ключ: результат} в кеше
            return cash[number];
        }
        else {
            console.log('from cash: ', cash[number]); // добавил от себя для наглядности
            return cash[number]; // если такой ключ уже есть возвращаем его значение без вычислений
        }
    };
}

const memoized = memoize(highLoadPerformance);

memoized(10);
memoized(10);



