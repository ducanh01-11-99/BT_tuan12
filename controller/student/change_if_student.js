const student = require('C:/Users/Admin/Desktop/demo/model/student')
//change information of student
class change_if_student {
    change(req,res) {
        student.findOne({mssv:req.body.mssv},function(err, result){
            if(!result) {
                res.send("nguoi dung khong ton tai");

            }
            else {
                const filter = { mssv: req.body.mssv };
                const update = { address: req.body.address};
                student.findOneAndUpdate(filter, update);
                res.send("Update thanh cong");
            }
        })
       
    }
}

module.exports = new change_if_student;