const student = require('C:/Users/Admin/Desktop/demo/model/student')

class addstudent {
    add(req,res,next) {
        // student.add(req.body);
        // res.status(200);
        student.findOne({mssv:req.body.mssv},function(err, result){
            if(!result) {
                const newStudent = new student(req.body);
                newStudent.save();
                res.send("tao thanh cong")
            }
            else {
                res.send("nguoi dung da ton tai");
            }
        })
        
    }
}

module.exports = new addstudent;