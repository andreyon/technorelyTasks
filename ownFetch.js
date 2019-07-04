const ownFetch = (url, ...rest) => {

    let response = new XMLHttpRequest();


    response.open('GET', url, true);

    response.send();

    /* xhr.onreadystatechange = function () {
         if (this.readyState !== 4) return;

         if (xhr.status !== 200) {
             alert(xhr.status + ": " + xhr.statusText);
         }
         else {
             console.log(xhr.responseText); // responseText -- текст ответа.
             // return
         }
     };*/

    let promise = new Promise((resolve, reject) => {

        response.onreadystatechange = function () {

            if (response.status !== 200) {
                resolve(alert(response.status + ": " + response.statusText))
            }

            else {
                resolve(response);
            }
        }
    });

    return promise;
};

ownFetch('https://jsonplaceholder.typicode.com/posts')
    .then(console.log)

/*ownFetch('https://jsonplaceholder.typicode.com/posts')
    .then(console.log)
    .then(res => res());
    .catch(err => console.log(err));*/


/*В фалйе 'ownFetch.js', используя Promise, написать обертку над XHR. В результате ваш ownFetch должен работать так же как и нативный fetch.
    Для этого необходимо ознакомиться с интерфейсом, который предлогает XHR.*/
