const ownFetch = url => {
  return new Promise((resolve, reject) => {
    let response = new XMLHttpRequest();
    response.open("GET", url, true);

    response.onload = function() {
      if (!response) {
        let err = new Error("connection problems: no response received");
        reject(err);
      } else if (response.status !== 200) {
        resolve(alert(response.status + ": " + response.statusText));
      } else {
        resolve(response);
      }
    };
    response.send();
  });
};

ownFetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.responseText)
  .then(console.log)
  .catch(err => console.log(err));
