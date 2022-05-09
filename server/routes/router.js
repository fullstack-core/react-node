const uniqid = require('uniqid');
// const path = require('path');
// const users = [{
//         id: 1,
//         name: "Richard Hendricks",
//         email: "richard@piedpiper.com",
//     },
//     {
//         id: 2,
//         name: "Bertram Gilfoyle",
//         email: "gilfoyle@piedpiper.com",
//     },
// ];
const users = []

const router = app => {
    app.get("/api", (req, res) => {
        console.log('api/users called!!!!!!!')
        res.send({ message: 'REST API from Node + Express' })
    });
    app.get('/api/users', (req, res) => {
        res.send(users);
    });

    app.post('/api/users/add', (req, res) => {
        const user = req.body.user;
        user.id = uniqid();
        console.log('Adding user:::::', user);
        users.push(user);
        res.json("user addedd");
    });
}
module.exports = router;