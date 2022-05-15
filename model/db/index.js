const mongoose = require('mongoose');

class connect {
    async connect() {
    try {
        await mongoose.connect('mongodb+srv://root:lmk123@cluster0.jcqb6.mongodb.net/BT_tuan12', {
            useNewURLParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully!!!');
    } catch(error) {
        console.log('connect failled!!!');
    }
}
}



module.exports = new connect;
