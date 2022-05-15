const student = require('../routers/student.js');

function route(app) {
    app.use('/student/',student);
}

module.exports = route;