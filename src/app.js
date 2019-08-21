const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();

// TODO: posts
app.get("/posts", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const posts = JSON.parse(data).posts;
        res.send(posts);
    });
});

app.get("/posts/:id", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const post = JSON.parse(data).posts.filter(e => e.id === +req.params.id);
        post.length ? res.send(JSON.stringify(post)) : res.status(404).send();
    });
});

app.post("/posts", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    const userId = req.query.userid;
    const title = req.query.title;
    const body = req.query.body;

    const post = {userId: userId, title: title, body: body};

    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    const id = Math.max.apply(Math, data.posts.map(function (o) {
        return o.id;
    }));
    post.id = id + 1;

    data.posts.push(post);
    data = JSON.stringify(data);

    fs.writeFileSync("src/database.json", data);
    res.send(post);
});

app.patch("/post/:id", (req, res) => {
    if (!req.query) return res.sendStatus(400);

    const id = req.params.id;

    const userId = req.query.userid;
    const title = req.query.title;
    const body = req.query.body;

    var data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    let post;
    for (let i = 0; i < data.posts.length; i++) {

        if (data.posts[i].id + "" == id) {
            post = data.posts[i];
            break;
        }
    }

    if (post) {
        post.userId = userId;
        post.title = title;
        post.body = body;

        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(post);
    }
    else {
        res.status(404).send();
    }
});

app.delete("/post/:id", (req, res) => {
    const id = req.params.id;
    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);
    let index = -1;

    for (let i = 0; i < data.posts.length; i++) {
        if (data.posts[i].id == id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        let post = data.posts.splice(index, 1)[0];
        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(post);
    }
    else {
        res.status(404).send();
    }
});

// TODO: comments
app.get("/comments", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const comments = JSON.parse(data).comments;
        res.send(comments);
    });
});

app.get("/comments/:id", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const comment = JSON.parse(data).comments.filter(e => e.id === +req.params.id);
        comment.length ? res.send(JSON.stringify(comment)) : res.status(404).send();
    });
});

app.post("/comments", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    const postId = req.query.postid;
    const name = req.query.name;
    const email = req.query.email;
    const body = req.query.body;

    const comment = {postId: postId, name: name, email: email, body: body};

    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    const id = Math.max.apply(Math, data.comments.map(function (o) {
        return o.id;
    }));
    comment.id = id + 1;

    data.comments.push(comment);
    data = JSON.stringify(data);

    fs.writeFileSync("src/database.json", data);
    res.send(comment);
});

app.patch("/comment/:id", (req, res) => {
    if (!req.query) return res.sendStatus(400);

    const id = req.params.id;

    const postId = req.query.postid;
    const name = req.query.name;
    const email = req.query.email;
    const body = req.query.body;

    var data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    let comment;
    for (let i = 0; i < data.comments.length; i++) {

        if (data.comments[i].id + "" == id) {
            comment = data.comments[i];
            break;
        }
    }

    if (comment) {
        comment.postId = postId;
        comment.name = name;
        comment.email = email;
        comment.body = body;

        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(comment);
    }
    else {
        res.status(404).send();
    }
});

app.delete("/comment/:id", (req, res) => {
    const id = req.params.id;
    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);
    let index = -1;

    for (let i = 0; i < data.comments.length; i++) {
        if (data.comments[i].id == id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        let comment = data.comments.splice(index, 1)[0];
        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(comment);
    }
    else {
        res.status(404).send();
    }
});

// TODO: albums
app.get("/albums", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const albums = JSON.parse(data).albums;
        res.send(albums);
    });
});

app.get("/albums/:id", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const album = JSON.parse(data).albums.filter(e => e.id === +req.params.id);
        album.length ? res.send(JSON.stringify(album)) : res.status(404).send();
    });
});

app.post("/albums", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    const userId = req.query.userid;
    const title = req.query.title;

    const album = {userId: userId, title: title};

    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    const id = Math.max.apply(Math, data.albums.map(function (o) {
        return o.id;
    }));
    album.id = id + 1;

    data.albums.push(album);
    data = JSON.stringify(data);

    fs.writeFileSync("src/database.json", data);
    res.send(album);
});

app.patch("/album/:id", (req, res) => {
    if (!req.query) return res.sendStatus(400);

    const id = req.params.id;

    const userId = req.query.userid;
    const title = req.query.title;

    var data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    let album;
    for (let i = 0; i < data.albums.length; i++) {

        if (data.albums[i].id + "" == id) {
            album = data.albums[i];
            break;
        }
    }

    if (album) {
        album.userId = userId;
        album.title = title;

        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(album);
    }
    else {
        res.status(404).send();
    }
});

