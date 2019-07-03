const ownFetch = () => {
// 1. Создаём новый объект XMLHttpRequest
    let xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', false);

// 3. Отсылаем запрос
    xhr.send();

    console.dir(xhr); // responseText -- текст ответа.
    console.log(xhr.status);
// 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        console.log(xhr.responseText); // responseText -- текст ответа.
    }


};

ownFetch();


/*ownFetch('https://jsonplaceholder.typicode.com/posts')
    .then(console.log)
    .then(res => res());
.
catch(err => console.log(err));*/


/*В фалйе 'ownFetch.js', используя Promise, написать обертку над XHR. В результате ваш ownFetch должен работать так же как и нативный fetch.
    Для этого необходимо ознакомиться с интерфейсом, который предлогает XHR.*/
