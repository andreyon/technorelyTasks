const ownFetch = (url) => {

   let response = new XMLHttpRequest();
    response.open('GET', url, true);
    response.send();

    return new Promise((resolve, reject) => {
        response.onreadystatechange = function () {

            if (!response) {
                let err = new Error('connection problems: no response received');
                reject(err);
            }
            else if (response.status !== 200) {
                resolve(alert(response.status + ": " + response.statusText))
            }
            else {
                resolve(response);
            }
        }
    });
};

ownFetch('https://jsonplaceholder.typicode.com/posts')
    .then(console.log)
    .then(res => res.json())
    .catch(err => console.log(err));