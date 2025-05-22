const UserService = require ('../services/user.service');   
exports.register = async (req, res ,next) => {

    try {
        const {emal, password} = req.body;
        const successRes = await UserService.registerUser(email, password); 

        res.json({status:true ,sucess : "user Registered successfully"});
        

    }catch(error){
        throw error;

    }
}