const express = require('express');
const route = express.Router();
const addstudent = require('../controller/student/addstudent.js');

const removestudent = require('../controller/student/removestudent.js');

const change_if_student = require('../controller/student/change_if_student.js');

const getallstudent = require('../controller/student/get_students.js');
const get_one = require('../controller/student/get_one.js')

// route.post('/add',newSolve.sum);
// route.use('/sub',newSolve.sub);

route.post('/add',addstudent.add);
route.use('/remove',removestudent.remove);
route.use('/change',change_if_student.change);
route.get('/getall',getallstudent.get);
route.get('/getone',get_one.get);


module.exports = route;
