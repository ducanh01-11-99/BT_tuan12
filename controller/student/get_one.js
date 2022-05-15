const student = require('C:/Users/Admin/Desktop/demo/model/student')

class getOne {
    get(req,res) {
        // console.log(req.body.mssv);
        // student.findOne({mssv : req.body.mssv}, function(err, student) {
        //     if(!err) res.status(200).json(student);
        // })
        student.findOne({mssv:req.body.mssv},function(err, result){
            if(!result) {
                res.send("nguoi dung khong ton tai");
            }
            else {
                res.send(result);
            }
        })
       
            

        
    }
}
module.exports = new getOne;