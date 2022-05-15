const student = require('C:/Users/Admin/Desktop/demo/model/student')
class removetudent {
    remove(req,res,next) {
        student.findOne({mssv:req.body.mssv},function(err, result){
            if(!result) {
                res.send("nguoi dung khong ton tai");
            }
            else {
                result.remove();
                res.send("Xoa thanh cong");
            }
        })
       
    }
}

module.exports = new removetudent;