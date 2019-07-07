const random = (max, min) => Math.floor(Math.random() * (max - min)) + min;

function test() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            const user = data[random(10, 0)];
            console.log('My user is', user);
            return user;
        })
        .then(user => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => {
                    const post = data[random(100, 0)];
                    console.log('My post is', post);
                    const finalRes = {
                        user,
                        post
                    };
                    console.log('Finally', finalRes);
                });
        });

    console.log('I have to appear in a console first');
}

async function asyncTest() {
    console.log('I have to appear in a console first');

    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let res = await response.json();
    let user = await res[random(10, 0)];
    console.log('My user is', user);

    response = await fetch('https://jsonplaceholder.typicode.com/posts');
    res = await response.json();
    let post = await res[random(10, 0)];
    console.log('My post is', post);

    const finalRes = await {
        user,
        post
    };
        console.log('Finally', finalRes);
}

// test();
asyncTest();


/*
В файле 'asyncAwait.js' переписать предложенную вам функцию test. Используя async await. Последовательность результатов вывода в консоль должна быть такой же как и в предложенном варианте.*/
