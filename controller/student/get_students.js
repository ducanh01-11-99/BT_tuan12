const student = require('C:/Users/Admin/Desktop/demo/model/student')

class getStudents {
    get(req,res,next) {
        // student.find({}, function(err, student) {
        //     if(!err) res.status(200).json(student);
        // })

        student.find({})
            .then(student => res.json(student))
            .catch(error => next(error));
        
    }
}

module.exports = new getStudents;