app.delete("/album/:id", (req, res) => {
    const id = req.params.id;
    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);
    let index = -1;

    for (let i = 0; i < data.albums.length; i++) {
        if (data.albums[i].id == id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        let album = data.albums.splice(index, 1)[0];
        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(album);
    }
    else {
        res.status(404).send();
    }
});

// TODO: todos
app.get("/todos", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const todos = JSON.parse(data).todos;
        res.send(todos);
    });
});

app.get("/todos/:id", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const todo = JSON.parse(data).todos.filter(e => e.id === +req.params.id);
        todo.length ? res.send(JSON.stringify(todo)) : res.status(404).send();
    });
});

app.post("/todo", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    const userId = req.query.userid;
    const title = req.query.title;
    const completed = req.query.completed;

    const todo = {userId: userId, title: title, completed: completed};

    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    const id = Math.max.apply(Math, data.todos.map(function (o) {
        return o.id;
    }));
    todo.id = id + 1;

    data.todos.push(todo);
    data = JSON.stringify(data);

    fs.writeFileSync("src/database.json", data);
    res.send(todo);
});

app.patch("/todo/:id", (req, res) => {
    if (!req.query) return res.sendStatus(400);

    const id = req.params.id;

    const userId = req.query.userid;
    const title = req.query.title;
    const completed = req.query.completed;


    var data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    let todo;
    for (let i = 0; i < data.todos.length; i++) {

        if (data.todos[i].id + "" == id) {
            todo = data.todos[i];
            break;
        }
    }

    if (todo) {
        todo.userId = userId;
        todo.title = title;
        todo.completed = completed;

        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(todo);
    }
    else {
        res.status(404).send(user);
    }
});

app.delete("/todo/:id", (req, res) => {
    const id = req.params.id;
    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);
    let index = -1;

    for (let i = 0; i < data.todos.length; i++) {
        if (data.todos[i].id == id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        let todo = data.todos.splice(index, 1)[0];
        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(todo);
    }
    else {
        res.status(404).send();
    }
});

// TODO: users
app.get("/users", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const users = JSON.parse(data).users;
        res.send(users);
    });
});

app.get("/users/:id", (req, res) => {
    fs.readFile("src/database.json", "utf8", (err, data) => {
        if (err) return res.status(404).send(err);
        const user = JSON.parse(data).users.filter(e => e.id === +req.params.id);
        user.length ? res.send(JSON.stringify(user)) : res.status(404).send();
    });
});

app.post("/users", jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);

    // доделать сложные объекты в запросе - по свободе
    const name = req.query.name;
    const userName = req.query.username;
    const email = req.query.email;
    const phone = req.query.phone;
    const website = req.query.website;
    const user = {name: name, username: userName, email: email, phone: phone, website: website};

    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    const id = Math.max.apply(Math, data.users.map(function (o) {
        return o.id;
    }));
    user.id = id + 1;

    data.users.push(user);
    data = JSON.stringify(data);

    fs.writeFileSync("src/database.json", data);
    res.send(user);
});

app.patch("/user/:id", (req, res) => {
    if (!req.query) return res.sendStatus(400);

    const userId = req.params.id;
    const name = req.query.name;
    const userName = req.query.username;
    const email = req.query.email;
    const phone = req.query.phone;
    const website = req.query.website;

    var data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);

    let user;
    for (let i = 0; i < data.users.length; i++) {

        if (data.users[i].id + "" == userId) {
            user = data.users[i];
            break;
        }
    }

    if (user) {
        user.name = name;
        user.username = userName;
        user.email = email;
        user.phone = phone;
        user.website = website;

        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(user);
    }
    else {
        res.status(404).send(user);
    }
});

app.delete("/user/:id", (req, res) => {
    const id = req.params.id;
    let data = fs.readFileSync("src/database.json", "utf8");
    data = JSON.parse(data);
    let index = -1;

    for (let i = 0; i < data.users.length; i++) {
        if (data.users[i].id == id) {
            index = i;
            break;
        }
    }
    if (index > -1) {
        let user = data.users.splice(index, 1)[0];
        data = JSON.stringify(data);
        fs.writeFileSync("src/database.json", data);
        res.send(user);
    }
    else {
        res.status(404).send();
    }
});

module.exports = app;
